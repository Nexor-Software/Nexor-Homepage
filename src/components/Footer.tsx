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
				{ label: 'Blog', href: '/blog' },
				{ label: 'Portfolio', href: '/portfolio' },
				{ label: 'Contact', href: '/contact' },
			],
			getInTouch: 'Get in Touch',
			email: 'hello@nexorsoftware.com',
			phone: '+49 1777830812',
			location: 'Heidenheim, Germany',
			copyright: 'All rights reserved.',
			privacyPolicy: 'Privacy Policy',
			termsOfService: 'Terms of Service',
			impressum: 'Impressum',
		},
		de: {
			brand: 'Nexor Software',
			description: 'Ideen in außergewöhnliche digitale Erfahrungen durch innovative Softwarelösungen verwandeln.',
			navigation: 'Navigation',
			navLinks: [
				{ label: 'Über uns', href: '/about' },
				{ label: 'Dienstleistungen', href: '/services' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Portfolio', href: '/portfolio' },
				{ label: 'Kontakt', href: '/contact' },
			],
			getInTouch: 'Kontakt',
			email: 'hello@nexorsoftware.com',
			phone: '+49 1777830812',
			location: 'Heidenheim, Deutschland',
			copyright: 'Alle Rechte vorbehalten.',
			privacyPolicy: 'Datenschutzerklärung',
			termsOfService: 'Nutzungsbedingungen',
			impressum: 'Impressum',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<footer className="bg-[#0F2235] border-t border-white/10 py-16 px-8">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-3 gap-12 mb-12">
					{/* Brand */}
					<div className="space-y-6">
						<h3 className="text-2xl font-oswald font-medium text-white">
							{t.brand.split(' ')[0]} <span className="text-[#30D6C4]">{t.brand.split(' ')[1]}</span>
						</h3>
						<p className="font-inter font-medium text-[#B0C4D4] leading-relaxed">{t.description}</p>
						<div className="w-12 h-1 bg-[#30D6C4] rounded-full"></div>
					</div>

					{/* Navigation */}
					<div className="space-y-6">
						<h4 className="text-lg font-oswald font-medium text-white">{t.navigation}</h4>
						<nav className="space-y-3">
							{t.navLinks.map((link) => (
								<a
									key={link.label}
									href={getLocalizedPath(link.href)}
									className="block font-inter font-medium text-[#B0C4D4] hover:text-[#30D6C4] transition-colors duration-300 hover:translate-x-1 transform">
									{link.label}
								</a>
							))}
						</nav>
					</div>

					{/* Contact */}
					<div className="space-y-6">
						<h4 className="text-lg font-oswald font-medium text-white">{t.getInTouch}</h4>
						<div className="space-y-3 font-inter font-medium text-[#B0C4D4]">
							<p className="hover:text-[#30D6C4] transition-colors cursor-pointer">{t.email}</p>
							<p className="hover:text-[#30D6C4] transition-colors cursor-pointer">{t.phone}</p>
							<p>{t.location}</p>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="font-inter font-medium text-[#B0C4D4] text-sm">
						© {currentYear} Nexor Software. {t.copyright}
					</p>
					<div className="flex space-x-6 text-sm font-inter font-medium text-[#B0C4D4]">
						<a href={getLocalizedPath('/privacy-policy')} className="hover:text-[#30D6C4] transition-colors">
							{t.privacyPolicy}
						</a>
						<a href={getLocalizedPath('/terms-of-service')} className="hover:text-[#30D6C4] transition-colors">
							{t.termsOfService}
						</a>
						<a href={getLocalizedPath('/impressum')} className="hover:text-[#30D6C4] transition-colors">
							{t.impressum}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
