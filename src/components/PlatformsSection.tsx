import { Button } from "@/components/ui/button";
import { MessageCircle, Send, ArrowRight, Check, ExternalLink } from "lucide-react";

// Configuration - Remplacez par votre vrai nom de bot
const TELEGRAM_BOT_USERNAME = "VulgaTechAfriqueBot";
const WHATSAPP_NUMBER = "+33123456789"; // Remplacez par votre numéro WhatsApp Business

const platforms = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    description: "Apprenez directement depuis votre messagerie préférée.",
    features: ["Cours interactifs", "Quiz automatiques", "Support vocal"],
    cta: "Rejoindre sur WhatsApp",
    link: `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Bonjour ! Je souhaite apprendre la robotique avec VulgaTechAfrique.")}`,
  },
  {
    name: "Telegram",
    icon: Send,
    color: "bg-[#0088cc]",
    description: "Accédez à notre bot pour des sessions enrichies.",
    features: ["Groupes d'étude", "Fichiers & médias", "Notifications"],
    cta: "Rejoindre sur Telegram",
    link: `https://t.me/${TELEGRAM_BOT_USERNAME}`,
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Plateformes</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Apprenez où vous êtes déjà
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Pas besoin de télécharger une nouvelle app. Utilisez les messageries que vous connaissez.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-card rounded-xl p-5 sm:p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-colors"
            >
              {/* Platform Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${platform.color} flex items-center justify-center shrink-0`}>
                  <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{platform.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bot d'apprentissage</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 sm:mb-5 text-sm leading-relaxed">
                {platform.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 sm:gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-11 sm:h-12"
              >
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  {platform.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
