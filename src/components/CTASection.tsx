import { Button } from "@/components/ui/button";
import { ArrowRight, Send, ExternalLink } from "lucide-react";

// Configuration
const TELEGRAM_BOT_USERNAME = "VulgaTechAfriqueBot";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6">
            <span className="text-xs text-accent font-medium">✨ Gratuit pour commencer</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
            Prêt à découvrir la robotique ?
          </h2>

          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Rejoignez plus de 50 000 apprenants qui ont déjà commencé leur voyage dans le monde de la robotique et de l'IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-11 sm:h-12 px-5 sm:px-6"
            >
              <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
                Commencer maintenant
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary h-11 sm:h-12 px-5 sm:px-6"
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir les plateformes
            </Button>
          </div>

          {/* Languages */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/50">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Disponible en 10+ langues</p>
            <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
              {["🇫🇷", "🇬🇧", "🇪🇸", "🇸🇦", "🇩🇪", "🇵🇹", "🇨🇳", "🇯🇵", "🇮🇳", "🇧🇷"].map((flag, index) => (
                <span key={index} className="text-lg sm:text-xl">
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
