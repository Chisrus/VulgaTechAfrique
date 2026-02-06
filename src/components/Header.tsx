import { Button } from "@/components/ui/button";
import { Menu, X, Globe, LogIn, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

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

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with Slogan */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">VT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-semibold text-foreground tracking-tight leading-tight">
                  VulgaTech<span className="text-primary">Afrique</span>
                </span>
                <span className="hidden sm:block text-[10px] text-muted-foreground font-medium tracking-wide">
                  La tech pour tous, partout
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Accueil
              </a>
              <a 
                href="/cours" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Cours
              </a>
              <a 
                href="/articles" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Articles
              </a>
              <a 
                href="/inclusion" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Inclusion
              </a>
              <a 
                href="/a-propos" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                À propos
              </a>
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                <Globe className="w-4 h-4" />
                FR
              </button>
              
              {!loading && (
                <>
                  {user ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2 border-border hover:border-primary/50">
                          <User className="w-4 h-4" />
                          Mon compte
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                        <DropdownMenuItem 
                          onClick={() => navigate('/profil')} 
                          className="cursor-pointer"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Mon profil
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-muted-foreground text-xs">
                          {user.email}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSignOut} className="text-destructive cursor-pointer">
                          <LogOut className="w-4 h-4 mr-2" />
                          Se déconnecter
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <>
                      <Button 
                        variant="ghost"
                        onClick={() => openAuth('login')}
                        className="text-muted-foreground hover:text-foreground gap-2"
                      >
                        <LogIn className="w-4 h-4" />
                        Connexion
                      </Button>
                      <Button 
                        onClick={() => openAuth('signup')}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-10 px-5 shadow-lg shadow-primary/20"
                      >
                        S'inscrire
                      </Button>
                    </>
                  )}
                </>
              )}
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
                <a 
                  href="/" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
                >
                  Accueil
                </a>
                <a 
                  href="/cours" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
                >
                  Cours
                </a>
                <a 
                  href="/articles" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
                >
                  Articles
                </a>
                <a 
                  href="/inclusion" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
                >
                  Inclusion
                </a>
                <a 
                  href="/a-propos" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 text-left font-medium"
                >
                  À propos
                </a>
                
                <div className="pt-6 mt-4 border-t border-border/50 space-y-3">
                  {!loading && (
                    <>
                      {user ? (
                        <>
                          <p className="text-sm text-muted-foreground px-1">{user.email}</p>
                          <Button 
                            variant="outline"
                            size="lg"
                            onClick={handleSignOut}
                            className="w-full gap-2 h-12 border-destructive/50 text-destructive hover:bg-destructive/10"
                          >
                            <LogOut className="w-5 h-5" />
                            Se déconnecter
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            variant="outline"
                            size="lg"
                            onClick={() => openAuth('login')}
                            className="w-full gap-2 h-12 border-border"
                          >
                            <LogIn className="w-5 h-5" />
                            Connexion
                          </Button>
                          <Button 
                            size="lg"
                            onClick={() => openAuth('signup')}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12"
                          >
                            S'inscrire gratuitement
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        defaultMode={authMode}
      />
    </>
  );
};

export default Header;
