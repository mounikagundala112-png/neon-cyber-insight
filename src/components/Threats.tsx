import { Mail, Bug, Lock, Database } from "lucide-react";

const threats = [
  {
    icon: Mail,
    title: "Phishing",
    description: "Fraudulent attempts to obtain sensitive information through deceptive emails or messages.",
  },
  {
    icon: Bug,
    title: "Malware",
    description: "Malicious software designed to harm, exploit, or gain unauthorized access to systems.",
  },
  {
    icon: Lock,
    title: "Ransomware",
    description: "Software that encrypts your files and demands payment for their release.",
  },
  {
    icon: Database,
    title: "Data Breaches",
    description: "Unauthorized access to confidential data, leading to potential identity theft.",
  },
];

const Threats = () => {
  return (
    <section id="threats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Common Cyber <span className="text-accent glow-text">Threats</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding these threats is the first step in protecting yourself online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:glow-border group cursor-pointer"
            >
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <threat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{threat.title}</h3>
              <p className="text-muted-foreground">{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Threats;
