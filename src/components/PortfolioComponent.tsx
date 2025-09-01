import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { getUploadThingUrl } from '@/utils/uploadthing';
import { PortfolioCard } from '@/components/PortfolioCard';

interface PortfolioComponentProps {
	currentLocale?: string;
}

const PortfolioComponent = ({ currentLocale = 'en' }: PortfolioComponentProps) => {
	const getLocalizedPath = (path: string) => {
		const pathWithoutLocale = path.replace(/^\/(en|de)/, '');
		return currentLocale === 'en' ? `/en${pathWithoutLocale || '/'}` : `/de${pathWithoutLocale || '/'}`;
	};

	const translations = {
		en: {
			title: 'Our Portfolio',
			subtitle:
				"Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.",
			all: 'All',
			websites: 'Websites',
			software: 'Software',
			viewLive: 'View Live',
			privateProject: 'Private Project',
			readyTitle: 'Ready to Start Your Project?',
			readySubtitle: "Let's discuss how we can bring your vision to life with our expertise and innovative solutions.",
			startProject: 'Start Your Project',
			projects: [
				{
					title: 'E-Tech24 Website',
					description:
						'Professional website design for E-Tech24, a technology solutions provider. Created modern, responsive design concepts with focus on user experience and visual appeal.',
					technologies: ['Figma', 'UI/UX Design', 'Responsive Design'],
					category: 'Websites',
					year: '2025',
					client: 'E-Tech24',
				},
				{
					title: 'Terminal Software Solution',
					description:
						'Custom software development for terminal systems. Robust, efficient software designed for reliable terminal operations and management.',
					technologies: ['TypeScript'],
					category: 'Software',
					year: '2025',
					client: 'Terminal Operations',
				},
			],
		},
		de: {
			title: 'Unser Portfolio',
			subtitle:
				'Entdecken Sie unsere neuesten Projekte und sehen Sie, wie wir Unternehmen dabei geholfen haben, ihre digitale Präsenz mit innovativen Lösungen zu transformieren.',
			all: 'Alle',
			websites: 'Webseiten',
			software: 'Software',
			viewLive: 'Live ansehen',
			privateProject: 'Privates Projekt',
			readyTitle: 'Bereit, Ihr Projekt zu starten?',
			readySubtitle:
				'Lassen Sie uns besprechen, wie wir Ihre Vision mit unserer Expertise und innovativen Lösungen zum Leben erwecken können.',
			startProject: 'Projekt starten',
			projects: [
				{
					title: 'E-Tech24 Website',
					description:
						'Professionelles Webdesign für E-Tech24, einen Technologielösungsanbieter. Moderne, responsive Designkonzepte mit Fokus auf Benutzerfreundlichkeit und visuelle Attraktivität erstellt.',
					technologies: ['Figma', 'UI/UX Design', 'Responsive Design'],
					category: 'Webseiten',
					year: '2025',
					client: 'E-Tech24',
				},
				{
					title: 'Terminal Software Lösung',
					description:
						'Maßgeschneiderte Softwareentwicklung für Terminalsysteme. Robuste, effiziente Software für zuverlässige Terminalbetriebe und -verwaltung.',
					technologies: ['TypeScript', 'Electron', 'C#'],
					category: 'Software',
					year: '2025',
					client: 'Terminal Operations',
				},
			],
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;
	const projects = t.projects.map((project, index) => ({
		...project,
		image: getUploadThingUrl(index === 0 ? 'FullLogo-01.svg' : 'pt1duo software.png'),
		link: index === 0 ? 'http://e-tech24.de/' : null,
		github: null,
	}));

	const categories = [t.all, t.websites, t.software];
	const [activeCategory, setActiveCategory] = useState(t.all);

	const filteredProjects =
		activeCategory === t.all ? projects : projects.filter((project) => project.category === activeCategory);

	return (
		<div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden relative">
			{/* Grain overlay */}
			<div
				className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
					mixBlendMode: 'overlay',
				}}
			/>

			<div className="relative z-10">
				{/* Hero Section */}
				<section className="relative pt-32 pb-20 px-8 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]"></div>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(48,214,196,0.1),transparent_50%)]"></div>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(48,214,196,0.05),transparent_50%)]"></div>
					<div className="relative max-w-6xl mx-auto text-center">
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-[#30D6C4]/10 border border-[#30D6C4]/20 text-[#30D6C4] text-sm font-medium mb-8">
							<span className="w-2 h-2 bg-[#30D6C4] rounded-full mr-2 animate-pulse"></span>
							{currentLocale === 'en' ? 'Portfolio' : 'Portfolio'}
						</div>
						<h1 className="text-5xl md:text-7xl font-oswald font-normal text-white leading-tight mb-8">
							{currentLocale === 'en' ? (
								<>
									Our <span className="text-[#30D6C4]">Portfolio</span>
								</>
							) : (
								<>
									Unser <span className="text-[#30D6C4]">Portfolio</span>
								</>
							)}
						</h1>
						<p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-4xl mx-auto leading-relaxed mb-12">
							{t.subtitle}
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-[#30D6C4] to-transparent mx-auto"></div>
					</div>
				</section>

				{/* Filter Section */}
				<section className="py-16 px-8 bg-[#0C1C2C]">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-wrap justify-center gap-4 mb-12">
							{categories.map((category, index) => (
								<Button
									key={index}
									onClick={() => setActiveCategory(category)}
									className={`px-6 py-3 md:px-6 md:py-3 text-sm md:text-base rounded-full font-inter font-medium transition-all duration-300 min-h-[44px] md:min-h-[40px] ${
										activeCategory === category
											? 'bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] shadow-lg shadow-[#30D6C4]/25'
											: 'bg-[#0F2235]/50 backdrop-blur-sm text-white border border-[#30D6C4]/20 hover:bg-[#30D6C4]/20 hover:border-[#30D6C4]/50 hover:text-[#30D6C4] hover:shadow-lg hover:shadow-[#30D6C4]/10'
									}`}>
									{category}
								</Button>
							))}
						</div>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="pb-24 px-8 bg-[#0C1C2C]">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-wrap justify-center gap-12">
							{filteredProjects.map((project, index) => (
								<PortfolioCard
									key={index}
									project={project}
									translations={{
										viewLive: t.viewLive,
										privateProject: t.privateProject,
									}}
									index={index}
								/>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-24 px-8 bg-[#0F2235]">
					<div className="max-w-4xl mx-auto text-center">
						<div className="w-24 h-1 bg-gradient-to-r from-[#30D6C4] to-transparent mx-auto mb-8"></div>
						<h2 className="text-3xl md:text-4xl font-oswald font-normal text-white mb-6">
							{currentLocale === 'en' ? (
								<>
									Ready to Start Your <span className="text-[#30D6C4]">Project?</span>
								</>
							) : (
								<>
									Bereit, Ihr <span className="text-[#30D6C4]">Projekt zu starten?</span>
								</>
							)}
						</h2>
						<p className="text-lg text-[#B0C4D4] font-inter mb-8 leading-relaxed">{t.readySubtitle}</p>
						<a href={getLocalizedPath('/contact')}>
							<Button className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#30D6C4]/25 transition-all duration-300 hover:scale-105">
								{t.startProject}
							</Button>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default PortfolioComponent;
