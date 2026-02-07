import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Github, Twitter, Linkedin, Heart, Sparkles, Rocket, Globe, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Apprentissage": [
      { name: "Tous les cours", href: "/cours" },
      { name: "Parcours IA", href: "/parcours/ia" },
      { name: "Parcours Robotique", href: "/parcours/robotique" },
      { name: "Certifications", href: "/certifications" }
    ],
    "Ressources": [
      { name: "Articles", href: "/articles" },
      { name: "Documentation", href: "/documentation" },
      { name: "Communauté", href: "/communaute" },
      { name: "FAQ", href: "/faq" }
    ],
    "Entreprise": [
      { name: "À propos", href: "/a-propos" },
      { name: "Inclusion", href: "/inclusion" },
      { name: "Partenariats", href: "/partenariats" },
      { name: "Carrières", href: "/carrieres" }
    ],
    "Légal": [
      { name: "Confidentialité", href: "/confidentialite" },
      { name: "Conditions", href: "/conditions" },
      { name: "Cookies", href: "/cookies" },
      { name: "Accessibilité", href: "/accessibilite" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/vulgatech", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/company/vulgatech", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Github", href: "https://github.com/vulgatech", icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
      <div className="container-modern">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-3xl font-bold mb-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white">VulgaTech</span>
                  <div className="text-sm text-indigo-200 font-normal">
                    Révolution EdTech
                  </div>
                </div>
              </Link>
              
              <p className="text-indigo-200 mb-8 max-w-sm leading-relaxed">
                Démocratisons la technologie pour chaque africain. 
                Accessible, inclusive, adaptée à votre réalité et vos ambitions.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-indigo-200 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-indigo-300" />
                  <h4 className="font-bold text-lg">Rejoignez notre Bot IA</h4>
                </div>
                <p className="text-indigo-200 mb-6 text-sm leading-relaxed">
                  Accès instantané à nos cours, support 24/7 et apprentissage personnalisé
                </p>
                <a 
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ouvrir Telegram</span>
                  <Rocket className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-6 text-white">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-indigo-200 hover:text-white transition-colors text-sm leading-relaxed hover:translate-x-1 inline-block duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-1">Email</div>
                <a href="mailto:contact@vulgatech.online" className="text-indigo-200 hover:text-white transition-colors text-sm">
                  contact@vulgatech.online
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-1">Téléphone</div>
                <a href="tel:+22500000000" className="text-indigo-200 hover:text-white transition-colors text-sm">
                  +225 00 00 00 00
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-1">Siège social</div>
                <span className="text-indigo-200 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-indigo-200">
              © {currentYear} VulgaTech. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-indigo-200">
                <Globe className="w-4 h-4" />
                <span>Pan-Africain</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-indigo-200">
                <Shield className="w-4 h-4" />
                <span>Sécurisé</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-indigo-200">
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>Fait avec passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
