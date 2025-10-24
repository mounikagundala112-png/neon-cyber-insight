import { ExternalLink, BookOpen, Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "US-CERT",
    description: "Official cybersecurity alerts and tips from the US government",
    url: "https://www.cisa.gov/uscert",
    icon: Shield,
  },
  {
    title: "Have I Been Pwned",
    description: "Check if your email has been compromised in a data breach",
    url: "https://haveibeenpwned.com",
    icon: Search,
  },
  {
    title: "VirusTotal",
    description: "Analyze suspicious files and URLs for malware detection",
    url: "https://www.virustotal.com",
    icon: Search,
  },
  {
    title: "NIST Cybersecurity",
    description: "Framework and resources from the National Institute of Standards",
    url: "https://www.nist.gov/cybersecurity",
    icon: BookOpen,
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Helpful <span className="text-accent glow-text">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore these trusted resources to enhance your cybersecurity knowledge
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:glow-border group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Site <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
