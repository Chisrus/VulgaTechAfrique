import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Check, ExternalLink, Smartphone, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_USERNAME = "VulgaTechbot";

const platforms = [
  {
    name: "Telegram",
    icon: Send,
    color: "bg-[#0088cc]",
    gradient: "from-[#0088cc] to-[#005f8c]",
    description: "Accédez à notre bot Telegram pour des sessions d'apprentissage enrichies.",
    features: ["Groupes d'étude", "Fichiers & médias", "Bots interactifs", "Channels"],
    cta: "Rejoindre sur Telegram",
    link: `https://t.me/${TELEGRAM_BOT_USERNAME}`,
    isAvailable: true,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    gradient: "from-[#25D366] to-[#128C7E]",
    description: "Apprenez directement depuis votre messagerie préférée. Simple et accessible.",
    features: ["Cours interactifs", "Quiz automatiques", "Support vocal", "Notifications"],
    cta: "Bientôt disponible",
    link: "#",
    isAvailable: false,
  },
];

const PlatformsSection = () => {
  const { toast } = useToast();

  const handlePlatformClick = (platform: typeof platforms[0], e: React.MouseEvent) => {
    if (!platform.isAvailable) {
      e.preventDefault();
      toast({
        title: "Fonctionnalité bientôt disponible",
        description: "L'accès via WhatsApp sera disponible prochainement. En attendant, rejoignez-nous sur Telegram !",
      });
    }
  };

  return (
    <section id="platforms" className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Plateformes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Apprenez où vous êtes
          </h2>
          <p className="text-lg text-muted-foreground">
            Pas besoin de télécharger une nouvelle app. Utilisez les messageries 
            que vous connaissez déjà.
          </p>
        </AnimatedSection>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <AnimatedSection key={platform.name} delay={index * 0.15}>
              <div className={`group relative h-full bg-card rounded-3xl p-8 lg:p-10 border border-border/50 overflow-hidden transition-all duration-300 ${platform.isAvailable ? 'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5' : 'opacity-75'}`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 ${platform.isAvailable ? 'group-hover:opacity-5' : ''} transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Platform Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg ${!platform.isAvailable ? 'grayscale' : ''}`}>
                        <platform.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">Bot d'apprentissage</p>
                      </div>
                    </div>
                    <Smartphone className="w-8 h-8 text-muted-foreground/30" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild={platform.isAvailable}
                    size="lg"
                    disabled={!platform.isAvailable}
                    onClick={(e) => handlePlatformClick(platform, e)}
                    className={`w-full ${platform.isAvailable ? `bg-gradient-to-r ${platform.gradient} hover:opacity-90 text-white` : 'bg-muted text-muted-foreground cursor-not-allowed'} gap-2 h-13 text-base font-medium shadow-lg`}
                  >
                    {platform.isAvailable ? (
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        {platform.cta}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <>
                        <Clock className="w-4 h-4" />
                        {platform.cta}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
