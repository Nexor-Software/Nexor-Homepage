import { CardContainer, CardBody, CardItem } from '@/components/ui/shadcn-io/3d-card';
import { Target, Award, Clock } from 'lucide-react';

interface AboutStatsCardsProps {
	currentLocale?: string;
}

export const AboutStatsCards = ({ currentLocale = 'en' }: AboutStatsCardsProps) => {
	const translations = {
		en: {
			projectsLabel: 'Successfully launched projects',
			experienceLabel: 'Years of experience',
			supportLabel: 'Excellent support',
		},
		de: {
			projectsLabel: 'Erfolgreich gestartete Projekte',
			experienceLabel: 'Jahre Erfahrung',
			supportLabel: 'Ausgezeichneter Support',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	const stats = [
		{
			icon: Target,
			value: '10+',
			label: t.projectsLabel,
		},
		{
			icon: Award,
			value: '2+',
			label: t.experienceLabel,
		},
		{
			icon: Clock,
			value: '★★★★★',
			label: t.supportLabel,
		},
	];

	return (
		<div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
			{stats.map((stat, index) => (
				<CardContainer key={stat.label} className="h-full" containerClassName="h-full">
					<CardBody
						className={`bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group h-full w-full relative`}>
						<div className="absolute inset-0 bg-[#30D6C4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
						<CardItem
							translateZ="20"
							className="w-full h-full relative z-10 border-transparent hover:border-[#30D6C4]/50 border-2 transition-colors duration-300 text-center"
							style={{ animationDelay: `${index * 200}ms` }}>
							<div className="p-8 h-full flex flex-col justify-center">
								<div className="w-16 h-16 bg-[#30D6C4]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
									<stat.icon className="w-8 h-8 text-[#30D6C4]" />
								</div>
								<div className="text-3xl font-oswald font-normal text-[#30D6C4] mb-4">{stat.value}</div>
								<p className="font-inter font-medium text-white leading-relaxed">{stat.label}</p>
							</div>
						</CardItem>
					</CardBody>
				</CardContainer>
			))}
		</div>
	);
};
