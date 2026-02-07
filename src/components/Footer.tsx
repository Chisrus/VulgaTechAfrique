import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone, Linkedin, Heart, Globe, Users } from "lucide-react";

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
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
      {/* Pattern africain */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L95 50 L50 95 L5 50 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3Cpath d='M20 20 L80 20 L80 80 L20 80 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3Cpath d='M35 35 L65 35 L65 65 L35 65 Z' fill='%23FFF' stroke='%23FFF' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container-modern relative z-10">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-2xl font-bold mb-8 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <span className="text-white">VulgaTech</span>
                  <div className="text-xs text-amber-200 font-medium">
                    Education Technologique Africaine
                  </div>
                </div>
              </Link>
              
              <p className="text-amber-100 mb-8 leading-relaxed">
                Révolutionnons l'éducation en Afrique à travers la technologie. 
                Accessible, inclusive, et profondément enracinée dans notre culture.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                <a
                  href="https://www.linkedin.com/company/vulgatechafrique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-amber-800 hover:bg-amber-700 text-amber-100 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-amber-800 hover:bg-amber-700 text-amber-100 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Telegram"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-amber-800 to-orange-800 rounded-xl p-6 border border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-amber-200" />
                  <h4 className="font-semibold text-white">Rejoignez notre communauté</h4>
                </div>
                <p className="text-amber-200 mb-6 text-sm leading-relaxed">
                  Apprenez, partagez et grandissez avec nous dans l'aventure de la technologie africaine.
                </p>
                <a 
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Commencer maintenant</span>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-6 text-amber-100">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-amber-200 hover:text-white transition-colors text-sm"
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

        {/* Cultural Section */}
        <div className="py-12 border-t border-amber-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision Africaine</h3>
            <p className="text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Nous croyons en la puissance de la jeunesse africaine pour transformer notre continent. 
              Chaque ligne de code, chaque projet, chaque innovation est une célébration de notre héritage 
              et un pas vers un avenir technologique prospère.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Accessibilité</h4>
              <p className="text-amber-200 text-sm">
                La technologie pour tous, partout en Afrique
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Authenticité</h4>
              <p className="text-amber-200 text-sm">
                Des solutions qui reflètent notre réalité
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Communauté</h4>
              <p className="text-amber-200 text-sm">
              </p>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-12 border-t border-amber-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-amber-300" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Email</div>
                <a href="mailto:contact@vulgatech.online" className="text-amber-200 hover:text-white transition-colors text-sm">
                  contact@vulgatech.online
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-amber-300" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Téléphone</div>
                <a href="tel:+2250151239570" className="text-amber-200 hover:text-white transition-colors text-sm">
                  +225 01 51 23 95 70
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-amber-300" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Siège social</div>
                <span className="text-amber-200 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-amber-200">
              © {currentYear} VulgaTech. Fait avec ❤️ en Afrique pour l'Afrique.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-amber-200">
              <span>Pan-Africain</span>
              <span>Inclusif</span>
              <span>Innovant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
