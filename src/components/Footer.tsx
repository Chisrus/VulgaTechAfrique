import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone, Linkedin, Heart, Globe, Users, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Formation": [
      { name: "Robotique", href: "/cours" },
      { name: "Intelligence Artificielle", href: "/cours" },
      { name: "Développement", href: "/cours" },
      { name: "Data Science", href: "/cours" }
    ],
    "Ressources": [
      { name: "Articles", href: "/articles" },
      { name: "Documentation", href: "/documentation" },
      { name: "Communauté", href: "/communaute" },
      { name: "Support", href: "/support" }
    ],
    "À propos": [
      { name: "Notre mission", href: "/a-propos" },
      { name: "Inclusion", href: "/inclusion" },
      { name: "Partenariats", href: "/partenariats" },
      { name: "Équipe", href: "/equipe" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L95 50 L50 95 L5 50 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3Cpath d='M20 20 L80 20 L80 80 L20 80 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3Cpath d='M35 35 L65 35 L65 65 L35 65 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container-modern relative z-10">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-2xl font-bold mb-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white">VulgaTech</span>
                  <div className="text-xs text-purple-300 font-medium">
                    Révolution Technologique
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Transformons l'Afrique à travers la technologie. 
                Accessible, inclusive, et profondément enracinée dans notre vision.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                <a
                  href="https://www.linkedin.com/company/vulgatechafrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Telegram"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-purple-300" />
                  <h4 className="font-semibold text-white">Rejoignez la révolution</h4>
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Apprenez, innovez et transformez avec nous dans l'aventure technologique africaine.
                </p>
                <a 
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Commencer maintenant</span>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-6 text-purple-300">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="py-12 border-t border-purple-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision Technologique</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nous croyons en la puissance de la technologie pour transformer l'Afrique. 
              Chaque innovation est une célébration de notre potentiel et un pas vers un avenir prospère.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30">
                <Globe className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Accessibilité</h4>
              <p className="text-gray-400 text-sm">
                La technologie pour tous, partout en Afrique
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30">
                <Heart className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Innovation</h4>
              <p className="text-gray-400 text-sm">
                Des solutions qui transforment notre réalité
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30">
                <Users className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Communauté</h4>
              <p className="text-gray-400 text-sm">
                Ensemble nous construisons l'avenir
              </p>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-12 border-t border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Email</div>
                <a href="mailto:contact@vulgatech.online" className="text-gray-300 hover:text-white transition-colors text-sm">
                  contact@vulgatech.online
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Téléphone</div>
                <a href="tel:+2250151239570" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +225 01 51 23 95 70
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Siège social</div>
                <span className="text-gray-300 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">
              © {currentYear} VulgaTech. Fait avec ❤️ pour l'Afrique.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Pan-Africain</span>
              <span>Innovant</span>
              <span>Inclusif</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
