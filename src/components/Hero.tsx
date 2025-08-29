import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
	currentLocale?: string;
}

export const Hero = ({ currentLocale = 'en' }: HeroProps) => {
	const getLocalizedPath = (path: string) => {
		const pathWithoutLocale = path.replace(/^\/(en|de)/, '');
		return currentLocale === 'en' ? `/en${pathWithoutLocale || '/'}` : `/de${pathWithoutLocale || '/'}`;
	};

	const translations = {
		en: {
			title1: "Building Tomorrow's",
			title2: 'Digital Solutions',
			description:
				'We craft innovative software solutions that transform businesses and empower growth through cutting-edge technology and exceptional user experiences.',
			buttonText: 'Get Started Today',
		},
		de: {
			title1: 'Die Zukunft',
			title2: 'digitaler Lösungen',
			description:
				'Wir entwickeln innovative Softwarelösungen, die Unternehmen transformieren und Wachstum durch modernste Technologie und außergewöhnliche Nutzererfahrungen ermöglichen.',
			buttonText: 'Jetzt starten',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<section className="relative min-h-screen flex items-center justify-center px-8 py-16 pt-24 bg-[#0C1C2C]">
			{/* Background geometric elements for visual interest */}
			<div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#30D6C4]/8 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#30D6C4]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#30D6C4]/3 rounded-full blur-3xl animate-pulse delay-500"></div>

			{/* Subtle pattern overlay */}
			<div className="absolute inset-0 opacity-[0.02]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, rgba(48,214,196,0.15) 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}></div>
			</div>

			<div className="max-w-6xl mx-auto text-center relative z-10">
				{/* Logo */}
				<div className="mb-16 animate-fade-in">
					<div className="flex justify-center mb-6">
						<img
							src="/nexor-logo-large.png"
							alt="Nexor Software"
							className="h-48 md:h-64 lg:h-72 w-auto max-w-full drop-shadow-2xl"
						/>
					</div>
					<div className="w-24 h-1 bg-[#30D6C4] mx-auto rounded-full shadow-lg shadow-[#30D6C4]/30"></div>
				</div>

				{/* Hero content following golden ratio proportions */}
				<div className="max-w-4xl mx-auto space-y-8 animate-fade-in delay-200">
					<h2 className="text-5xl md:text-7xl font-oswald font-normal text-white leading-tight mb-8">
						{t.title1}
						<span className="block text-[#30D6C4] mt-4 drop-shadow-lg">{t.title2}</span>
					</h2>

					<p className="text-xl md:text-2xl font-inter font-medium text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
						{t.description}
					</p>

					<div className="pt-8">
						<a href={getLocalizedPath('/about')}>
							<Button
								size="lg"
								className="font-inter bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-semibold px-10 py-5 text-lg rounded-xl shadow-2xl hover:shadow-[#30D6C4]/40 transition-all duration-300 hover:scale-105 group border-2 border-[#30D6C4]">
								{t.buttonText}
								<ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
