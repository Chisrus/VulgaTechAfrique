import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TELEGRAM_BOT_USERNAME = "VulgaTechbot";

// African country flags
const africanFlags = ["🇸🇳", "🇨🇮", "🇲🇱", "🇧🇫", "🇳🇬", "🇬🇭", "🇰🇪", "🇹🇿", "🇪🇹", "🇨🇲", "🇨🇩", "🇲🇦"];

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card to-card/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Prêt à rejoindre la
            <br />
            <span className="text-gradient-primary">révolution tech africaine ?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez plus de 50 000 apprenants qui ont déjà commencé leur voyage 
            dans le monde de la robotique et de l'IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 px-10 text-lg font-medium shadow-xl shadow-primary/25"
            >
              <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Commencer maintenant
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/60 hover:bg-secondary gap-2 h-14 px-10 text-lg"
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir les plateformes
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* African flags display */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Apprenants dans toute l'Afrique</p>
            <div className="flex justify-center gap-2 flex-wrap">
              {africanFlags.map((flag, index) => (
                <span 
                  key={index} 
                  className="text-2xl sm:text-3xl opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-200 cursor-default"
                >
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
