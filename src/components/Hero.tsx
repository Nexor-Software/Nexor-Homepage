import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getUploadThingUrl } from '@/utils/uploadthing';
import DarkVeil from '@/components/DarkVeil';
import BlurText from '@/components/BlurText';

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
				'We develop and intelligently connect your systems to help you achieve maximum comfort and value from your digital infrastructure.',
			buttonText: 'Get Started Today',
		},
		de: {
			title1: 'Die Zukunft',
			title2: 'digitaler Lösungen',
			description:
				'Wir entwickeln und vernetzen Ihre Systeme intelligent miteinander, damit Sie maximalen Komfort und Nutzen aus Ihrer digitalen Infrastruktur erzielen.',
			buttonText: 'Jetzt starten',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	return (
		<section className="relative min-h-screen flex items-center justify-center px-8 py-16 pt-24 pb-48 bg-[#0C1C2C]">
			{/* Dark Veil background */}
			<div className="absolute inset-0 pointer-events-none">
				<DarkVeil
					hueShift={48.5}
					noiseIntensity={0.03}
					scanlineIntensity={0.05}
					scanlineFrequency={8}
					speed={0.4}
					warpAmount={0.02}
					resolutionScale={1}
					offsetX={1}
					offsetY={-1}
				/>
			</div>
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

			{/* Smooth transition gradient overlay - much more gradual */}
			<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[#0F2235] pointer-events-none"></div>

			<div className="max-w-6xl mx-auto text-center relative z-10">
				{/* Logo */}
				<div className="mb-16 animate-fade-in">
					<div className="flex justify-center mb-6">
						<img
							src={getUploadThingUrl('nexor-logo-large.png')}
							alt="Nexor Software"
							className="h-48 md:h-64 lg:h-72 w-auto max-w-full drop-shadow-2xl"
						/>
					</div>
					<div className="w-24 h-1 bg-[#30D6C4] mx-auto rounded-full shadow-lg shadow-[#30D6C4]/30"></div>
				</div>

				{/* Hero content following golden ratio proportions */}
				<div className="max-w-4xl mx-auto space-y-8 animate-fade-in delay-200">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-normal text-white leading-tight mb-8">
						<BlurText text={t.title1} animateBy="letters" direction="top" delay={50} />
						<span className="block text-[#30D6C4] mt-4 drop-shadow-lg">
							<BlurText
								text={t.title2}
								animateBy="letters"
								direction="top"
								delay={70}
								initialDelay={(t.title1.length - 1) * 50 + 220}
							/>
						</span>
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
