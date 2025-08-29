import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactComponent = () => {
	const contactInfo = [
		{
			icon: <Mail className="h-6 w-6 text-[#30D6C4]" />,
			title: 'Email',
			content: 'info@nexorsoftware.com',
			link: 'mailto:info@nexorsoftware.com',
		},
		{
			icon: <Phone className="h-6 w-6 text-[#30D6C4]" />,
			title: 'Phone',
			content: '+49 1777830812',
			link: 'tel:+491777830812',
		},
		{
			icon: <MapPin className="h-6 w-6 text-[#30D6C4]" />,
			title: 'Address',
			content: 'Heidenheim\nGermany',
			link: null,
		},
		{
			icon: <Clock className="h-6 w-6 text-[#30D6C4]" />,
			title: 'Business Hours',
			content: 'Mon - Fri: 9:00 - 18:00\nSat - Sun: Closed',
			link: null,
		},
	];

	return (
		<div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 px-8 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(48,214,196,0.1),transparent_50%)]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(48,214,196,0.05),transparent_50%)]"></div>
				<div className="relative max-w-6xl mx-auto text-center">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-[#30D6C4]/10 border border-[#30D6C4]/20 text-[#30D6C4] text-sm font-medium mb-8">
						<span className="w-2 h-2 bg-[#30D6C4] rounded-full mr-2 animate-pulse"></span>
						Kontakt
					</div>
					<h1 className="text-5xl md:text-7xl font-oswald font-normal text-white leading-tight mb-8">
						Contact <span className="text-[#30D6C4]">Us</span>
					</h1>
					<p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-4xl mx-auto leading-relaxed mb-12">
						Ready to start your next project? Get in touch with our team and let's discuss how we can help transform
						your business.
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-[#30D6C4] to-transparent mx-auto"></div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 px-8 bg-[#0C1C2C]">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="bg-[#0F2235]/50 backdrop-blur-sm border-[#30D6C4]/10 hover:border-[#30D6C4]/30 shadow-2xl hover:shadow-[#30D6C4]/10 transition-all duration-500 group">
							<CardHeader>
								<CardTitle className="text-2xl font-oswald font-normal text-white">Send us a Message</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-white font-inter mb-2 text-sm md:text-base">First Name</label>
										<Input
											placeholder="Your first name"
											className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
										/>
									</div>
									<div>
										<label className="block text-white font-inter mb-2 text-sm md:text-base">Last Name</label>
										<Input
											placeholder="Your last name"
											className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
										/>
									</div>
								</div>
								<div>
									<label className="block text-white font-inter mb-2 text-sm md:text-base">Email</label>
									<Input
										type="email"
										placeholder="your.email@example.com"
										className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
									/>
								</div>
								<div>
									<label className="block text-white font-inter mb-2 text-sm md:text-base">Subject</label>
									<Input
										placeholder="What's this about?"
										className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 h-12 md:h-10"
									/>
								</div>
								<div>
									<label className="block text-white font-inter mb-2 text-sm md:text-base">Message</label>
									<Textarea
										placeholder="Tell us about your project..."
										rows={6}
										className="bg-[#0C1C2C] border-[#30D6C4]/20 text-white placeholder:text-gray-400 min-h-[120px] md:min-h-[80px]"
									/>
								</div>
								<Button className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium py-3 rounded-lg">
									Send Message
								</Button>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-oswald font-normal text-white mb-6">
									Get in <span className="text-[#30D6C4]">Touch</span>
								</h2>
								<p className="text-lg text-[#B0C4D4] font-inter leading-relaxed">
									We're here to help you bring your ideas to life. Whether you have a question about our services, need
									a quote for your project, or just want to say hello, we'd love to hear from you.
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{contactInfo.map((info, index) => (
									<Card
										key={index}
										className="bg-[#0F2235]/50 backdrop-blur-sm border-[#30D6C4]/10 hover:border-[#30D6C4]/30 hover:shadow-2xl hover:shadow-[#30D6C4]/10 transition-all duration-500 hover:-translate-y-2 group">
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<div className="shrink-0 w-12 h-12 bg-[#30D6C4]/10 rounded-xl flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
													{info.icon}
												</div>
												<div>
													<h3 className="text-white font-inter font-medium mb-2">{info.title}</h3>
													{info.link ? (
														<a
															href={info.link}
															className="text-[#B0C4D4] hover:text-[#30D6C4] transition-colors font-inter">
															{info.content}
														</a>
													) : (
														<p className="text-[#B0C4D4] font-inter whitespace-pre-line">{info.content}</p>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactComponent;
