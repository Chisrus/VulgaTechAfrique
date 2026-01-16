import { Bot, Globe, Users, Zap, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Chatbot Intelligent",
    description: "Un assistant IA disponible 24/7 pour répondre à vos questions et vous guider dans votre apprentissage.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Cours disponibles en français, anglais, espagnol, arabe et 6 autres langues pour une accessibilité mondiale.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "Communauté Active",
    description: "Rejoignez des milliers d'apprenants, partagez vos projets et collaborez sur des défis robotiques.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Apprentissage Rapide",
    description: "Méthode pédagogique optimisée pour apprendre les concepts complexes de manière simple et ludique.",
    gradient: "from-accent to-primary",
  },
  {
    icon: BookOpen,
    title: "Projets Pratiques",
    description: "Construisez de vrais robots et programmes IA avec des tutoriels étape par étape.",
    gradient: "from-primary/80 to-accent/80",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Obtenez des certificats reconnus pour valider vos compétences en robotique et IA.",
    gradient: "from-accent/80 to-primary/80",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Fonctionnalités</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tout ce dont vous avez besoin pour{" "}
            <span className="text-gradient-primary">apprendre</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une plateforme complète conçue pour rendre la robotique et l'IA accessibles, 
            peu importe votre niveau ou votre localisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
