import { Shield, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">CyberShield</span>
            </div>
            <p className="text-muted-foreground">
              Empowering digital security through awareness and education.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#threats" className="text-muted-foreground hover:text-accent transition-colors">
                  Threats
                </a>
              </li>
              <li>
                <a href="#tips" className="text-muted-foreground hover:text-accent transition-colors">
                  Safety Tips
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent transition-all hover:glow-border"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent transition-all hover:glow-border"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent transition-all hover:glow-border"
              >
                <Github className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 CyberShield. All rights reserved. Stay secure online.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
