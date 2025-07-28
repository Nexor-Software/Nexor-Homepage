import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C1C2C] to-[#0F2235]">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-oswald font-normal text-white mb-6">
              Privacy <span className="text-[#30D6C4]">Policy</span>
            </h1>
            <div className="w-16 h-1 bg-[#30D6C4] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            <div className="text-[#B0C4D4] font-inter leading-relaxed space-y-6">
              <div>
                <h2 className="text-2xl font-oswald font-normal text-white mb-4">Information We Collect</h2>
                <p className="text-lg">
                  At Nexor Software, we collect information you provide directly to us, such as when you create an account, 
                  fill out a form, or contact us for support. This may include your name, email address, phone number, 
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-oswald font-normal text-white mb-4">How We Use Your Information</h2>
                <p className="text-lg mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-oswald font-normal text-white mb-4">Information Sharing</h2>
                <p className="text-lg">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this privacy policy. We may share your information with trusted partners who assist 
                  us in operating our website and conducting our business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-oswald font-normal text-white mb-4">Data Security</h2>
                <p className="text-lg">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-oswald font-normal text-white mb-4">Contact Us</h2>
                <p className="text-lg">
                  If you have any questions about this Privacy Policy, please contact us at privacy@nexorsoftware.com 
                  or through our contact form.
                </p>
              </div>

              <div className="text-sm text-[#8B9CAB] pt-4 border-t border-white/10">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
