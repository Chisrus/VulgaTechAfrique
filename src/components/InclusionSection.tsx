import { Heart, Ear, Home, GraduationCap, Globe, Users, HandHeart, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const inclusionFeatures = [
  {
    icon: Home,
    title: "Communautés Rurales",
    description: "Des contenus adaptés aux réalités des villages et zones éloignées, avec support hors-ligne.",
    color: "from-green-500/20 to-green-500/5 text-green-400"
  },
  {
    icon: Ear,
    title: "Sourds & Malentendants",
    description: "Contenus visuels, textes détaillés et supports adaptés pour une accessibilité totale.",
    color: "from-blue-500/20 to-blue-500/5 text-blue-400"
  },
  {
    icon: GraduationCap,
    title: "Sans Diplôme Formel",
    description: "Pas de prérequis académiques. Tout le monde peut apprendre la tech à son rythme.",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400"
  },
  {
    icon: Globe,
    title: "Langues Locales",
    description: "Bambara, Wolof, Swahili, Lingala, Hausa... Apprenez dans votre langue maternelle.",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400"
  },
];

const InclusionSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HandHeart className="w-4 h-4" />
            Notre Engagement
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            La technologie n'exclut{" "}
            <span className="text-gradient-primary">personne</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            VulgaTechAfrique est né d'une conviction : chaque africain, qu'il soit en ville ou au village, 
            entendant ou sourd, diplômé ou autodidacte, mérite d'accéder au savoir technologique.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusionFeatures.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote/Testimony */}
        <AnimatedSection delay={0.4} className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <MessageCircle className="w-10 h-10 text-primary/60 mx-auto mb-4" />
            <blockquote className="text-lg italic text-foreground/90 mb-4">
              "Grâce à VulgaTech, mon fils au village apprend Python comme les enfants de la capitale. 
              La distance n'est plus une barrière."
            </blockquote>
            <cite className="text-sm text-muted-foreground">
              — Aminata K., Mère de famille, Région de Ségou, Mali
            </cite>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InclusionSection;
