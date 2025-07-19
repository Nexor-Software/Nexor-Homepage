import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Tech24 Website",
      description: "Complete website development for E-Tech24, a technology solutions provider. Modern, responsive design with optimized performance and user experience.",
      image: "/FullLogo-01.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Websites",
      year: "2025",
      client: "E-Tech24",
      link: "http://e-tech24.de/",
      github: null
    },
    {
      title: "Terminal Software Solution",
      description: "Custom software development for terminal systems. Robust, efficient software designed for reliable terminal operations and management.",
      image: "/pt1duo software.png",
      technologies: ["C++", "Python", "Linux", "Database Integration"],
      category: "Software",
      year: "2025",
      client: "Terminal Operations",
      link: null,
      github: null
    }
  ];

  const categories = ["All", "Websites", "Software"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden relative">
      {/* Grain overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 bg-gradient-to-br from-[#0C1C2C] via-[#0F2235] to-[#0C1C2C]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-oswald font-medium text-white leading-tight mb-6">
            Our <span className="text-[#30D6C4]">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-[#B0C4D4] max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] shadow-lg shadow-[#30D6C4]/25" 
                    : "bg-white/10 text-white border border-white/20 hover:bg-[#30D6C4]/20 hover:border-[#30D6C4]/50 hover:text-[#30D6C4]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-12">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-[#0F2235] border-[#30D6C4]/20 hover:border-[#30D6C4]/40 transition-all duration-300 hover:scale-105 overflow-hidden w-full max-w-md">
                <div className="relative">
                  <div className="w-full h-64 bg-white/5 flex items-center justify-center p-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#30D6C4] text-[#0C1C2C] px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white font-oswald font-normal text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-[#B0C4D4] text-sm font-inter mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.year}</span>
                    <Users className="h-4 w-4 ml-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-[#B0C4D4] font-inter mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-[#0C1C2C] text-[#30D6C4] px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button 
                          size="sm" 
                          className="w-full bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        size="sm" 
                        disabled
                        className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Private Project
                      </Button>
                    )}
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-[#30D6C4]/40 text-[#30D6C4] hover:bg-[#30D6C4]/10"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        disabled
                        className="border-gray-600/40 text-gray-400 cursor-not-allowed"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0F2235]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-oswald font-medium text-white mb-6">
            Ready to Start Your <span className="text-[#30D6C4]">Project?</span>
          </h2>
          <p className="text-lg text-[#B0C4D4] font-inter mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
          </p>
          <Link to="/contact">
            <Button className="bg-[#30D6C4] text-[#0C1C2C] hover:bg-[#28C4B2] font-medium px-8 py-3 rounded-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
