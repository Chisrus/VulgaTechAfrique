import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { FileText, Users, AlertCircle, CheckCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Users,
      title: "Conditions d'utilisation",
      content: "En utilisant VulgaTechAfrique, vous vous engagez à respecter les autres utilisateurs et à utiliser notre plateforme à des fins éducatives. Toute utilisation abusive, frauduleuse ou illégale entraînera la suspension immédiate de votre compte."
    },
    {
      icon: FileText,
      title: "Propriété intellectuelle",
      content: "Tout le contenu des cours, articles et tutoriels est la propriété de VulgaTechAfrique. Vous pouvez utiliser ces contenus pour votre apprentissage personnel, mais toute reproduction, distribution ou utilisation commerciale sans autorisation est strictement interdite."
    },
    {
      icon: AlertCircle,
      title: "Responsabilités",
      content: "Vous êtes responsable de la sécurité de votre compte et de toutes les activités effectuées depuis celui-ci. Nous ne sommes pas responsables des pertes de données résultant d'une négligence de votre part."
    },
    {
      icon: RefreshCw,
      title: "Modifications des conditions",
      content: "Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications entreront en vigueur dès leur publication sur la plateforme. Nous vous informerons des changements importants par email."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <AnimatedSection>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 gap-2 hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Button>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Conditions Générales
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Nos règles du jeu
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pour garantir une expérience d'apprentissage positive pour tous, 
              veuillez respecter les conditions suivantes.
            </p>
          </AnimatedSection>

          {/* Terms Sections */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {sections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 0.1}>
                <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Key Rules */}
          <AnimatedSection delay={0.5} className="mb-16">
            <div className="bg-card rounded-2xl border border-border/50 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Points clés à retenir
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Respect mutuel</h4>
                    <p className="text-sm text-muted-foreground">Traitez les autres avec respect</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Usage éducatif</h4>
                    <p className="text-sm text-muted-foreground">Utilisez la plateforme pour apprendre</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pas de plagiat</h4>
                    <p className="text-sm text-muted-foreground">Respectez la propriété intellectuelle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sécurité du compte</h4>
                    <p className="text-sm text-muted-foreground">Protégez vos identifiants</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Violations */}
          <AnimatedSection delay={0.6} className="mb-16">
            <div className="bg-orange-500/10 rounded-2xl border border-orange-500/30 p-8">
              <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                Conséquences des violations
              </h2>
              <div className="text-center space-y-3">
                <p className="text-muted-foreground">
                  En cas de violation de ces conditions, nous nous réservons le droit de :
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-card rounded-xl p-4">
                    <div className="font-semibold text-foreground mb-1">Avertissement</div>
                    <div className="text-muted-foreground">Première violation mineure</div>
                  </div>
                  <div className="bg-card rounded-xl p-4">
                    <div className="font-semibold text-foreground mb-1">Suspension</div>
                    <div className="text-muted-foreground">Violation répétée ou grave</div>
                  </div>
                  <div className="bg-card rounded-xl p-4">
                    <div className="font-semibold text-foreground mb-1">Bannissement</div>
                    <div className="text-muted-foreground">Violation très grave</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.7} className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Des questions sur nos conditions ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous aider à comprendre nos règles
            </p>
            <Button size="lg">
              Contacter le support
            </Button>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
