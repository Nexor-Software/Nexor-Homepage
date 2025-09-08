import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import HeroTitle from './HeroTitle';
import { useState, useRef, useEffect } from 'react';
// Import the server actions wrapper (Astro will tree-shake server code from client bundle)
// No direct actions import (astro:actions actions object not exported in current version); we'll POST to action endpoint manually.

interface ContactComponentProps {
	currentLocale?: string;
}

const ContactComponent = ({ currentLocale = 'de' }: ContactComponentProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
	const [msgLength, setMsgLength] = useState(0);
	const startTsRef = useRef<string>('');
	useEffect(() => {
		startTsRef.current = Date.now().toString();
	}, []);
	const translations = {
		en: {
			badge: 'Contact',
			heroTitle: ['Contact Us'],
			heroText:
				"Ready to start your next project? Get in touch with our team and let's discuss how we can help transform your business.",
			formTitle: 'Send us a Message',
			firstName: 'First Name',
			lastName: 'Last Name',
			email: 'Email',
			subject: 'Subject',
			message: 'Message',
			firstNamePlaceholder: 'Your first name',
			lastNamePlaceholder: 'Your last name',
			emailPlaceholder: 'your.email@example.com',
			subjectPlaceholder: "What's this about?",
			messagePlaceholder: 'Tell us about your project...',
			sendMessage: 'Send Message',
			getInTouch: 'Get in Touch',
			getInTouchPart1: 'Get in',
			getInTouchPart2: 'Touch',
			getInTouchText:
				"We're here to help you bring your ideas to life. Whether you have a question about our services, need a quote for your project, or just want to say hello, we'd love to hear from you.",
			emailTitle: 'Email',
			phoneTitle: 'Phone',
			addressTitle: 'Address',
			businessHoursTitle: 'Business Hours',
			businessHours: 'Mon - Fri: 9:00 - 18:00\nSat - Sun: Closed',
		},
		de: {
			badge: 'Kontakt',
			heroTitle: ['Kontaktiere uns'],
			heroText:
				'Bereit für Ihr nächstes Projekt? Kontaktieren Sie unser Team und lassen Sie uns besprechen, wie wir Ihr Unternehmen transformieren können.',
			formTitle: 'Senden Sie uns eine Nachricht',
			firstName: 'Vorname',
			lastName: 'Nachname',
			email: 'E-Mail',
			subject: 'Betreff',
			message: 'Nachricht',
			firstNamePlaceholder: 'Ihr Vorname',
			lastNamePlaceholder: 'Ihr Nachname',
			emailPlaceholder: 'ihre.email@beispiel.com',
			subjectPlaceholder: 'Worum geht es?',
			messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
			sendMessage: 'Nachricht senden',
			getInTouch: 'Kontakt aufnehmen',
			getInTouchPart1: 'Kontakt',
			getInTouchPart2: 'aufnehmen',
			getInTouchText:
				'Wir sind hier, um Ihnen zu helfen, Ihre Ideen zum Leben zu erwecken. Ob Sie eine Frage zu unseren Dienstleistungen haben, ein Angebot für Ihr Projekt benötigen oder einfach nur Hallo sagen möchten, wir freuen uns auf Ihre Nachricht.',
			emailTitle: 'E-Mail',
			phoneTitle: 'Telefon',
			addressTitle: 'Adresse',
			businessHoursTitle: 'Geschäftszeiten',
			businessHours: 'Mo - Fr: 9:00 - 18:00\nSa - So: Geschlossen',
		},
		_enhanced: {
			en: {
				successTitle: 'Message Sent',
				successBody: 'Thanks! Your message was delivered successfully. We will reply shortly.',
				errorTitle: 'Send Failed',
				errorBody: 'We could not send your message. Please try again later or email us directly.',
				validating: 'Validating…',
				sending: 'Sending…',
				defaultSuccess: 'Message sent successfully!',
				defaultError: 'Failed to send message.',
			},
			de: {
				successTitle: 'Nachricht gesendet',
				successBody: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze.',
				errorTitle: 'Senden fehlgeschlagen',
				errorBody:
					'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder senden Sie uns direkt eine E-Mail.',
				validating: 'Validierung…',
				sending: 'Wird gesendet…',
				defaultSuccess: 'Nachricht erfolgreich gesendet!',
				defaultError: 'Nachricht konnte nicht gesendet werden.',
			},
		},
	};

	const localeKey = (currentLocale === 'en' ? 'en' : 'de') as 'en' | 'de';
	const t = translations[localeKey];
	const em = (translations as any)._enhanced[localeKey];
	const contactInfo = [
		{
			icon: <Mail className="h-6 w-6 text-[#30D6C4]" />,
			title: t.emailTitle,
			content: 'info@nexorsoftware.com',
			link: 'mailto:info@nexorsoftware.com',
		},
		{
			icon: <Phone className="h-6 w-6 text-[#30D6C4]" />,
			title: t.phoneTitle,
			content: '+49 1777830812',
			link: 'tel:+491777830812',
		},
		{
			icon: <MapPin className="h-6 w-6 text-[#30D6C4]" />,
			title: t.addressTitle,
			content: 'Heidenheim\nGermany',
			link: null,
		},
		{
			icon: <Clock className="h-6 w-6 text-[#30D6C4]" />,
			title: t.businessHoursTitle,
			content: t.businessHours,
			link: null,
		},
	];

	return (
		<div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 px-8 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(48,214,196,0.1),transparent_50%)]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(48,214,196,0.05),transparent_50%)]"></div>
				<div className="relative max-w-6xl mx-auto flex flex-col items-center">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-[#30D6C4]/10 border border-[#30D6C4]/20 text-[#30D6C4] text-sm font-medium mb-8">
						<span className="w-2 h-2 bg-[#30D6C4] rounded-full mr-2 animate-pulse"></span>
						{t.badge}
					</div>
					<HeroTitle text={t.heroTitle} textColors={['#30D6C4']} />
					<p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-4xl mx-auto leading-relaxed mb-12">
						{t.heroText}
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-[#30D6C4] to-transparent mx-auto"></div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 px-8 bg-[#0C1C2C]">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="bg-[#0F2235]/50 backdrop-blur-sm border-[#30D6C4]/10 hover:border-[#30D6C4]/30 shadow-2xl hover:shadow-[#30D6C4]/10 transition-all duration-500 group">
							<CardHeader>
								<CardTitle className="text-2xl font-oswald font-normal text-white">{t.formTitle}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{message && (
									<Alert
										className={`relative overflow-hidden border ${
											message.type === 'success'
												? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
												: 'border-rose-400/30 bg-rose-400/10 text-rose-100'
										} animate-in fade-in slide-in-from-top-2 duration-300`}>
										<div className="absolute inset-0 opacity-10 pointer-events-none">
											<div
												className={`w-full h-full ${
													message.type === 'success'
														? 'bg-gradient-to-br from-emerald-400 via-transparent to-transparent'
														: 'bg-gradient-to-br from-rose-400 via-transparent to-transparent'
												}`}></div>
										</div>
										<AlertTitle className="flex items-center gap-2 relative z-10">
											{message.type === 'success' ? (
												<svg
													className="h-4 w-4 text-emerald-300"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round">
													<path d="M9 12l2 2 4-4" />
													<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											) : (
												<svg
													className="h-4 w-4 text-rose-300"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round">
													<circle cx="12" cy="12" r="10" />
													<path d="M15 9l-6 6" />
													<path d="M9 9l6 6" />
												</svg>
											)}
											{message.type === 'success' ? em.successTitle : em.errorTitle}
										</AlertTitle>
										<AlertDescription className="relative z-10 text-sm leading-relaxed">
											{message.type === 'success' ? em.successBody : em.errorBody}
											{message.text && message.text !== em.defaultSuccess && message.text !== em.defaultError && (
												<p className="mt-2 opacity-80">{message.text}</p>
											)}
										</AlertDescription>
									</Alert>
								)}
								<form
									onSubmit={async (e) => {
										e.preventDefault();
										setIsLoading(true);
										setMessage(null);
										const formData = new FormData(e.target as HTMLFormElement);
										formData.append('_ts', startTsRef.current || Date.now().toString());
										try {
											const actionUrl = '/_actions/send';
											const response = await fetch(actionUrl, { method: 'POST', body: formData });
											let raw: any = {};
											try {
												raw = await response.json();
											} catch {
												/* ignore */
											}

											// Astro action responses usually shaped as { data: {...} } or { error: {...} }
											const payload = raw?.data ?? raw; // fallback to top-level

											if (!response.ok || raw?.error) {
												const errMsg = raw?.error?.message || payload?.message || em.defaultError;
												setMessage({ type: 'error', text: errMsg });
												return;
											}

											const success = payload?.success === true || typeof payload?.id === 'string';
											const msg = payload?.message || 'Message sent successfully!';

											if (success) {
												setMessage({ type: 'success', text: msg });
												(e.target as HTMLFormElement).reset();
												return;
											}

											// Fallback heuristic: if we got no error and we have any keys, assume success
											const hasContent = Object.keys(payload || {}).length > 0;
											if (hasContent) {
												setMessage({ type: 'success', text: msg });
												(e.target as HTMLFormElement).reset();
											} else {
												setMessage({ type: 'error', text: em.defaultError });
											}
										} catch (error: any) {
											console.error('Form submission error:', error);
											const errorMessage = error?.message || 'Failed to send message. Please try again.';
											setMessage({ type: 'error', text: errorMessage });
										} finally {
											setIsLoading(false);
										}
									}}
									className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-white font-inter mb-2 text-sm md:text-base">{t.firstName}</label>
											<Input
												name="firstName"
												placeholder={t.firstNamePlaceholder}
												className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
												required
											/>
										</div>
										<div>
											<label className="block text-white font-inter mb-2 text-sm md:text-base">{t.lastName}</label>
											<Input
												name="lastName"
												placeholder={t.lastNamePlaceholder}
												className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
												required
											/>
										</div>
									</div>
									<div>
										<label className="block text-white font-inter mb-2 text-sm md:text-base">{t.email}</label>
										<Input
											name="email"
											type="email"
											placeholder={t.emailPlaceholder}
											className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
											required
										/>
									</div>
									<div>
										<label className="block text-white font-inter mb-2 text-sm md:text-base">{t.subject}</label>
										<Input
											name="subject"
											placeholder={t.subjectPlaceholder}
											className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
											required
										/>
									</div>
									<div>
										<label className="block text-white font-inter mb-2 text-sm md:text-base">{t.message}</label>
										<Textarea
											name="message"
											placeholder={t.messagePlaceholder}
											rows={6}
											className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 min-h-[120px] md:min-h-[80px]"
											maxLength={5000}
											onChange={(ev) => setMsgLength(ev.target.value.length)}
											required
										/>
										<div className="flex justify-end text-xs text-gray-400 mt-1">{msgLength} / 5000</div>
									</div>
									{/* Honeypot field (hidden from users) */}
									<div className="hidden" aria-hidden="true">
										<label>
											Company
											<input type="text" name="company" tabIndex={-1} autoComplete="off" />
										</label>
									</div>
									<Button
										type="submit"
										disabled={isLoading}
										className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium py-3 rounded-lg disabled:opacity-50">
										{isLoading ? 'Sending...' : t.sendMessage}
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-oswald font-normal text-white mb-6">
									{t.getInTouchPart1} <span className="text-[#30D6C4]">{t.getInTouchPart2}</span>
								</h2>
								<p className="text-lg text-[#B0C4D4] font-inter leading-relaxed">{t.getInTouchText}</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{contactInfo.map((info, index) => (
									<Card
										key={index}
										className="bg-[#0F2235]/50 backdrop-blur-sm border-[#30D6C4]/10 hover:border-[#30D6C4]/30 hover:shadow-2xl hover:shadow-[#30D6C4]/10 transition-all duration-500 hover:-translate-y-2 group">
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<div className="shrink-0 w-12 h-12 bg-[#30D6C4]/10 rounded-xl flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
													{info.icon}
												</div>
												<div>
													<h3 className="text-white font-inter font-medium mb-2">{info.title}</h3>
													{info.link ? (
														<a
															href={info.link}
															className="text-[#B0C4D4] hover:text-[#30D6C4] transition-colors font-inter">
															{info.content}
														</a>
													) : (
														<p className="text-[#B0C4D4] font-inter whitespace-pre-line">{info.content}</p>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactComponent;
