import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold glow-text">CyberShield</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("threats")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Threats
            </button>
            <button 
              onClick={() => scrollToSection("tips")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Safety Tips
            </button>
            <button 
              onClick={() => scrollToSection("resources")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Resources
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/80 text-primary-foreground glow-border transition-all hover:glow-border-strong"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
