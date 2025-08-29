import { useState } from 'react';
import { PostHogProvider } from '@posthog/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

interface ProvidersIslandProps {
	currentLocale?: string;
}

export function ProvidersIsland({ currentLocale = 'en' }: ProvidersIslandProps) {
	// Ensure a stable QueryClient across renders
	const [queryClient] = useState(() => new QueryClient());

	return (
		<PostHogProvider
			apiKey="phc_8aXrzs13g5HvrC84ImJoh1BLQpYbOq2zlZPTDNSdoTQ"
			options={{
				api_host: 'https://eu.i.posthog.com',
				cookieless_mode: 'on_reject',
			}}>
			<QueryClientProvider client={queryClient}>
				<TooltipProvider>
					<CookieConsentBanner currentLocale={currentLocale} />
					<Toaster />
					<Sonner />
				</TooltipProvider>
			</QueryClientProvider>
		</PostHogProvider>
	);
}
