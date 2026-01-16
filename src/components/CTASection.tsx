import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Gratuit pour commencer</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Prêt à découvrir le futur de{" "}
            <span className="text-gradient-primary">l'éducation</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Rejoignez plus de 50 000 apprenants qui ont déjà commencé leur voyage dans le monde de la robotique et de l'IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="group">
              <MessageCircle className="w-5 h-5" />
              Commencer maintenant
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Voir les tarifs
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground mb-4">Disponible dans plus de 10 langues</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["🇫🇷", "🇬🇧", "🇪🇸", "🇸🇦", "🇩🇪", "🇵🇹", "🇨🇳", "🇯🇵", "🇮🇳", "🇧🇷"].map((flag, index) => (
                <span
                  key={index}
                  className="text-2xl hover:scale-125 transition-transform cursor-default"
                >
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
