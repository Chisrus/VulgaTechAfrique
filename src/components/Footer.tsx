import { Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-sm">VT</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground tracking-tight">
                VulgaTech<span className="text-primary">Afrique</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Démocratiser la robotique et l'IA pour tous en Afrique.<br>La Technologie au service d'une Afrique plus resiliente</br>
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
              Cours
            </a>
            <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">
              Articles
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a 
              href="https://linkedin.com/company/vulgatechafrique" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} VulgaTechAfrique. Fait avec <Heart className="w-4 h-4 text-primary fill-primary" /> en Afrique.
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
