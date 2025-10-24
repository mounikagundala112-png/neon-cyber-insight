import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Threats from "@/components/Threats";
import SafetyTips from "@/components/SafetyTips";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Threats />
      <SafetyTips />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
