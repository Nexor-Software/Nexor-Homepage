import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPublicAssetUrl } from '@/utils/assets';

interface HeaderProps {
	currentLocale?: string;
}

export const Header = ({ currentLocale = 'en' }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
	const [isTransparent, setIsTransparent] = useState(true);
	const [isHomepage, setIsHomepage] = useState(false);

	// Prevent background scroll when the mobile menu is open.
	useEffect(() => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			if (!isHomepage) {
				setIsTransparent(false);
				return;
			}
			const heroHeight = window.innerHeight + 580; // Account for added padding and gradient
			setIsTransparent(window.scrollY < heroHeight - 120); // More gradual transition
		};

		// Check if current page is homepage
		const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
		const pathWithoutLocale = currentPath.replace(/^\/(en|de)/, '') || '/';
		const homepage = pathWithoutLocale === '/';
		setIsHomepage(homepage);

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial state

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isHomepage]);

	// Helper function to get localized path
	function getLocalizedPath(path) {
		const pathWithoutLocale = path.replace(/^\/(en|de)/, '');
		return currentLocale === 'en' ? `/en${pathWithoutLocale || '/'}` : `/de${pathWithoutLocale || '/'}`;
	}
	const switchLanguage = (locale: string) => {
		// Get current path from window (only available on client)
		const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

		// Remove current locale prefix and add new locale prefix
		const pathWithoutLocale = currentPath.replace(/^\/(en|de)/, '') || '/';
		const newPath = locale === 'en' ? `/en${pathWithoutLocale}` : `/de${pathWithoutLocale}`;

		if (typeof window !== 'undefined') {
			window.location.href = newPath;
		}
	};

	const translations = {
		en: {
			home: 'Home',
			services: 'Services',
			about: 'About',
			portfolio: 'Portfolio',
			getQuote: 'Get Quote',
		},
		de: {
			home: 'Startseite',
			services: 'Dienstleistungen',
			about: 'Über uns',
			portfolio: 'Portfolio',
			getQuote: 'Angebot anfordern',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
				isTransparent
					? 'bg-transparent border-b border-white/20'
					: 'bg-[#0C1C2C]/95 backdrop-blur-sm border-b border-white/10'
			}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 sm:h-24 gap-3">
					{/* Logo */}
					<a href={getLocalizedPath('/')} className="flex items-center space-x-3 min-w-0">
						<img
							src={getPublicAssetUrl('nexor-logo.svg')}
							alt="Nexor Logo"
							className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0"
							loading="eager"
						/>
						<img
							src={getPublicAssetUrl('Nexor-text.avif')}
							alt="Nexor Software"
							className="h-40 sm:h-44 md:h-46 lg:h-48 xl:h-50 w-auto hidden sm:block"
							loading="eager"
						/>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden xl:flex items-center gap-6 xl:gap-8">
						<a
							href={getLocalizedPath('/')}
							className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
							{t.home}
						</a>
						<a
							href={getLocalizedPath('/services')}
							className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
							{t.services}
						</a>
						<a
							href={getLocalizedPath('/about')}
							className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
							{t.about}
						</a>
						<a
							href={getLocalizedPath('/portfolio')}
							className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
							{t.portfolio}
						</a>
						<a href={getLocalizedPath('/contact')}>
							<Button
								size="default"
								className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-6 py-3 rounded-lg text-base">
								{t.getQuote}
							</Button>
						</a>

						{/* Language Switcher */}
						<div className="relative">
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
								className="text-white hover:text-[#30D6C4] hover:bg-white/10">
								<Globe className="h-5 w-5" />
								<span className="ml-1 uppercase">{currentLocale}</span>
							</Button>
							{isLangMenuOpen && (
								<div className="absolute right-0 mt-2 w-20 bg-[#0F2235] border border-[#30D6C4]/20 rounded-lg shadow-lg">
									<button
										onClick={() => switchLanguage('en')}
										className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
											currentLocale === 'en' ? 'text-[#30D6C4]' : 'text-white'
										}`}>
										EN
									</button>
									<button
										onClick={() => switchLanguage('de')}
										className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
											currentLocale === 'de' ? 'text-[#30D6C4]' : 'text-white'
										}`}>
										DE
									</button>
								</div>
							)}
						</div>
					</nav>

					{/* Mobile menu button */}
					<div className="xl:hidden flex items-center space-x-2">
						{/* Mobile Language Switcher */}
						<div className="relative">
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
								className="text-white hover:text-[#30D6C4] hover:bg-white/10 p-2">
								<Globe className="h-5 w-5" />
								<span className="ml-1 uppercase">{currentLocale}</span>
							</Button>
							{isLangMenuOpen && (
								<div className="absolute right-0 top-full mt-1 w-24 bg-[#0F2235] border border-[#30D6C4]/20 rounded-lg shadow-lg z-50">
									<button
										onClick={() => {
											switchLanguage('en');
											setIsLangMenuOpen(false);
										}}
										className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
											currentLocale === 'en' ? 'text-[#30D6C4]' : 'text-white'
										}`}>
										EN
									</button>
									<button
										onClick={() => {
											switchLanguage('de');
											setIsLangMenuOpen(false);
										}}
										className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
											currentLocale === 'de' ? 'text-[#30D6C4]' : 'text-white'
										}`}>
										DE
									</button>
								</div>
							)}
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-white hover:text-[#30D6C4] hover:bg-white/10 p-2">
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div
						className={`md:hidden border-t transition-all duration-500 ease-in-out ${
							isTransparent
								? 'border-white/20 bg-black/20 backdrop-blur-sm'
								: 'border-white/10 bg-[#0C1C2C]/95 backdrop-blur-sm'
						}`}>
						<div className="px-2 pt-2 pb-4 space-y-1">
							<a
								href={getLocalizedPath('/')}
								className="block px-4 py-3 text-white hover:text-[#30D6C4] transition-colors font-inter text-lg rounded-lg hover:bg-white/5"
								onClick={() => setIsMenuOpen(false)}>
								{t.home}
							</a>
							<a
								href={getLocalizedPath('/services')}
								className="block px-4 py-3 text-white hover:text-[#30D6C4] transition-colors font-inter text-lg rounded-lg hover:bg-white/5"
								onClick={() => setIsMenuOpen(false)}>
								{t.services}
							</a>
							<a
								href={getLocalizedPath('/about')}
								className="block px-4 py-3 text-white hover:text-[#30D6C4] transition-colors font-inter text-lg rounded-lg hover:bg-white/5"
								onClick={() => setIsMenuOpen(false)}>
								{t.about}
							</a>
							<a
								href={getLocalizedPath('/portfolio')}
								className="block px-4 py-3 text-white hover:text-[#30D6C4] transition-colors font-inter text-lg rounded-lg hover:bg-white/5"
								onClick={() => setIsMenuOpen(false)}>
								{t.portfolio}
							</a>
							<div className="px-4 py-2">
								<a href={getLocalizedPath('/contact')}>
									<Button
										size="sm"
										className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium py-3 rounded-lg text-base"
										onClick={() => setIsMenuOpen(false)}>
										{t.getQuote}
									</Button>
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};
