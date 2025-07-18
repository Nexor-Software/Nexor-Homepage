
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThreeColumnSection } from "@/components/ThreeColumnSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0C1C2C] overflow-x-hidden">
      <Header />
      <Hero />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
};

export default Index;
