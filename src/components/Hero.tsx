import { Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyber from "@/assets/hero-cyber.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCyber})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Shield className="absolute top-20 left-10 w-16 h-16 text-accent/20 animate-pulse" />
        <Lock className="absolute top-40 right-20 w-12 h-12 text-primary/20 animate-pulse delay-75" />
        <Eye className="absolute bottom-32 left-1/4 w-14 h-14 text-accent/20 animate-pulse delay-150" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            Stay Secure in the <span className="text-accent">Digital World</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering you with knowledge and tools to protect yourself from cyber threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground glow-border transition-all hover:glow-border-strong text-lg px-8"
            >
              Learn More
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all text-lg px-8"
              onClick={() => {
                const element = document.getElementById("threats");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Threats
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
