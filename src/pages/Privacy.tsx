import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, User, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Eye,
      title: "Collecte des données",
      content: "Nous collectons uniquement les informations nécessaires à votre apprentissage : nom, email, et progression dans les cours. Aucune donnée personnelle n'est vendue ou partagée avec des tiers sans votre consentement explicite."
    },
    {
      icon: Lock,
      title: "Protection des données",
      content: "Toutes vos données sont chiffrées et stockées de manière sécurisée. Nous utilisons des protocoles de sécurité industriels pour protéger votre vie privée et garantir la confidentialité de vos informations."
    },
    {
      icon: User,
      title: "Vos droits",
      content: "Vous avez le droit d'accéder, modifier ou supprimer vos données personnelles à tout moment. Contactez-nous et nous répondrons dans les 48 heures pour toute demande concernant vos informations."
    },
    {
      icon: Shield,
      title: "Sécurité",
      content: "Nous effectuons des audits de sécurité réguliers et maintenons nos systèmes à jour pour vous protéger contre les menaces émergentes. Votre sécurité est notre priorité absolue."
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
              <Shield className="w-4 h-4" />
              Confidentialité
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Votre vie privée compte
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chez VulgaTechAfrique, nous respectons votre vie privée et nous nous engageons 
              à protéger vos données personnelles avec le plus grand soin.
            </p>
          </AnimatedSection>

          {/* Privacy Sections */}
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

          {/* Commitment */}
          <AnimatedSection delay={0.5} className="mb-16">
            <div className="bg-primary/10 rounded-2xl border border-primary/20 p-8 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Notre engagement
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nous nous engageons à respecter les principes de protection des données 
                les plus stricts et à être transparents sur l'utilisation de vos informations.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-card rounded-xl p-4">
                  <div className="font-semibold text-foreground mb-1">Pas de vente</div>
                  <div className="text-muted-foreground">Vos données ne sont jamais vendues</div>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <div className="font-semibold text-foreground mb-1">Transparence</div>
                  <div className="text-muted-foreground">Vous savez toujours ce que nous collectons</div>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <div className="font-semibold text-foreground mb-1">Contrôle</div>
                  <div className="text-muted-foreground">Vous gérez vos données</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.6} className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Des questions ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour toute question sur notre politique de confidentialité
            </p>
            <Button size="lg">
              Nous contacter
            </Button>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
