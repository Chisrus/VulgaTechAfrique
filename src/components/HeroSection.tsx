import { Button } from "@/components/ui/button";
import { MessageCircle, Play, Send, ExternalLink, Sparkles, Users, BookOpen, Globe } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-africa-tech.jpg";

const TELEGRAM_BOT_USERNAME = "VulgaTechbot";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Apprenez la{" "}
              <span className="text-gradient-primary">robotique</span>
              {" "}et l'
              <span className="text-gradient-primary">IA</span>
              {" "}simplement
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Formation accessible via WhatsApp et Telegram. Cours interactifs, 
              projets pratiques et support en <strong className="text-foreground">30+ langues africaines</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-13 px-8 text-base font-medium shadow-lg shadow-primary/25"
              >
                <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5" />
                  Démarrer gratuitement
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/60 hover:bg-secondary gap-2 h-13 px-8 text-base"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5" />
                Voir la démo
              </Button>
            </div>

            {/* Stats Row */}
            <motion.div 
              className="flex gap-8 sm:gap-12 mt-12 pt-8 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Apprenants</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">120+</p>
                  <p className="text-sm text-muted-foreground">Cours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Langues</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={heroImage}
                alt="Étudiants africains apprenant la robotique et l'IA dans un lab moderne"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Chatbot 24/7</p>
                  <p className="text-sm text-muted-foreground">Réponses instantanées</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -top-4 -right-4 sm:-right-8 bg-card/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-border/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold">🇸🇳</div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">🇨🇮</div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">🇲🇱</div>
                </div>
                <span className="text-sm font-medium text-foreground">+47 pays</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
