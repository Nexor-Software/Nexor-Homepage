import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Target className="h-8 w-8 text-[#30D6C4]" />,
      number: "10+",
      label: "Successfully Launched Projects"
    },
    {
      icon: <Award className="h-8 w-8 text-[#30D6C4]" />,
      number: "2+",
      label: "Years Experience"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#30D6C4]" />,
      number: "★★★★★",
      label: "Excellent Support"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-oswald font-normal text-white leading-tight mb-6">
            About <span className="text-[#30D6C4]">Nexor Software</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
            We are passionate about creating innovative software solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-oswald font-normal text-white mb-6">
                Our <span className="text-[#30D6C4]">Story</span>
              </h2>
              <p className="text-lg text-[#B0C4D4] mb-6 font-inter leading-relaxed">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                Nexor Software has been at the forefront of digital transformation for 2 years. We believe that every 
                business deserves access to cutting-edge software solutions that drive growth and efficiency.
              </p>
              <p className="text-lg text-[#B0C4D4] font-inter leading-relaxed">
                Our team of experienced software developers, designers, and video editors work collaboratively to 
                deliver solutions that not only meet current needs but also scale for future growth.
              </p>
            </div>
            <div className="bg-[#0F2235] rounded-lg p-8 border border-[#30D6C4]/20">
              <h3 className="text-2xl font-oswald font-normal text-white mb-6">Our Mission</h3>
              <p className="text-[#B0C4D4] font-inter leading-relaxed mb-4">
                To empower businesses with innovative software solutions that drive digital transformation 
                and create lasting value for our clients and their customers.
              </p>
              <h3 className="text-2xl font-oswald font-normal text-white mb-6 mt-8">Our Vision</h3>
              <p className="text-[#B0C4D4] font-inter leading-relaxed">
                To be the leading software development partner for businesses seeking to leverage 
                technology for competitive advantage and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-[#0F2235]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-oswald font-normal text-white text-center mb-12">
            Our <span className="text-[#30D6C4]">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#0C1C2C] border-[#30D6C4]/20 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-oswald font-normal text-[#30D6C4]">
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-inter">{stat.label}</p>
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

export default About;
