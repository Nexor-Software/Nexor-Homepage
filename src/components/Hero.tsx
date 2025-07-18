
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-16 pt-24 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
      {/* Background geometric elements for visual interest */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#30D6C4]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#30D6C4]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src="/nexor-logo-large.png" 
              alt="Nexor Software" 
              className="h-48 md:h-64 lg:h-72 w-auto max-w-full"
            />
          </div>
          <div className="w-24 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
        </div>

        {/* Hero content following golden ratio proportions */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in delay-200">
          <h2 className="text-4xl md:text-6xl font-oswald font-medium text-white leading-tight mb-8">
            Building Tomorrow's
            <span className="block text-[#30D6C4] mt-2">Digital Solutions</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-inter font-medium text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
            We craft innovative software solutions that transform businesses and empower growth through cutting-edge technology and exceptional user experiences.
          </p>
          
          <div className="pt-8">
            <Link to="/about">
              <Button 
                size="lg" 
                className="font-inter bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#30D6C4]/25 transition-all duration-300 hover:scale-105 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
