import { Star } from 'lucide-react';

interface CustomerReviewProps {
	currentLocale?: string;
	authorImage?: string;
}

export const CustomerReview = ({ currentLocale = 'en', authorImage }: CustomerReviewProps) => {
	const translations = {
		en: {
			title: 'What Our Clients Say',
			reviewTitle: 'Exceptional Service & Results',
			reviewText:
				'Nexor Software delivered beyond our expectations. Their team was professional, responsive, and delivered a solution that perfectly met our business needs. Highly recommended!',
			authorName: 'Armen Chulyakov',
			authorRole: 'CEO, e-Tech24',
		},
		de: {
			title: 'Was unsere Kunden sagen',
			reviewTitle: 'Außergewöhnlicher Service & Ergebnisse',
			reviewText:
				'Nexor Software hat unsere Erwartungen übertroffen. Ihr Team war professionell, reaktionsschnell und lieferte eine Lösung, die perfekt auf unsere Geschäftsanforderungen zugeschnitten war. Sehr empfehlenswert!',
			authorName: 'Armen Chulyakov',
			authorRole: 'CEO, e-Tech24',
		},
	};

	const t = translations[currentLocale as keyof typeof translations] || translations.en;

	// 5-star rating
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<section className="py-24 px-8 bg-gradient-to-b from-[#0F2235] to-[#0C1C2C] relative">
			{/* Background elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#30D6C4]/10 to-transparent transform -skew-y-3"></div>
			</div>

			<div className="max-w-4xl mx-auto relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-oswald font-normal text-white mb-6">{t.title}</h2>
					<div className="w-16 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
				</div>

				<div className="max-w-2xl mx-auto">
					<div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
						<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

						<div className="relative z-10">
							{/* Star Rating */}
							<div className="flex justify-center mb-6">
								<div className="flex space-x-1">
									{stars.map((star) => (
										<Star key={star} className="w-6 h-6 text-[#30D6C4] fill-[#30D6C4]" />
									))}
								</div>
							</div>

							{/* Review Title */}
							<h3 className="text-2xl font-bold text-white mb-4 font-['Oswald'] text-center">{t.reviewTitle}</h3>

							{/* Review Text */}
							<p className="text-gray-300 mb-8 leading-relaxed text-center text-lg">"{t.reviewText}"</p>

							{/* Author Info */}
							<div className="flex items-center justify-center space-x-4">
								{authorImage ? (
									<img
										src={authorImage}
										alt={t.authorName}
										className="w-12 h-12 rounded-full object-cover border-2 border-[#30D6C4]/30"
									/>
								) : (
									<div className="w-12 h-12 bg-gradient-to-br from-[#30D6C4]/20 to-[#30D6C4]/10 rounded-full flex items-center justify-center">
										<span className="text-[#30D6C4] font-bold text-lg">{t.authorName.charAt(0)}</span>
									</div>
								)}
								<div className="text-left">
									<p className="text-white font-semibold">{t.authorName}</p>
									<p className="text-gray-400 text-sm">{t.authorRole}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
