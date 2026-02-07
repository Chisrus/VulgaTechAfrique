import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, Counter } from "./Animations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container-modern relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <AnimatedSection animation="fadeIn" delay={0}>
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Révolution EdTech Africaine • 2025
            </span>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Transformons l'<span className="text-indigo-600">Afrique</span> par la{" "}
              <span className="text-purple-600">technologie</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Donnons à chaque africain les clés du numérique. De la robotique à l'IA, 
              des villages aux métropoles, formons la prochaine génération d'innovateurs.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="slideUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-base font-medium transition-colors"
              >
                <a href="/cours">
                  <Target className="w-5 h-5 mr-2" />
                  Lancer ma formation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg text-base font-medium transition-colors"
              >
                <a href="https://t.me/VulgaTechbot" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Essayer le Bot IA
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="slideUp" delay={0.8}>
            <div className="grid grid-cols-3 gap-8 pt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <Counter from={0} to={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Langues africaines</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  <Counter from={0} to={54} />
                </div>
                <div className="text-sm text-gray-600">Pays couverts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <Counter from={0} to={1000000} suffix="M+" />
                </div>
                <div className="text-sm text-gray-600">Apprenants</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
