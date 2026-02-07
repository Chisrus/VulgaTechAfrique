import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, User, LogOut, Linkedin } from "lucide-react";
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
      setScrolled(window.scrollY > 10);
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
    { name: "Formations", href: "/cours" },
    { name: "Articles", href: "/articles" },
    { name: "À propos", href: "/a-propos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container-modern">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">VulgaTech</span>
              <div className="text-xs text-amber-600 font-medium">
                Education Technologique Africaine
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) 
                    ? "text-amber-600 bg-amber-50" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-amber-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              <a 
                href="https://www.linkedin.com/company/vulgatechafrique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
            
            <Button 
              asChild
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              <a 
                href="https://t.me/VulgaTechbot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Communauté</span>
              </a>
            </Button>

            {user ? (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                asChild
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
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
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href) 
                      ? "text-amber-600 bg-amber-50" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-amber-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-amber-200 space-y-3">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 w-full justify-start"
                >
                  <a 
                    href="https://www.linkedin.com/company/vulgatechafrique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 w-full justify-start"
                >
                  <a 
                    href="https://t.me/VulgaTechbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Communauté</span>
                  </a>
                </Button>

                {user ? (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleSignOut}
                    className="text-gray-600 hover:text-gray-900 w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Déconnexion</span>
                  </Button>
                ) : (
                  <Button 
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white w-full"
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
