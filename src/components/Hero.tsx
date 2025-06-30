
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-16 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
      {/* Background geometric elements for visual interest */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#30D6C4]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#30D6C4]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Nexor
            <span className="text-[#30D6C4] ml-2">Software</span>
          </h1>
          <div className="w-24 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
        </div>

        {/* Hero content following golden ratio proportions */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in delay-200">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Building Tomorrow's
            <span className="block text-[#30D6C4] mt-2">Digital Solutions</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We craft innovative software solutions that transform businesses and empower growth through cutting-edge technology and exceptional user experiences.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#30D6C4]/25 transition-all duration-300 hover:scale-105 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#30D6C4] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
