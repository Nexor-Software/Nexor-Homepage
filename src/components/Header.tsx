import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
	currentLocale?: string;
}

export const Header = ({ currentLocale = 'en' }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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
			blog: 'Blog',
			portfolio: 'Portfolio',
			getQuote: 'Get Quote',
		},
		de: {
			home: 'Startseite',
			services: 'Dienstleistungen',
			about: 'Über uns',
			blog: 'Blog',
			portfolio: 'Portfolio',
			getQuote: 'Angebot anfordern',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[#0C1C2C]/95 backdrop-blur-sm border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<a href={getLocalizedPath('/')} className="flex items-center space-x-3">
						<img src="/nexor-logo.svg" alt="Nexor Logo" className="h-16 w-16" />
						<img src="/Nexor-text.png" alt="Nexor Software" className="h-48 w-auto" />
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
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
							href={getLocalizedPath('/blog')}
							className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
							{t.blog}
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
					<div className="md:hidden flex items-center space-x-2">
						{/* Mobile Language Switcher */}
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
							className="text-white hover:text-[#30D6C4] hover:bg-white/10">
							<Globe className="h-5 w-5" />
							<span className="ml-1 uppercase">{currentLocale}</span>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-white hover:text-[#30D6C4] hover:bg-white/10">
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</Button>
					</div>
				</div>

				{/* Mobile Language Menu */}
				{isLangMenuOpen && (
					<div className="md:hidden border-t border-white/10 bg-[#0C1C2C]/95 backdrop-blur-sm">
						<div className="px-2 pt-2 pb-3">
							<button
								onClick={() => switchLanguage('en')}
								className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
									currentLocale === 'en' ? 'text-[#30D6C4]' : 'text-white'
								}`}>
								English
							</button>
							<button
								onClick={() => switchLanguage('de')}
								className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#30D6C4]/10 transition-colors ${
									currentLocale === 'de' ? 'text-[#30D6C4]' : 'text-white'
								}`}>
								Deutsch
							</button>
						</div>
					</div>
				)}

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-white/10 bg-[#0C1C2C]/95 backdrop-blur-sm">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<a
								href={getLocalizedPath('/')}
								className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
								onClick={() => setIsMenuOpen(false)}>
								{t.home}
							</a>
							<a
								href={getLocalizedPath('/services')}
								className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
								onClick={() => setIsMenuOpen(false)}>
								{t.services}
							</a>
							<a
								href={getLocalizedPath('/about')}
								className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
								onClick={() => setIsMenuOpen(false)}>
								{t.about}
							</a>
							<a
								href={getLocalizedPath('/blog')}
								className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
								onClick={() => setIsMenuOpen(false)}>
								{t.blog}
							</a>
							<a
								href={getLocalizedPath('/portfolio')}
								className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
								onClick={() => setIsMenuOpen(false)}>
								{t.portfolio}
							</a>
							<div className="px-3 py-2">
								<a href={getLocalizedPath('/contact')}>
									<Button
										size="sm"
										className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium"
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
