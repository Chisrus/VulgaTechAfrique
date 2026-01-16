import { Button } from "@/components/ui/button";
import { MessageCircle, Send, ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[hsl(142,70%,45%)]",
    hoverColor: "hover:bg-[hsl(142,70%,40%)]",
    description: "Apprenez directement depuis votre messagerie préférée. Recevez des leçons, posez des questions et suivez votre progression.",
    features: ["Cours interactifs", "Quiz automatiques", "Support vocal"],
    cta: "Rejoindre sur WhatsApp",
  },
  {
    name: "Telegram",
    icon: Send,
    color: "bg-[hsl(200,80%,50%)]",
    hoverColor: "hover:bg-[hsl(200,80%,45%)]",
    description: "Accédez à notre bot Telegram pour des sessions d'apprentissage enrichies avec des médias et ressources exclusives.",
    features: ["Groupes d'étude", "Fichiers & médias", "Notifications intelligentes"],
    cta: "Rejoindre sur Telegram",
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Plateformes</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Apprenez où vous êtes{" "}
            <span className="text-gradient-accent">déjà</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pas besoin de télécharger une nouvelle application. Utilisez les messageries que vous connaissez déjà.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Platform Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl ${platform.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">Bot d'apprentissage</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {platform.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="hero"
                size="lg"
                className="w-full group/btn"
              >
                {platform.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
