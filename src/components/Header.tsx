import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, User, LogOut, Linkedin, Sparkles } from "lucide-react";
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
    { name: "Formations", href: "/cours" },
    { name: "Articles", href: "/articles" },
    { name: "À propos", href: "/a-propos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-xl shadow-purple-500/10" 
        : "bg-transparent"
    }`}>
      <div className="container-modern">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VulgaTech
              </span>
              <div className="text-xs text-purple-300 font-medium">
                Révolution Technologique
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.href) 
                    ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild
              variant="ghost" 
              size="sm"
              className="text-purple-300 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-300"
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
              className="text-purple-300 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-300"
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
              <div className="flex items-center space-x-2">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="text-purple-300 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-300"
                >
                  <Link to="/profil" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-300" />
                    </div>
                    <span>Profil</span>
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                  className="text-purple-300 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-300"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="lg:hidden p-2 rounded-xl hover:bg-purple-500/10 text-purple-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-purple-500/20 bg-slate-900/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href) 
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30" 
                      : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="text-purple-300 hover:text-white hover:bg-purple-500/10 w-full justify-start px-4 py-3 rounded-xl transition-all duration-300"
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
                  className="text-purple-300 hover:text-white hover:bg-purple-500/10 w-full justify-start px-4 py-3 rounded-xl transition-all duration-300"
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
                  <div className="space-y-2">
                    <Button 
                      asChild
                      variant="ghost" 
                      size="sm"
                      className="text-purple-300 hover:text-white hover:bg-purple-500/10 w-full justify-start px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      <Link to="/profil" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Profil</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleSignOut}
                      className="text-purple-300 hover:text-white hover:bg-purple-500/10 w-full justify-start px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Déconnexion</span>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
