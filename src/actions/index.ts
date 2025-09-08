import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { z } from 'zod';

// Helper to lazily create Resend instance server-side only.
function createResend() {
	const apiKey = import.meta.env.RESEND_API_KEY as string | undefined;
	if (!apiKey) {
		throw new ActionError({
			code: 'INTERNAL_SERVER_ERROR',
			message: 'Email service not configured (missing RESEND_API_KEY).',
		});
	}
	return new Resend(apiKey);
}

export const server = {
	send: defineAction({
		accept: 'form',
		input: z.object({
			firstName: z.string().min(1, 'First name is required').max(100),
			lastName: z.string().min(1, 'Last name is required').max(100),
			email: z.string().email('Invalid email address').max(320),
			subject: z.string().min(1, 'Subject is required').max(150),
			message: z.string().min(1, 'Message is required').max(5000),
			// Honeypot & timing fields (optional, not required by user UI)
			company: z.string().optional(),
			_ts: z.string().optional(), // client will send initial timestamp (ms)
		}),
		handler: async ({ firstName, lastName, email, subject, message, company, _ts }, ctx) => {
			// 1. Honeypot check
			if (company && company.trim() !== '') {
				// Silently succeed to mislead bots
				return { success: true, message: 'Message sent successfully!' };
			}
			// 2. Time-to-submit heuristic (reject super-fast bots)
			if (_ts) {
				const started = parseInt(_ts, 10);
				if (!Number.isNaN(started)) {
					const delta = Date.now() - started;
					if (delta < 500) {
						throw new ActionError({ code: 'BAD_REQUEST', message: 'Rejected (suspiciously fast submission).' });
					}
				}
			}
			// 3. Basic in-memory rate limiting (per IP) - ephemeral, best-effort only.
			const ip = ctx.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
			// @ts-ignore attach a simple map to globalThis for runtime (reset on cold start)
			const store: Map<string, { count: number; first: number }> = (globalThis.__contactRate ||= new Map());
			const windowMs = 60_000; // 1 min
			const limit = 5; // 5 submissions / min / IP
			const now = Date.now();
			const rec = store.get(ip) || { count: 0, first: now };
			if (now - rec.first > windowMs) {
				rec.count = 0;
				rec.first = now;
			}
			rec.count += 1;
			store.set(ip, rec);
			if (rec.count > limit) {
				throw new ActionError({ code: 'BAD_REQUEST', message: 'Rate limit exceeded. Please wait a moment.' });
			}
			// 4. Sanitization: entity-escape instead of stripping to preserve user content (basic formatting)
			const escapeHtml = (val: string) =>
				val
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/'/g, '&#39;');
			const cleanMessage = escapeHtml(message).trim();
			const cleanSubject = escapeHtml(subject).trim();
			// 5. Env-configured addresses
			const fromAddress =
				(import.meta.env.CONTACT_FROM as string | undefined) || 'Nexor Software <noreply@auth.nexor-software.de>';
			const toAddresses = ((import.meta.env.CONTACT_TO as string | undefined) || 'info@nexor-software.de')
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean);
			try {
				const resend = createResend();
				const { data, error } = await resend.emails.send({
					from: fromAddress,
					to: toAddresses,
					subject: `Contact Form: ${cleanSubject}`,
					html: `
						<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
							<h2 style="color: #0C1C2C;">New Contact Form Submission</h2>
							<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
								<p><strong>Name:</strong> ${firstName} ${lastName}</p>
								<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
								<p><strong>Subject:</strong> ${cleanSubject}</p>
							</div>
							<div style="background: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
								<h3 style="color: #0C1C2C; margin-top: 0;">Message:</h3>
								<p style="line-height: 1.6; white-space: pre-wrap;">${cleanMessage.replace(/\n/g, '<br/>')}</p>
							</div>
							<hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
							<p style="color: #6c757d; font-size: 14px;">
								This message was sent from the Nexor Software contact form. IP: ${ip}
							</p>
						</div>
					`,
					text: `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nIP: ${ip}\n\nMessage:\n${message}`,
					replyTo: email,
				});

				if (error) {
					// Log full Resend error (non-sensitive) for debugging
					console.error('[resend] send error', {
						message: error.message,
						name: (error as any).name,
						statusCode: (error as any).statusCode,
						cause: (error as any).cause,
					});
					throw new ActionError({
						code: 'BAD_REQUEST',
						message: error.message || 'Email service error',
					});
				}

				return { success: true, message: 'Message sent successfully!', id: data?.id };
			} catch (err) {
				// Don't re-wrap an ActionError (preserve original status + code)
				if (err instanceof ActionError) throw err;
				console.error('Error sending email (unexpected):', err);
				throw new ActionError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Failed to send message. Please try again later.',
				});
			}
		},
	}),
};
