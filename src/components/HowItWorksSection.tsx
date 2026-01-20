import { MessageCircle, BookOpen, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Rejoignez le chatbot",
    description: "Connectez-vous à notre bot WhatsApp ou Telegram en un clic.",
  },
  {
    number: "2",
    icon: BookOpen,
    title: "Choisissez votre parcours",
    description: "Sélectionnez votre niveau : robotique, IA, programmation.",
  },
  {
    number: "3",
    icon: Trophy,
    title: "Apprenez à votre rythme",
    description: "Recevez des leçons quotidiennes et complétez des quiz.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Construisez des projets",
    description: "Mettez en pratique avec des projets réels guidés.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Comment ça marche</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
            Commencez en 4 étapes
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            De zéro à la robotique en quelques minutes seulement.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-border" />
              )}
              
              <div className="bg-card rounded-xl p-5 sm:p-6 border border-border/50 relative hover:border-primary/30 transition-colors">
                {/* Number */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mb-3 sm:mb-4">
                  {step.number}
                </div>

                <h3 className="font-display text-base sm:text-lg font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
