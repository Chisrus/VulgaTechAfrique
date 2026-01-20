import { MessageCircle, BookOpen, Trophy, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Rejoignez le bot",
    description: "Connectez-vous à notre bot WhatsApp ou Telegram en un clic. Aucune installation requise.",
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Choisissez votre parcours",
    description: "Robotique, IA, programmation Python... Sélectionnez votre niveau et vos objectifs.",
    color: "from-primary to-primary/70",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Apprenez chaque jour",
    description: "Recevez des micro-leçons quotidiennes, complétez des quiz et gagnez des points.",
    color: "from-accent to-accent/70",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Créez des projets",
    description: "Mettez en pratique avec des projets réels et construisez votre portfolio.",
    color: "from-purple-500 to-purple-400",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Comment ça marche
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            4 étapes pour commencer
          </h2>
          <p className="text-lg text-muted-foreground">
            De zéro à la robotique en quelques minutes. Sans installation, sans complication.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="relative text-center lg:text-left">
                {/* Step Number Circle */}
                <div className="relative inline-flex mb-6 lg:mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
