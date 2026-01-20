import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { UserPlus, CheckCircle, ArrowRight } from 'lucide-react';
import AuthModal from './AuthModal';
import { useAuth } from '@/hooks/useAuth';

const benefits = [
  'Accès complet à tous les cours',
  'Projets pratiques guidés',
  'Communauté active d\'apprenants',
  'Certificats de complétion'
];

const SignupCTASection = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user } = useAuth();

  if (user) {
    return null; // Don't show signup CTA if user is logged in
  }

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                      <UserPlus className="w-4 h-4" />
                      Rejoignez-nous
                    </span>
                    
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      Créez votre compte gratuitement
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      Débloquez l'accès complet à notre plateforme et commencez votre parcours dans la robotique et l'IA.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4 md:min-w-[200px]">
                    <Button 
                      size="lg"
                      onClick={() => setIsAuthOpen(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 gap-2 shadow-lg shadow-primary/20"
                    >
                      S'inscrire maintenant
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => setIsAuthOpen(true)}
                      className="border-border hover:border-primary/50 h-12"
                    >
                      J'ai déjà un compte
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        defaultMode="signup"
      />
    </>
  );
};

export default SignupCTASection;
