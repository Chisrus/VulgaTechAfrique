import { motion } from "framer-motion";
import { MessageCircle, Bot, Smartphone, Globe, Zap, Users, Rocket, Brain, Shield, Sparkles } from "lucide-react";

interface Platform {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  isAvailable: boolean;
  color: string;
  gradient: string;
  stats?: { label: string; value: string }[];
}

const PlatformsSection = () => {
  const platforms: Platform[] = [
    {
      name: "Telegram Bot IA",
      description: "Apprenez directement depuis votre téléphone avec notre bot intelligent qui vous guide 24/7.",
      icon: <Bot className="w-7 h-7" />,
      features: [
        "Support IA 24/7",
        "50+ langues africaines", 
        "Exercices interactifs",
        "Progression automatique"
      ],
      isAvailable: true,
      color: "from-blue-500 to-indigo-600",
      gradient: "from-blue-400 to-indigo-500",
      stats: [
        { label: "Utilisateurs", value: "150K+" },
        { label: "Satisfaction", value: "98%" }
      ]
    },
    {
      name: "Platform Web Premium",
      description: "Accédez à toutes nos fonctionnalités avancées depuis votre navigateur.",
      icon: <Globe className="w-7 h-7" />,
      features: [
        "Interface complète",
        "Projets pratiques",
        "Certificats reconnus",
        "Communauté active"
      ],
      isAvailable: true,
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-400 to-pink-500",
      stats: [
        { label: "Cours", value: "200+" },
        { label: "Experts", value: "50+" }
      ]
    },
    {
      name: "Application Mobile",
      description: "Téléchargez notre app pour apprendre n'importe où, même hors ligne.",
      icon: <Smartphone className="w-7 h-7" />,
      features: [
        "Mode hors ligne",
        "Notifications intelligentes",
        "Interface adaptée",
        "Synchronisation cloud"
      ],
      isAvailable: false,
      color: "from-green-500 to-teal-600",
      gradient: "from-green-400 to-teal-500",
      stats: [
        { label: "Lancement", value: "Q2 2025" },
        { label: "Bêta", value: "1000+" }
      ]
    }
  ];

  return (
    <section className="section section-gradient">
      <div className="container-modern">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg mb-8">
            <Rocket className="w-5 h-5" />
            <span>Plateformes Multi-Access</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Apprenez <span className="text-gradient">partout</span>, <span className="text-gradient">toujours</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Accédez à nos formations sur tous vos appareils, avec une expérience 
            optimisée pour chaque plateforme et chaque contexte.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid-modern lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`card card-hover h-full relative ${
                !platform.isAvailable ? 'opacity-75' : ''
              }`}>
                {/* Status Badge */}
                {!platform.isAvailable && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                      Bientôt disponible
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {platform.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                {platform.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-xl font-bold text-gradient">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {platform.isAvailable ? (
                  <button className={`w-full py-4 rounded-xl font-semibold bg-gradient-to-r ${platform.color} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                    <Sparkles className="w-5 h-5" />
                    <span>Commencer maintenant</span>
                  </button>
                ) : (
                  <button className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 border border-gray-300 cursor-not-allowed flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span>Bientôt disponible</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/25">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">1</div>
                <div className="text-sm text-white/80">Pays</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">1</div>
                <div className="text-sm text-white/80">Langue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/80">Support IA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-sm text-white/80">Apprenants</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
