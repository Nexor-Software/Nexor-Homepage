import { CardContainer, CardBody, CardItem } from '@/components/ui/shadcn-io/3d-card';

interface AboutMissionVisionCardProps {
	currentLocale?: string;
	missionTitle: string;
	missionText: string;
	visionTitle: string;
	visionText: string;
}

export const AboutMissionVisionCard = ({
	currentLocale = 'en',
	missionTitle,
	missionText,
	visionTitle,
	visionText,
}: AboutMissionVisionCardProps) => {
	return (
		<CardContainer className="h-full" containerClassName="h-full">
			<CardBody
				className={`bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group h-full w-full relative`}>
				<div className="absolute inset-0 bg-[#30D6C4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
				<CardItem
					translateZ="20"
					className="w-full h-full relative z-10 border-transparent hover:border-[#30D6C4]/50 border-2 transition-colors duration-300"
					style={{ animationDelay: '200ms' }}>
					<div className="p-8 h-full">
						<h3 className="text-2xl font-oswald font-normal text-white mb-6">{missionTitle}</h3>
						<p className="text-[#B0C4D4] font-inter leading-relaxed mb-8">{missionText}</p>
						<h3 className="text-2xl font-oswald font-normal text-white mb-6">{visionTitle}</h3>
						<p className="text-[#B0C4D4] font-inter leading-relaxed">{visionText}</p>
					</div>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
};
