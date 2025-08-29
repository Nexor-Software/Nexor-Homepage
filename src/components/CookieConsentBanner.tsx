import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { usePostHog } from '@posthog/react';

interface CookieConsentBannerProps {
	currentLocale?: string;
}

export const CookieConsentBanner = ({ currentLocale = 'en' }: CookieConsentBannerProps) => {
	const posthog = usePostHog();
	const [consentStatus, setConsentStatus] = useState<'pending' | 'granted' | 'denied'>('pending');
	const [isVisible, setIsVisible] = useState(false);
	const [isPostHogReady, setIsPostHogReady] = useState(false);

	useEffect(() => {
		// Check localStorage first for consent status
		const storedConsent = localStorage.getItem('cookieConsent');
		if (storedConsent === 'granted') {
			setConsentStatus('granted');
			return;
		} else if (storedConsent === 'denied') {
			setConsentStatus('denied');
			return;
		}

		// Check if PostHog is loaded and ready
		if (posthog && typeof posthog.get_explicit_consent_status === 'function') {
			setIsPostHogReady(true);
			const status = posthog.get_explicit_consent_status();
			setConsentStatus(status);

			// Show banner on first visit or when manually triggered
			if (status === 'pending') {
				setIsVisible(true);
			}
		} else {
			// If PostHog is not ready yet, try again after a delay
			const timer = setTimeout(() => {
				if (posthog && typeof posthog.get_explicit_consent_status === 'function') {
					setIsPostHogReady(true);
					const status = posthog.get_explicit_consent_status();
					setConsentStatus(status);
					if (status === 'pending') {
						setIsVisible(true);
					}
				}
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [posthog]);

	const handleAccept = () => {
		if (posthog && isPostHogReady && typeof posthog.opt_in_capturing === 'function') {
			posthog.opt_in_capturing();
		}
		localStorage.setItem('cookieConsent', 'granted');
		setConsentStatus('granted');
		setIsVisible(false);
	};

	const handleDecline = () => {
		if (posthog && isPostHogReady && typeof posthog.opt_out_capturing === 'function') {
			posthog.opt_out_capturing();
		}
		localStorage.setItem('cookieConsent', 'denied');
		setConsentStatus('denied');
		setIsVisible(false);
	};
	const handleOpenBanner = () => {
		setIsVisible(true);
	};

	const handleClose = () => {
		setIsVisible(false);

		// Remember that user dismissed the banner
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieBannerDismissed', Date.now().toString());
		}
	};

	// Expose the open function globally for external access (e.g., from footer)
	useEffect(() => {
		if (typeof window !== 'undefined') {
			(window as any).openCookieBanner = handleOpenBanner;
		}
	}, []);

	const getStatusText = () => {
		switch (consentStatus) {
			case 'granted':
				return currentLocale === 'de'
					? 'Sie haben Cookies zugestimmt. Sie können Ihre Zustimmung jederzeit ändern.'
					: 'You have consented to cookies. You can change your consent at any time.';
			case 'denied':
				return currentLocale === 'de'
					? 'Sie haben Cookies abgelehnt. Sie können Ihre Zustimmung jederzeit ändern.'
					: 'You have declined cookies. You can change your consent at any time.';
			default:
				return currentLocale === 'de'
					? 'Bitte wählen Sie Ihre Cookie-Einstellungen.'
					: 'Please choose your cookie preferences.';
		}
	};

	const translations = {
		en: {
			title: 'Cookie Consent',
			description:
				'We use cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts.',
			accept: 'Accept All',
			decline: 'Decline',
			close: 'Close',
			necessary: 'Necessary cookies for website functionality',
			analytics: 'Analytics cookies to understand how you use our site',
		},
		de: {
			title: 'Cookie-Zustimmung',
			description:
				'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern, die Website-Nutzung zu analysieren und unsere Marketing-Bemühungen zu unterstützen.',
			accept: 'Alle akzeptieren',
			decline: 'Ablehnen',
			close: 'Schließen',
			necessary: 'Notwendige Cookies für die Website-Funktionalität',
			analytics: 'Analyse-Cookies, um zu verstehen, wie Sie unsere Website nutzen',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0C1C2C]/95 backdrop-blur-sm border-t border-white/10 p-4 md:p-6">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-end mb-2">
					<Button
						onClick={handleClose}
						variant="ghost"
						size="sm"
						className="text-gray-400 hover:text-white hover:bg-white/10 p-1">
						<X className="h-4 w-4" />
					</Button>
				</div>

				<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
					<div className="flex items-center gap-3 flex-1">
						<Cookie className="h-6 w-6 text-[#30D6C4] flex-shrink-0" />
						<div className="flex-1">
							<h3 className="text-white font-semibold text-lg mb-2">{t.title}</h3>
							<p className="text-gray-300 text-sm leading-relaxed mb-2">{t.description}</p>
							<p className="text-[#30D6C4] text-sm font-medium mb-3">{getStatusText()}</p>
							<div className="text-xs text-gray-400 space-y-1">
								<div>• {t.necessary}</div>
								<div>• {t.analytics}</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-shrink-0">
						<Button
							onClick={handleAccept}
							className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-6 py-2 rounded-lg text-sm whitespace-nowrap">
							{t.accept}
						</Button>
						<Button
							onClick={handleDecline}
							variant="outline"
							className="border-white/20 text-white hover:bg-white/10 hover:text-white px-6 py-2 rounded-lg text-sm whitespace-nowrap">
							{t.decline}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
