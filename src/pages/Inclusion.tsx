import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Globe, 
  Users, 
  Languages, 
  Eye, 
  HandHeart,
  Volume2,
  Wifi,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Inclusion = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
    { code: 'bm', name: 'Bambara', flag: '🇲🇱' },
    { code: 'wo', name: 'Wolof', flag: '🇸🇳' },
    { code: 'am', name: 'Amharique', flag: '🇪🇹' },
    { code: 'zu', name: 'Zulu', flag: '🇿🇦' },
  ];

  const features = [
    {
      icon: Languages,
      title: "30+ Langues Africaines",
      description: "Apprenez dans votre langue maternelle avec notre support multilingue complet.",
      color: "from-blue-500/20 to-blue-500/5 text-blue-400"
    },
    {
      icon: Volume2,
      title: "Accessibilité Audio",
      description: "Contenus audio et support pour les personnes malentendantes.",
      color: "from-green-500/20 to-green-500/5 text-green-400"
    },
    {
      icon: Wifi,
      title: "Mode Hors-Ligne",
      description: "Téléchargez les cours pour apprendre sans connexion internet.",
      color: "from-purple-500/20 to-purple-500/5 text-purple-400"
    },
    {
      icon: MapPin,
      title: "Contenus Localisés",
      description: "Exemples et études de cas adaptés au contexte africain.",
      color: "from-orange-500/20 to-orange-500/5 text-orange-400"
    }
  ];

  const stats = [
    { number: "1", label: "Langue" },
    { number: "1", label: "Pays" },
    { number: "3", label: "Apprenants" },
    { number: "100%", label: "Accessible" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HandHeart className="w-4 h-4" />
              Inclusion Numérique
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              La tech pour{" "}
              <span className="text-gradient-primary">tous</span>
              , sans exception
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chez VulgaTechAfrique, nous croyons que la technologie doit être accessible 
              à chaque africain, quel que soit son lieu de résidence, sa langue ou ses capacités.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.1} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection delay={0.2} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Notre Engagement Inclusif
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des fonctionnalités pensées pour briser toutes les barrières
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={0.3 + index * 0.1}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Language Selector */}
          <AnimatedSection delay={0.5} className="mb-16">
            <div className="bg-card rounded-2xl border border-border/50 p-8">
              <div className="text-center mb-8">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Choisissez votre langue
                </h2>
                <p className="text-muted-foreground">
                  Sélectionnez une langue pour voir comment notre plateforme s'adapte à vous
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="gap-2 justify-start"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Accessibility Features */}
          <AnimatedSection delay={0.6} className="mb-16">
            <div className="bg-primary/10 rounded-2xl border border-primary/20 p-8">
              <div className="text-center mb-8">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Accessibilité Avancée
                </h2>
                <p className="text-muted-foreground">
                  Notre plateforme est conçue pour être utilisable par tous
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Navigation clavier</h4>
                      <p className="text-sm text-muted-foreground">Accès complet sans souris</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Liseuse écran</h4>
                      <p className="text-sm text-muted-foreground">Compatible avec les lecteurs d'écran</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Contraste élevé</h4>
                      <p className="text-sm text-muted-foreground">Mode sombre et fort contraste</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Police adaptable</h4>
                      <p className="text-sm text-muted-foreground">Taille de texte personnalisable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.7} className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Rejoignez notre mission inclusive
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ensemble, rendons la technologie accessible à chaque africain, 
              du village au cœur des métropoles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Commencer à apprendre
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Devenir partenaire
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inclusion;
