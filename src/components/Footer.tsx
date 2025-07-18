
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-[#0F2235] border-t border-white/10 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-oswald font-medium text-white">
              Nexor <span className="text-[#30D6C4]">Software</span>
            </h3>
            <p className="font-inter font-medium text-[#B0C4D4] leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative software solutions.
            </p>
            <div className="w-12 h-1 bg-[#30D6C4] rounded-full"></div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-oswald font-medium text-white">Navigation</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block font-inter font-medium text-[#B0C4D4] hover:text-[#30D6C4] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-oswald font-medium text-white">Get in Touch</h4>
            <div className="space-y-3 font-inter font-medium text-[#B0C4D4]">
              <p className="hover:text-[#30D6C4] transition-colors cursor-pointer">
                hello@nexorsoftware.com
              </p>
              <p className="hover:text-[#30D6C4] transition-colors cursor-pointer">
                +49 1777830812
              </p>
              <p>
                Heidenheim
                <br />
                Germany
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-inter font-medium text-[#B0C4D4] text-sm">
            © {currentYear} Nexor Software. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-inter font-medium text-[#B0C4D4]">
            <Link to="/privacy-policy" className="hover:text-[#30D6C4] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#30D6C4] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
