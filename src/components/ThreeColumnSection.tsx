import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Code, Users, Award, Zap, Shield } from 'lucide-react';

interface ThreeColumnSectionProps {
	currentLocale?: string;
}

export const ThreeColumnSection = ({ currentLocale = 'en' }: ThreeColumnSectionProps) => {
	const translations = {
		en: {
			title: 'Why Choose',
			companyTitle: 'Our Company',
			companyDescription:
				'Founded in 2025 with the conviction that high-quality software solutions shouldn\'t be overpriced. Nexor Software develops modern, affordable alternatives to outdated market standards.',
			companyFeatures: ['Established 2025', 'Professional Team'],
			servicesTitle: 'Services',
			servicesDescription:
				'From web applications to enterprise solutions, we deliver comprehensive software development services tailored to your unique needs.',
			servicesFeatures: ['Connecting dots', 'Creating software', 'Seamless Integration'],
			qualityTitle: 'Quality & Innovation',
			qualityDescription:
				'We combine cutting-edge technology with proven methodologies to deliver solutions that exceed expectations and drive real results.',
			qualityFeatures: ['Modern Tech Stack', 'Agile Development', 'Quality Assurance'],
		},
		de: {
			title: 'Warum',
			companyTitle: 'Unser Unternehmen',
			companyDescription:
				'Gegründet aus der Überzeugung, dass hochwertige Softwarelösungen nicht überteuert sein müssen. Nexor Software entwickelt moderne, erschwingliche Alternativen zu veralteten Markstandards.',
			companyFeatures: ['Gegründet 2025', 'Professionelles Team'],
			servicesTitle: 'Dienstleistungen',
			servicesDescription:
				'Von Webanwendungen bis hin zu Unternehmenslösungen bieten wir umfassende Softwareentwicklungs-Services, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.',
			servicesFeatures: ['Verbindungen schaffen', 'Software entwickeln', 'Nahtlose Integration'],
			qualityTitle: 'Qualität & Innovation',
			qualityDescription:
				'Wir kombinieren modernste Technologie mit bewährten Methoden, um Lösungen zu liefern, die Erwartungen übertreffen und echte Ergebnisse liefern.',
			qualityFeatures: ['Moderne Tech Stack', 'Agile Entwicklung', 'Qualitätssicherung'],
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	const sections = [
		{
			icon: Building2,
			title: t.companyTitle,
			description: t.companyDescription,
			features: t.companyFeatures,
		},
		{
			icon: Code,
			title: t.servicesTitle,
			description: t.servicesDescription,
			features: t.servicesFeatures,
		},
		{
			icon: Award,
			title: t.qualityTitle,
			description: t.qualityDescription,
			features: t.qualityFeatures,
		},
	];

	return (
		<section className="py-16 px-8 bg-gradient-to-b from-[#0F2235] via-[#0F2235] to-[#0F2235] relative">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#30D6C4]/10 to-transparent transform -skew-y-3"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-20 bg-transparent border-none outline-none">
					<h2 className="text-4xl md:text-5xl font-oswald font-normal text-white mb-6 bg-transparent border-none outline-none">
						{t.title} <span className="text-[#30D6C4]">Nexor</span>
					</h2>
					<div className="w-16 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
				</div>

				<div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
					{sections.map((section, index) => (
						<Card
							key={section.title}
							className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-500 rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group`}
							style={{ animationDelay: `${index * 200}ms` }}>
							<CardHeader className="text-center pb-6">
								<div className="w-16 h-16 bg-[#30D6C4]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
									<section.icon className="w-8 h-8 text-[#30D6C4]" />
								</div>
								<CardTitle className="text-2xl font-oswald font-normal text-white">{section.title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-6">
								<p className="font-inter font-medium text-[#B0C4D4] leading-relaxed text-lg">{section.description}</p>
								<div className="space-y-3">
									{section.features.map((feature) => (
										<div
											key={feature}
											className="flex items-center justify-center space-x-2 text-[#30D6C4] font-medium">
											<div className="w-2 h-2 bg-[#30D6C4] rounded-full"></div>
											<span className="font-inter">{feature}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
