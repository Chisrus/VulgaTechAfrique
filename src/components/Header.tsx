import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Send } from "lucide-react";
import { useState } from "react";

// Configuration
const TELEGRAM_BOT_USERNAME = "VulgaTechAfriqueBot";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm">VT</span>
            </div>
            <span className="font-display text-base sm:text-lg font-semibold text-foreground tracking-tight">
              VulgaTech<span className="text-primary">Afrique</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Comment ça marche
            </button>
            <button 
              onClick={() => handleNavClick('platforms')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Plateformes
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              FR
            </button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5">
              <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Send className="w-3.5 h-3.5" />
                Commencer
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => handleNavClick('features')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 text-left"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 text-left"
              >
                Comment ça marche
              </button>
              <button 
                onClick={() => handleNavClick('platforms')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 text-left"
              >
                Plateformes
              </button>
              <div className="pt-4 mt-2 border-t border-border/50">
                <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <Send className="w-4 h-4" />
                    Commencer sur Telegram
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
