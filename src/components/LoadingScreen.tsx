import { useEffect, useState } from 'react';
import { getPublicAssetUrl } from '@/utils/assets';

interface LoadingScreenProps {
	currentLocale?: string;
}

export const LoadingScreen = ({ currentLocale = 'en' }: LoadingScreenProps) => {
	const [isVisible, setIsVisible] = useState(true);
	const [opacity, setOpacity] = useState(0.8); // Start more transparent

	useEffect(() => {
		// Start fade out after a very short delay
		const fadeTimer = setTimeout(() => {
			setOpacity(0);
			// Hide completely after smooth fade animation
			setTimeout(() => setIsVisible(false), 800);
		}, 300); // Very quick 300ms before starting fade

		// Also hide on window load as backup
		const handleLoad = () => {
			setOpacity(0);
			setTimeout(() => setIsVisible(false), 800);
		};

		window.addEventListener('load', handleLoad);

		return () => {
			clearTimeout(fadeTimer);
			window.removeEventListener('load', handleLoad);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className="fixed inset-0 z-50 bg-[#0C1C2C] transition-opacity duration-800 ease-in-out flex items-center justify-center"
			style={{ opacity }}>
			{/* Logo centered */}
			<div className="text-center">
				<img
					src={getPublicAssetUrl('Nexor-logo-large-helle-Schrift.avif')}
					alt="Nexor Software"
					className="h-24 md:h-32 lg:h-40 w-auto max-w-full drop-shadow-2xl mb-6 transition-opacity duration-800"
					style={{ opacity }}
					width="160"
					height="160"
				/>
				{/* Subtle accent line */}
				<div
					className="w-12 h-0.5 bg-[#30D6C4] mx-auto rounded-full shadow-lg shadow-[#30D6C4]/30 transition-opacity duration-800"
					style={{ opacity }}></div>
			</div>

			{/* Subtle animated background pattern */}
			<div
				className="absolute inset-0 opacity-[0.02] transition-opacity duration-800"
				style={{ opacity: opacity * 0.5 }}>
				<div
					className="absolute inset-0 animate-pulse"
					style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, rgba(48,214,196,0.2) 1px, transparent 0)`,
						backgroundSize: '50px 50px',
					}}></div>
			</div>

			{/* Gentle pulsing geometric shapes */}
			<div
				className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#30D6C4]/6 rounded-full blur-xl animate-pulse transition-opacity duration-800"
				style={{ opacity: opacity * 0.7 }}></div>
			<div
				className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#30D6C4]/4 rounded-full blur-xl animate-pulse delay-200 transition-opacity duration-800"
				style={{ opacity: opacity * 0.5 }}></div>
		</div>
	);
};
