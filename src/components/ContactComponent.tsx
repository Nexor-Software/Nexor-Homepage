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
			<section className="pt-24 pb-16 px-8 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-oswald font-normal text-white leading-tight mb-6">
						Contact <span className="text-[#30D6C4]">Us</span>
					</h1>
					<p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
						Ready to start your next project? Get in touch with our team and let's discuss how we can help transform
						your business.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="bg-[#0F2235] border-[#30D6C4]/20">
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
									<Card key={index} className="bg-[#0F2235] border-[#30D6C4]/20">
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<div className="flex-shrink-0">{info.icon}</div>
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
