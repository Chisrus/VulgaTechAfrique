import { MessageCircle, Send, Twitter, Linkedin, Github, Heart } from "lucide-react";

const TELEGRAM_BOT_USERNAME = "VulgaTechbot";
const WHATSAPP_NUMBER = "+33123456789";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold">VT</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground tracking-tight">
                VulgaTech<span className="text-primary">Afrique</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Démocratiser la robotique et l'IA pour tous en Afrique. Accessible, gratuit, multilingue.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/vulgatechafrique" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-base">Plateforme</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cours</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Projets</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Communauté</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-base">Ressources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutoriels vidéo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-base">Nous rejoindre</h4>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                WhatsApp
              </a>
              <a 
                href={`https://t.me/${TELEGRAM_BOT_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-colors">
                  <Send className="w-4 h-4 text-[#0088cc]" />
                </div>
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left flex items-center gap-1.5">
            © 2024 VulgaTechAfrique. Fait avec <Heart className="w-4 h-4 text-accent fill-accent" /> en Afrique.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
