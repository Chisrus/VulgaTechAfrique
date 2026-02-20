import { MessageCircle, BookOpen, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Rejoignez le bot",
    description: "Connectez-vous à notre bot en un clic. Aucune installation requise.",
    color: "from-purple-600 to-pink-600",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Choisissez votre parcours",
    description: "Robotique, IA, programmation... Sélectionnez votre niveau.",
    color: "from-blue-600 to-purple-600",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Apprenez chaque jour",
    description: "Micro-leçons quotidiennes, quiz et points à gagner.",
    color: "from-orange-600 to-pink-600",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Créez des projets",
    description: "Projets réels pour construire votre portfolio.",
    color: "from-cyan-600 to-blue-600",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className="text-sm font-semibold text-purple-300">Guide</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            4 étapes simple
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">pour commencer</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            De zéro à la robotique en quelques minutes. Sans installation, sans complication.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
              )}

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm">
                {/* Number Circle */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number Badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center`}>
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Prêt à commencer votre voyage technologique ?</p>
          <a 
            href="https://t.me/VulgaTechbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Rejoindre maintenant
            <Rocket className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
