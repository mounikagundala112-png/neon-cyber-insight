import { Shield, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent glow-text">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            CyberShield is dedicated to promoting online safety and cybersecurity awareness. 
            We believe that everyone deserves to navigate the digital world with confidence and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:glow-border">
            <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-center">Protection</h3>
            <p className="text-muted-foreground text-center">
              Providing essential knowledge to safeguard your digital presence and personal information.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:glow-border">
            <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-center">Awareness</h3>
            <p className="text-muted-foreground text-center">
              Educating users about evolving cyber threats and best practices for staying secure online.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:glow-border">
            <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-center">Community</h3>
            <p className="text-muted-foreground text-center">
              Building a community of informed users who prioritize digital security and privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
