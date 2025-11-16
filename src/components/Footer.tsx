interface FooterProps {
	currentLocale?: string;
}

export const Footer = ({ currentLocale = 'en' }: FooterProps) => {
	const currentYear = new Date().getFullYear();

	const getLocalizedPath = (path: string) => {
		const pathWithoutLocale = path.replace(/^\/(en|de)/, '');
		return currentLocale === 'en' ? `/en${pathWithoutLocale || '/'}` : `/de${pathWithoutLocale || '/'}`;
	};

	const translations = {
		en: {
			brand: 'Nexor Software',
			description: 'Transforming ideas into exceptional digital experiences through innovative software solutions.',
			navigation: 'Navigation',
			navLinks: [
				{ label: 'About', href: '/about' },
				{ label: 'Services', href: '/services' },
				{ label: 'Portfolio', href: '/portfolio' },
				{ label: 'Contact', href: '/contact' },
			],
			getInTouch: 'Get in Touch',
			email: 'info@nexor-software.de',
			phone: '+49 1777830812',
			location: 'Heidenheim, Germany',
			copyright: 'All rights reserved.',
			privacyPolicy: 'Privacy Policy',
			termsOfService: 'Terms of Service',
			impressum: 'Impressum',
			cookieSettings: 'Cookie Settings',
		},
		de: {
			brand: 'Nexor Software',
			description: 'Ideen in außergewöhnliche digitale Erfahrungen durch innovative Softwarelösungen verwandeln.',
			navigation: 'Navigation',
			navLinks: [
				{ label: 'Über uns', href: '/about' },
				{ label: 'Dienstleistungen', href: '/services' },
				{ label: 'Portfolio', href: '/portfolio' },
				{ label: 'Kontakt', href: '/contact' },
			],
			getInTouch: 'Kontakt',
			email: 'info@nexor-software.de',
			phone: '+49 1777830812',
			location: 'Heidenheim, Deutschland',
			copyright: 'Alle Rechte vorbehalten.',
			privacyPolicy: 'Datenschutzerklärung',
			termsOfService: 'Nutzungsbedingungen',
			impressum: 'Impressum',
			cookieSettings: 'Cookie-Einstellungen',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<footer className="bg-[#0F2235] border-t border-white/10 py-12 md:py-16 px-4 md:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
					{/* Brand */}
					<div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
						<h3 className="text-xl md:text-2xl font-oswald font-medium text-white">
							{t.brand.split(' ')[0]} <span className="text-[#30D6C4]">{t.brand.split(' ')[1]}</span>
						</h3>
						<p className="font-inter font-medium text-[#B0C4D4] leading-relaxed text-sm md:text-base">
							{t.description}
						</p>
						<div className="w-12 h-1 bg-[#30D6C4] rounded-full"></div>
					</div>

					{/* Navigation */}
					<div className="space-y-4 md:space-y-6">
						<h4 className="text-base md:text-lg font-oswald font-medium text-white">{t.navigation}</h4>
						<nav className="space-y-2 md:space-y-3">
							{t.navLinks.map((link) => (
								<a
									key={link.label}
									href={getLocalizedPath(link.href)}
									className="flex items-center font-inter font-medium text-[#B0C4D4] hover:text-[#30D6C4] transition-colors duration-300 hover:translate-x-1 transform py-2 px-2 -mx-2 rounded-lg hover:bg-white/5 min-h-[44px]">
									{link.label}
								</a>
							))}
						</nav>
					</div>

					{/* Contact */}
					<div className="space-y-4 md:space-y-6">
						<h4 className="text-base md:text-lg font-oswald font-medium text-white">{t.getInTouch}</h4>
						<div className="space-y-2 md:space-y-3 font-inter font-medium text-[#B0C4D4]">
							<a
								href={`mailto:${t.email}`}
								className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-2 -mx-2 rounded-lg hover:bg-white/5 min-h-[44px]">
								{t.email}
							</a>
							<a
								href={`tel:${t.phone}`}
								className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-2 -mx-2 rounded-lg hover:bg-white/5 min-h-[44px]">
								{t.phone}
							</a>
							<p className="py-2 px-2 text-sm md:text-base">{t.location}</p>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
					<p className="font-inter font-medium text-[#B0C4D4] text-xs md:text-sm text-center sm:text-left">
						© {currentYear} Nexor Software. {t.copyright}
					</p>
					<div className="flex flex-wrap justify-center sm:justify-end gap-4 md:gap-6 text-xs md:text-sm font-inter font-medium text-[#B0C4D4]">
						<a
							href={getLocalizedPath('/privacy-policy')}
							className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px]">
							{t.privacyPolicy}
						</a>
						<a
							href={getLocalizedPath('/terms-of-service')}
							className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px]">
							{t.termsOfService}
						</a>
						<a
							href={getLocalizedPath('/impressum')}
							className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px]">
							{t.impressum}
						</a>
						<button
							onClick={() => {
								if (typeof window !== 'undefined' && (window as any).openCookieBanner) {
									(window as any).openCookieBanner();
								}
							}}
							className="flex items-center hover:text-[#30D6C4] transition-colors py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px] cursor-pointer">
							{t.cookieSettings}
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};
