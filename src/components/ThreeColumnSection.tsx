
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Code, Users } from "lucide-react";

export const ThreeColumnSection = () => {
  const sections = [
    {
      icon: Building2,
      title: "Our Company",
      description: "Founded on innovation and driven by excellence, Nexor Software has been at the forefront of digital transformation for over a decade.",
      features: ["Established 2012", "50+ Team Members", "Global Reach"]
    },
    {
      icon: Code,
      title: "Services",
      description: "From web applications to enterprise solutions, we deliver comprehensive software development services tailored to your unique needs.",
      features: ["Custom Development", "Cloud Solutions", "AI Integration"]
    },
    {
      icon: Users,
      title: "Careers",
      description: "Join our talented team of developers, designers, and innovators who are passionate about creating exceptional digital experiences.",
      features: ["Remote-First", "Growth Opportunities", "Competitive Benefits"]
    }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[#0C1C2C] to-[#0F2235] relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#30D6C4]/10 to-transparent transform -skew-y-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#30D6C4]">Nexor</span>
          </h2>
          <div className="w-16 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, index) => (
            <Card 
              key={section.title}
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 transition-all duration-500 rounded-2xl shadow-2xl hover:shadow-[#30D6C4]/10 hover:scale-105 animate-fade-in group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-[#30D6C4]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#30D6C4]/20 transition-colors duration-300">
                  <section.icon className="w-8 h-8 text-[#30D6C4]" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.description}
                </p>
                <div className="space-y-3">
                  {section.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center justify-center space-x-2 text-[#30D6C4] font-medium"
                    >
                      <div className="w-2 h-2 bg-[#30D6C4] rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
