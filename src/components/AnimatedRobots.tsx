import { motion } from "framer-motion";
import { Bot, Zap, Code2 } from "lucide-react";

const AnimatedRobots = () => {
  // Animation pour les robots qui marchent
  const walkingAnimation = {
    x: [0, 40, 80, 120, 160, 200],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Animation pour les jambes (marche)
  const legAnimation = {
    rotate: [0, -20, 0, 20, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Animation des yeux qui clignotent
  const eyeAnimation = {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3
    }
  };

  const Robot = ({ delay = 0, color = "from-purple-500 to-pink-500" }) => (
    <motion.div
      animate={walkingAnimation}
      transition={{ ...walkingAnimation.transition, delay }}
      className="relative flex flex-col items-center"
    >
      {/* Tête */}
      <motion.div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl mb-1 shadow-lg relative`}>
        {/* Yeux */}
        <div className="absolute top-3 left-2 flex gap-1">
          <motion.div animate={eyeAnimation} className="w-2 h-2 bg-white rounded-full" />
          <motion.div animate={eyeAnimation} className="w-2 h-2 bg-white rounded-full" />
        </div>
        {/* Sourire */}
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/50 rounded-full" />
      </motion.div>

      {/* Corps */}
      <div className={`w-10 h-8 bg-gradient-to-br ${color} rounded-lg mb-1 shadow-md flex items-center justify-center`}>
        <Zap className="w-4 h-4 text-white" />
      </div>

      {/* Jambes animées */}
      <div className="flex gap-1">
        <motion.div
          animate={legAnimation}
          className="w-2 h-4 bg-white/70 rounded-sm"
          style={{ transformOrigin: "top center" }}
        />
        <motion.div
          animate={{ ...legAnimation, transition: { ...legAnimation.transition, delay: 0.5 } }}
          className="w-2 h-4 bg-white/70 rounded-sm"
          style={{ transformOrigin: "top center" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              L'équipe de robots
            </span>{" "}
            est en mouvement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Nos assistants intelligents travaillent 24/7 pour vous offrir la meilleure expérience d'apprentissage
          </motion.p>
        </div>

        {/* Robots Walking Section */}
        <div className="bg-gradient-to-b from-purple-600/10 to-pink-600/10 rounded-3xl border border-purple-500/20 p-12 md:p-16 overflow-hidden backdrop-blur-sm">
          <div className="relative h-40">
            {/* Track background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-white"
                  style={{ left: `${i * 5}%` }}
                />
              ))}
            </div>

            {/* Robots */}
            <div className="absolute inset-0 flex items-end justify-start px-8">
              <Robot delay={0} color="from-purple-500 to-pink-500" />
              <div className="absolute" style={{ left: "25%" }}>
                <Robot delay={1} color="from-blue-500 to-purple-500" />
              </div>
              <div className="absolute" style={{ left: "50%" }}>
                <Robot delay={2} color="from-pink-500 to-red-500" />
              </div>
              <div className="absolute" style={{ left: "75%" }}>
                <Robot delay={3} color="from-orange-500 to-yellow-500" />
              </div>
            </div>
          </div>

          {/* Stats below robots */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-4 bg-white/5 rounded-xl border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-gray-400 mt-2">Disponibilité</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-4 bg-white/5 rounded-xl border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ∞
              </div>
              <div className="text-sm text-gray-400 mt-2">Patience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-4 bg-white/5 rounded-xl border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                ⚡
              </div>
              <div className="text-sm text-gray-400 mt-2">Puissance</div>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Bot,
              title: "IA Intelligente",
              description: "Nos robots apprennent et s'adaptent à vos besoins spécifiques"
            },
            {
              icon: Code2,
              title: "Support Technique",
              description: "Résolution rapide des problèmes et guidance personnalisée"
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimisés pour une réponse ultra-rapide à vos requêtes"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedRobots;
