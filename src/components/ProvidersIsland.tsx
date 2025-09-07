import { useState, lazy, Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

const PostHogProvider = lazy(() => import('@posthog/react').then((module) => ({ default: module.PostHogProvider })));

interface ProvidersIslandProps {
	currentLocale?: string;
}

export function ProvidersIsland({ currentLocale = 'en' }: ProvidersIslandProps) {
	// Ensure a stable QueryClient across renders with optimized settings
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000, // 5 minutes
						gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
						refetchOnWindowFocus: false,
					},
				},
			})
	);

	const [loadAnalytics, setLoadAnalytics] = useState(false);

	// Load analytics after initial page load
	useEffect(() => {
		const timer = setTimeout(() => setLoadAnalytics(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Suspense fallback={<div></div>}>
			{loadAnalytics ? (
				<PostHogProvider
					apiKey="phc_8aXrzs13g5HvrC84ImJoh1BLQpYbOq2zlZPTDNSdoTQ"
					options={{
						api_host: 'https://eu.i.posthog.com',
						cookieless_mode: 'on_reject',
					}}>
					<QueryClientProvider client={queryClient}>
						<TooltipProvider>
							<CookieConsentBanner currentLocale={currentLocale} />
						</TooltipProvider>
					</QueryClientProvider>
				</PostHogProvider>
			) : (
				<QueryClientProvider client={queryClient}>
					<TooltipProvider>
						<CookieConsentBanner currentLocale={currentLocale} />
					</TooltipProvider>
				</QueryClientProvider>
			)}
		</Suspense>
	);
}
