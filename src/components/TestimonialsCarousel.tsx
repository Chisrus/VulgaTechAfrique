import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Grâce à VulgaTech, mon fils au village apprend Python comme les enfants de la capitale. La distance n'est plus une barrière.",
    author: "Aminata K.",
    role: "Mère de famille",
    location: "Région de Ségou, Mali"
  },
  {
    quote: "Je suis sourd de naissance. Avec les vidéos en langue des signes et les textes détaillés, j'ai enfin accès à l'apprentissage de l'IA.",
    author: "Moussa D.",
    role: "Étudiant autodidacte",
    location: "Dakar, Sénégal"
  },
  {
    quote: "Le chatbot répond dans ma langue maternelle, le Bambara. C'est incroyable de pouvoir poser des questions techniques et comprendre les réponses.",
    author: "Fatoumata T.",
    role: "Enseignante",
    location: "Bamako, Mali"
  },
  {
    quote: "Sans diplôme formel, je pensais que la robotique n'était pas pour moi. VulgaTech m'a prouvé le contraire.",
    author: "Emmanuel O.",
    role: "Artisan reconverti",
    location: "Lagos, Nigeria"
  },
  {
    quote: "Le support hors-ligne me permet d'apprendre même quand la connexion internet est instable dans notre village.",
    author: "Adama S.",
    role: "Jeune entrepreneur",
    location: "Zone rurale, Burkina Faso"
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            Témoignages
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Ils ont{" "}
            <span className="text-gradient-primary">transformé</span> leur avenir
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-xl">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-foreground/90 mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full bg-background shadow-lg border-border/50 hover:bg-secondary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full bg-background shadow-lg border-border/50 hover:bg-secondary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
