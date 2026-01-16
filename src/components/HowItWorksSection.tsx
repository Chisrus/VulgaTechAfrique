import { MessageCircle, BookOpen, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Rejoignez le chatbot",
    description: "Connectez-vous à notre bot WhatsApp ou Telegram en un clic. Aucune inscription complexe.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Choisissez votre parcours",
    description: "Sélectionnez votre niveau et vos centres d'intérêt : robotique, IA, programmation, électronique.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Apprenez à votre rythme",
    description: "Recevez des leçons quotidiennes, complétez des quiz et gagnez des badges pour votre progression.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Construisez des projets",
    description: "Mettez en pratique vos connaissances avec des projets guidés et partagez-les avec la communauté.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Comment ça marche</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Commencez en{" "}
            <span className="text-gradient-primary">4 étapes simples</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De zéro à la robotique en quelques minutes. Notre processus est conçu pour être le plus simple possible.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Card */}
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground shadow-glow text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
