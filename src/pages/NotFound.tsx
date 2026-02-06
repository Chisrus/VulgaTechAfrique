import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, FileText, Heart, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: BookOpen, label: "Cours", href: "/cours" },
    { icon: FileText, label: "Articles", href: "/articles" },
    { icon: Heart, label: "Inclusion", href: "/inclusion" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-primary/20">
              404
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page introuvable
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          {/* Search suggestion */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <Search className="w-5 h-5" />
              <span>Essayez de rechercher ce que vous cherchez :</span>
            </div>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto gap-2"
              onClick={() => navigate('/cours')}
            >
              <BookOpen className="w-4 h-4" />
              Explorer les cours
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Pages populaires
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(link.href)}
                  className="gap-2 hover:bg-primary/10"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => navigate(-1)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la page précédente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
