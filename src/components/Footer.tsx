import { MessageCircle, Send, Twitter, Linkedin, Github } from "lucide-react";

// Configuration
const TELEGRAM_BOT_USERNAME = "VulgaTechbot";
const WHATSAPP_NUMBER = "+33123456789";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">VT</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground tracking-tight">
                VulgaTech<span className="text-primary">Afrique</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Démocratiser la robotique et l'IA pour tous en Afrique.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 sm:mb-4 text-sm">Plateforme</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cours</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projets</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Communauté</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 sm:mb-4 text-sm">Ressources</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tutoriels vidéo</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3 sm:mb-4 text-sm">Nous rejoindre</h4>
            <div className="space-y-2 sm:space-y-2.5">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href={`https://t.me/${TELEGRAM_BOT_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2024 VulgaTechAfrique. Tous droits réservés.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
