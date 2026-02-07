import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, User, LogOut, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    handleScroll();
    checkUser();

    window.addEventListener("scroll", handleScroll);
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la déconnexion",
        variant: "destructive",
      });
    }
  };

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Cours", href: "/cours" },
    { name: "Articles", href: "/articles" },
    { name: "À propos", href: "/a-propos" },
    { name: "Inclusion", href: "/inclusion" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-lg shadow-indigo-500/10" 
        : "bg-transparent"
    }`}>
      <div className="container-modern">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                VulgaTech
              </span>
              <div className="text-xs text-muted-foreground font-medium">
                Révolution EdTech
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="btn-outline group"
            >
              <a 
                href="https://t.me/VulgaTechbot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Bot IA</span>
              </a>
            </Button>

            {user ? (
              <div className="flex items-center space-x-2">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="btn-ghost"
                >
                  <Link to="/profil" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span>Profil</span>
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                  className="btn-ghost"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                asChild
                size="sm"
                className="btn-primary"
              >
                <Link to="/profil" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Connexion</span>
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 rounded-xl hover:bg-indigo-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-indigo-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-indigo-100 space-y-3">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="btn-outline w-full"
                >
                  <a 
                    href="https://t.me/VulgaTechbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Bot IA</span>
                  </a>
                </Button>

                {user ? (
                  <div className="space-y-2">
                    <Button 
                      asChild
                      variant="ghost" 
                      size="sm"
                      className="btn-ghost w-full"
                    >
                      <Link to="/profil" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Profil</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleSignOut}
                      className="btn-ghost w-full flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Déconnexion</span>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    asChild
                    size="sm"
                    className="btn-primary w-full"
                  >
                    <Link to="/profil" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Connexion</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
