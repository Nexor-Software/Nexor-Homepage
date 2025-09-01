import { CardContainer, CardBody, CardItem } from '@/components/ui/shadcn-io/3d-card';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

interface ServicesCardsProps {
	currentLocale?: string;
}

export const ServicesCards = ({ currentLocale = 'en' }: ServicesCardsProps) => {
	const services = [
		{
			icon: Code,
			title: currentLocale === 'en' ? 'Custom Software Development' : 'Individuelle Softwareentwicklung',
			description:
				currentLocale === 'en'
					? 'Tailored software solutions built to meet your specific business requirements and workflows.'
					: 'Maßgeschneiderte Softwarelösungen, die auf Ihre spezifischen Geschäftsanforderungen und Arbeitsabläufe zugeschnitten sind.',
		},
		{
			icon: Smartphone,
			title: currentLocale === 'en' ? 'Mobile App Development' : 'Mobile App Entwicklung',
			description:
				currentLocale === 'en'
					? 'Native and cross-platform mobile applications for iOS and Android platforms.'
					: 'Native und plattformübergreifende mobile Anwendungen für iOS und Android Plattformen.',
		},
		{
			icon: Globe,
			title: currentLocale === 'en' ? 'Web Development' : 'Webentwicklung',
			description:
				currentLocale === 'en'
					? 'Modern, responsive websites and web applications using cutting-edge technologies.'
					: 'Moderne, responsive Websites und Webanwendungen mit modernsten Technologien.',
		},
		{
			icon: Database,
			title: currentLocale === 'en' ? 'Database Solutions' : 'Datenbanklösungen',
			description:
				currentLocale === 'en'
					? 'Database design, optimization, and management for efficient data storage and retrieval.'
					: 'Datenbankdesign, Optimierung und Verwaltung für effiziente Datenspeicherung und -abrufe.',
		},
		{
			icon: Cloud,
			title: currentLocale === 'en' ? 'Cloud Integration' : 'Cloud-Integration',
			description:
				currentLocale === 'en'
					? 'Cloud migration, deployment, and management services for scalable solutions.'
					: 'Cloud-Migration, -Bereitstellung und -Verwaltungsdienste für skalierbare Lösungen.',
		},
		{
			icon: Shield,
			title: currentLocale === 'en' ? 'Security Solutions' : 'Sicherheitslösungen',
			description:
				currentLocale === 'en'
					? 'Comprehensive security audits and implementation of robust security measures.'
					: 'Umfassende Sicherheitsaudits und Implementierung robuster Sicherheitsmaßnahmen.',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
			{services.map((service, index) => (
				<CardContainer key={service.title} className="h-full" containerClassName="h-full">
					<CardBody className="bg-[#0F2235]/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group h-full w-full relative">
						<div className="absolute inset-0 bg-[#30D6C4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
						<CardItem
							translateZ="20"
							className="w-full h-full relative z-10 border-transparent hover:border-[#30D6C4]/50 border-2 transition-colors duration-300 p-6">
							<CardHeader className="text-center">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-[#30D6C4]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
										<service.icon className="h-8 w-8 text-[#30D6C4]" />
									</div>
								</div>
								<CardTitle className="text-white font-oswald font-normal text-xl">{service.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-[#B0C4D4] font-inter text-center">
									{service.description}
								</CardDescription>
							</CardContent>
						</CardItem>
					</CardBody>
				</CardContainer>
			))}
		</div>
	);
};
