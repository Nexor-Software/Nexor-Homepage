
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#0F2235] border-t border-white/10 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Nexor <span className="text-[#30D6C4]">Software</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative software solutions.
            </p>
            <div className="w-12 h-1 bg-[#30D6C4] rounded-full"></div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#30D6C4] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-[#30D6C4] transition-colors cursor-pointer">
                hello@nexorsoftware.com
              </p>
              <p className="hover:text-[#30D6C4] transition-colors cursor-pointer">
                +1 (555) 123-4567
              </p>
              <p>
                San Francisco, CA
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nexor Software. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-[#30D6C4] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#30D6C4] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
