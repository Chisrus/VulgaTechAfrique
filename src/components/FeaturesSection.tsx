import { Bot, Globe, Zap, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Bot,
    title: "Chatbot IA 24/7",
    description: "Un assistant intelligent sur Telegram qui répond à vos questions et vous guide pas à pas.",
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Contenu disponible en français et dans les langues locales de Côte d'Ivoire.",
  },
  {
    icon: Zap,
    title: "Micro-learning",
    description: "Leçons de 5-10 minutes optimisées pour apprendre les concepts complexes simplement.",
  },
  {
    icon: BookOpen,
    title: "Projets Pratiques",
    description: "Construisez de vrais robots et programmes IA avec un accompagnement étape par étape.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Fonctionnalités
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Tout pour réussir dans la tech
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une plateforme complète pensée pour l'Afrique, accessible depuis 
            les messageries que vous utilisez déjà.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group h-full bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
