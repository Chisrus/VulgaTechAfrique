import { Button } from "@/components/ui/button";
import { Bot, Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Robo<span className="text-gradient-primary">Learn</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              Comment ça marche
            </a>
            <a href="#platforms" className="text-muted-foreground hover:text-primary transition-colors">
              Plateformes
            </a>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span className="text-sm">FR</span>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button variant="hero" size="sm">
              Commencer gratuitement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                Comment ça marche
              </a>
              <a href="#platforms" className="text-muted-foreground hover:text-primary transition-colors">
                Plateformes
              </a>
              <div className="flex gap-3 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Connexion
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Commencer
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
