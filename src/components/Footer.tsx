import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-modern">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-2xl font-bold mb-6"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-white">VulgaTech</span>
              </Link>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Démocratisons la technologie pour chaque africain. 
                Accessible, inclusive, adaptée à votre réalité et vos ambitions.
              </p>

              {/* CTA */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-semibold">Rejoignez notre Bot IA</h4>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Accès instantané à nos cours, support 24/7 et apprentissage personnalisé
                </p>
                <a 
                  href="https://t.me/VulgaTechbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ouvrir Telegram</span>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-6 text-white">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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

        {/* Contact Bar */}
        <div className="py-12 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Email</div>
                <a href="mailto:contact@vulgatech.online" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contact@vulgatech.online
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Téléphone</div>
                <a href="tel:+22500000000" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +225 00 00 00 00
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Siège social</div>
                <span className="text-gray-400 text-sm">
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">
              &copy; {currentYear} VulgaTech. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Pan-Africain</span>
              <span>Sécurisé</span>
              <span>Fait avec passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
