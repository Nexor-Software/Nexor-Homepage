import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-[#30D6C4]" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and workflows."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#30D6C4]" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: <Globe className="h-12 w-12 text-[#30D6C4]" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications using cutting-edge technologies."
    },
    {
      icon: <Database className="h-12 w-12 text-[#30D6C4]" />,
      title: "Database Solutions",
      description: "Database design, optimization, and management for efficient data storage and retrieval."
    },
    {
      icon: <Cloud className="h-12 w-12 text-[#30D6C4]" />,
      title: "Cloud Integration",
      description: "Cloud migration, deployment, and management services for scalable solutions."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#30D6C4]" />,
      title: "Security Solutions",
      description: "Comprehensive security audits and implementation of robust security measures."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-oswald font-normal text-white leading-tight mb-6">
            Our <span className="text-[#30D6C4]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software solutions to transform your business and drive digital innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#0F2235] border-[#30D6C4]/20 hover:border-[#30D6C4]/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white font-oswald font-normal text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#B0C4D4] font-inter text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
