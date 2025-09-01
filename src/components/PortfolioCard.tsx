import { CardContainer, CardBody, CardItem } from '@/components/ui/shadcn-io/3d-card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface PortfolioCardProps {
	project: {
		title: string;
		description: string;
		technologies: string[];
		category: string;
		year: string;
		client: string;
		image: string;
		link?: string | null;
		github?: string | null;
	};
	translations: {
		viewLive: string;
		privateProject: string;
	};
	index: number;
}

export const PortfolioCard = ({ project, translations, index }: PortfolioCardProps) => {
	return (
		<CardContainer className="w-full max-w-md" containerClassName="w-full max-w-md">
			<CardBody
				className={`bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group h-full w-full relative overflow-hidden`}>
				<div className="absolute inset-0 bg-[#30D6C4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
				<CardItem
					translateZ="20"
					className="w-full h-full relative z-10 border-transparent hover:border-[#30D6C4]/50 border-2 transition-colors duration-300"
					style={{ animationDelay: `${index * 200}ms` }}>
					<div className="relative">
						<div className="w-full h-64 bg-white/5 flex items-center justify-center p-4">
							<img src={project.image} alt={project.title} className="w-4/5 h-4/5 object-contain" />
						</div>
						<div className="absolute top-4 left-4">
							<span className="bg-[#30D6C4] text-[#0C1C2C] px-3 py-1 rounded-full text-sm font-medium">
								{project.category}
							</span>
						</div>
					</div>

					<div className="p-6">
						<h3 className="text-white font-oswald font-normal text-xl mb-2">{project.title}</h3>
						<div className="flex items-center text-[#B0C4D4] text-sm font-inter mb-3">
							<Calendar className="h-4 w-4 mr-2 text-[#30D6C4]" />
							<span>{project.year}</span>
							<Users className="h-4 w-4 ml-4 mr-2 text-[#30D6C4]" />
							<span>{project.client}</span>
						</div>

						<p className="text-[#B0C4D4] font-inter mb-4 line-clamp-3">{project.description}</p>

						{/* Technologies */}
						<div className="flex flex-wrap gap-2 mb-6">
							{project.technologies.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="bg-[#0C1C2C]/60 text-[#30D6C4] border border-[#30D6C4]/20 px-2 py-1 rounded text-xs font-medium hover:bg-[#30D6C4]/10 transition-colors duration-300">
									{tech}
								</span>
							))}
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3">
							{project.link ? (
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
									<Button
										size="sm"
										className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium hover:shadow-lg hover:shadow-[#30D6C4]/25 transition-all duration-300">
										<ExternalLink className="h-4 w-4 mr-2" />
										{translations.viewLive}
									</Button>
								</a>
							) : (
								<Button size="sm" disabled className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed">
									<ExternalLink className="h-4 w-4 mr-2" />
									{translations.privateProject}
								</Button>
							)}
							{project.github ? (
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									<Button
										size="sm"
										variant="outline"
										className="border-[#30D6C4]/40 text-[#30D6C4] hover:bg-[#30D6C4]/10 hover:border-[#30D6C4]/60 transition-all duration-300">
										<Github className="h-4 w-4" />
									</Button>
								</a>
							) : (
								<Button
									size="sm"
									variant="outline"
									disabled
									className="border-gray-600/40 text-gray-400 cursor-not-allowed">
									<Github className="h-4 w-4" />
								</Button>
							)}
						</div>
					</div>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
};
