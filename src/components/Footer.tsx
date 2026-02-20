import { Link } from "react-router-dom";
import { MessageCircle, Mail, Linkedin, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Cours", href: "/cours" },
    { name: "Articles", href: "/articles" },
    { name: "À propos", href: "/a-propos" },
    { name: "Inclusion", href: "/inclusion" }
  ];

  const legalLinks = [
    { name: "Confidentialité", href: "/confidentialite" },
    { name: "Conditions", href: "/conditions" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-20 pb-10">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-60 h-60 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold mb-6 group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">VulgaTech</span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformons l'Afrique à travers l'innovation technologique. Accessible, inclusive et créative.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/vulgatechafrique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/VulgaTechbot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
              Explorez
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
              Contact
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@vulgatech.online"
                className="flex items-start gap-3 group hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-gray-100 transition-colors">
                  contact@vulgatech.online
                </span>
              </a>
              <a 
                href="https://t.me/VulgaTechbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-purple-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-gray-100 transition-colors">
                  Rejoignez notre communauté
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-500">
            © {currentYear} VulgaTechAfrique. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-500">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-purple-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
            Innovons ensemble
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
