import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Send, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const TELEGRAM_BOT_USERNAME = "VulgaTechbot";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <span className="text-primary-foreground font-bold text-sm sm:text-base">VT</span>
            </div>
            <span className="font-display text-lg sm:text-xl font-semibold text-foreground tracking-tight">
              VulgaTech<span className="text-primary">Afrique</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Comment ça marche
            </button>
            <button 
              onClick={() => handleNavClick('platforms')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Plateformes
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              <Globe className="w-4 h-4" />
              FR
            </button>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-10 px-5 shadow-lg shadow-primary/20"
            >
              <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
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
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => handleNavClick('features')} 
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')} 
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
              >
                Comment ça marche
              </button>
              <button 
                onClick={() => handleNavClick('platforms')} 
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
              >
                Plateformes
              </button>
              <div className="pt-6 mt-4 border-t border-border/50">
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12"
                >
                  <a href={`https://t.me/${TELEGRAM_BOT_USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5" />
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
