import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Globe, 
  Linkedin, 
  Mail, 
  Send, 
  CheckCircle,
  Lightbulb,
  HandHeart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const values = [
  {
    icon: HandHeart,
    title: "Inclusion",
    description: "Chaque africain, qu'il soit en ville ou au village, mérite d'accéder au savoir technologique.",
    color: "from-green-500/20 to-green-500/5 text-green-400"
  },
  {
    icon: Globe,
    title: "Accessibilité",
    description: "Plus de 30 langues africaines, support pour les sourds et malentendants, contenus hors-ligne.",
    color: "from-blue-500/20 to-blue-500/5 text-blue-400"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Utilisation de l'IA pour personnaliser l'apprentissage et traduire automatiquement les contenus.",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400"
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Un réseau d'apprenants et de mentors à travers tout le continent africain.",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400"
  },
];

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Notre Mission
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Démocratiser la tech en{" "}
                <span className="text-gradient-primary">Afrique</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                VulgaTechAfrique est né d'une conviction simple : la technologie appartient à tous. 
                Notre mission est de rendre la robotique et l'intelligence artificielle accessibles 
                à chaque africain, sans exception.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-4">Notre Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Fournir une éducation technologique de qualité à tous les africains, 
                    en brisant les barrières géographiques, linguistiques et économiques. 
                    Nous croyons que chaque villageois, chaque personne sourde ou malentendante, 
                    chaque autodidacte mérite d'apprendre la robotique et l'IA dans sa langue maternelle.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-4">Notre Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Un continent africain où la maîtrise technologique n'est plus un privilège 
                    mais un droit. D'ici 2030, nous visons à former 1 million d'africains 
                    à la robotique et à l'IA, avec un accent particulier sur les communautés 
                    rurales et les personnes en situation de handicap.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Nos Valeurs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident chacune de nos actions
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 text-center h-full hover:border-primary/30 transition-colors">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-5`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Mail className="w-4 h-4" />
                  Contact
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Contactez-nous
                </h2>
                <p className="text-muted-foreground">
                  Une question, une suggestion ou un partenariat ? Écrivez-nous !
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border/50">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message envoyé !
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.2} className="mt-10 text-center">
                <p className="text-muted-foreground mb-4">Suivez-nous sur les réseaux</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://linkedin.com/company/vulgatechafrique" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
