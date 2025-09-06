import { useState, lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { Toaster } from '@/components/ui/toaster';

const PostHogProvider = lazy(() => import('@posthog/react').then((module) => ({ default: module.PostHogProvider })));
const Sonner = lazy(() => import('@/components/ui/sonner').then((module) => ({ default: module.Toaster })));

interface ProvidersIslandProps {
	currentLocale?: string;
}

export function ProvidersIsland({ currentLocale = 'en' }: ProvidersIslandProps) {
	// Ensure a stable QueryClient across renders
	const [queryClient] = useState(() => new QueryClient());

	return (
		<Suspense fallback={<div></div>}>
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
						<Suspense fallback={<div></div>}>
							<Sonner />
						</Suspense>
					</TooltipProvider>
				</QueryClientProvider>
			</PostHogProvider>
		</Suspense>
	);
}
