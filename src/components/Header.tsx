import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C1C2C]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/nexor-logo.svg" 
              alt="Nexor Logo" 
              className="h-16 w-16"
            />
            <img 
              src="/Nexor-text.png" 
              alt="Nexor Software" 
              className="h-48 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
              About
            </Link>
            <Link to="/portfolio" className="text-white hover:text-[#30D6C4] transition-colors font-inter text-lg">
              Portfolio
            </Link>
            <Link to="/contact">
              <Button 
                size="default" 
                className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-6 py-3 rounded-lg text-base"
              >
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#30D6C4] hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0C1C2C]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-3 py-2 text-white hover:text-[#30D6C4] transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button 
                    size="sm" 
                    className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
