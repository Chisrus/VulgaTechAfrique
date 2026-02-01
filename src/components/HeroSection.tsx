import { Button } from "@/components/ui/button";
import { MessageCircle, Play, Send, ExternalLink, Sparkles, Users, BookOpen, Globe, Heart, Ear, Home, HandHeart } from "lucide-react";
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
            {/* Inclusion Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/80 text-accent-foreground text-xs font-medium mb-6 border border-accent-foreground/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Heart className="w-3.5 h-3.5 text-primary" />
              <span>Accessible à tous • Villages • Zones rurales • Sourds et malentendants</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              La tech pour{" "}
              <span className="text-gradient-primary">tous</span>
              {", "}
              <span className="text-gradient-primary">partout</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nous démocratisons la <strong className="text-foreground">robotique</strong> et l'<strong className="text-foreground">IA</strong> pour chaque africain : 
              villageois, ruraux, personnes sourdes ou malentendantes. Cours en <strong className="text-foreground">30+ langues africaines</strong> 
              {" "}via Telegram, adaptés à votre rythme et votre contexte.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6 text-base font-medium shadow-lg shadow-primary/25"
              >
                <a href="/cours">
                  <BookOpen className="w-5 h-5" />
                  Commencer un cours
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-border/60 hover:bg-secondary gap-2 h-12 px-6 text-base"
              >
                <a href="/articles">
                  <ExternalLink className="w-5 h-5" />
                  Lire un article
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-primary hover:text-primary hover:bg-primary/10 gap-2 h-12 px-6 text-base"
                onClick={() => document.getElementById('inclusion')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="w-5 h-5" />
                Nos valeurs
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
                  <div className="w-8 h-8 rounded-full bg-green-500" />
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <div className="w-8 h-8 rounded-full bg-yellow-500" />
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
