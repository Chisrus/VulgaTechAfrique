import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Play, Send, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-robot-education.jpg";

// Configuration - même valeurs que PlatformsSection
const TELEGRAM_BOT_USERNAME = "VulgaTechbot";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-primary font-medium">Disponible en 10+ langues</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              La robotique et l'IA{" "}
              <span className="text-gradient-primary">accessible à tous</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Apprenez la robotique et l'intelligence artificielle directement depuis WhatsApp ou Telegram. 
              Cours interactifs, projets pratiques et communauté africaine.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-11 sm:h-12 px-5 sm:px-6"
              >
                <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4" />
                  Commencer sur Telegram
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary gap-2 h-11 sm:h-12 px-5 sm:px-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-4 h-4" />
                Comment ça marche
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">50K+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Apprenants</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">120+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Cours</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Langues</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-8 order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Robot enseignant la technologie à des étudiants"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-2 sm:-left-4 lg:left-0 bg-card p-3 sm:p-4 rounded-xl shadow-soft border border-border/50 max-w-[180px] sm:max-w-[200px]">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-foreground">Chatbot 24/7</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Apprenez à votre rythme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
