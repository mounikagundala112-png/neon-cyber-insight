import { Key, ShieldCheck, AlertTriangle, RefreshCw } from "lucide-react";

const tips = [
  {
    icon: Key,
    title: "Strong Passwords",
    description: "Use complex passwords with a mix of letters, numbers, and symbols. Never reuse passwords.",
  },
  {
    icon: ShieldCheck,
    title: "Two-Factor Authentication",
    description: "Enable 2FA on all important accounts for an extra layer of security.",
  },
  {
    icon: AlertTriangle,
    title: "Avoid Suspicious Links",
    description: "Don't click on links from unknown sources. Verify sender authenticity before responding.",
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description: "Keep your software, OS, and apps updated to patch security vulnerabilities.",
  },
];

const SafetyTips = () => {
  return (
    <section id="tips" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Safety <span className="text-accent glow-text">Best Practices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these essential tips to significantly improve your online security
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:glow-border flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                  <tip.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
