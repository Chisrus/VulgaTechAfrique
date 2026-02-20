import { Bot, Globe, Zap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Bot,
    title: "Chatbot IA 24/7",
    description: "Un assistant intelligent qui répond à vos questions et vous guide pas à pas.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Contenu en français et dans les langues locales africaines.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: Zap,
    title: "Micro-learning",
    description: "Leçons courtes optimisées pour apprendre les concepts complexes simplement.",
    gradient: "from-orange-600 to-pink-600"
  },
  {
    icon: BookOpen,
    title: "Projets Pratiques",
    description: "Construisez de vrais robots et programmes IA accompagnés.",
    gradient: "from-cyan-600 to-blue-600"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-purple-300">Capacités</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tout pour réussir
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">dans la tech</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une plateforme pensée pour l'Afrique, accessible depuis les messageries que vous utilisez déjà.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm`}>
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-full -mr-8 -mb-8 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
