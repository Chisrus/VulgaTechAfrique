import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, Globe, Users, Zap, Sparkles, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, Counter } from "./Animations";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container-modern relative z-10">
        <div className="grid-featured items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <AnimatedSection animation="slideUp" delay={0}>
            <div className="max-w-2xl space-y-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Révolution EdTech Africaine • 2025</span>
              </motion.div>

              {/* Title */}
              <h1 className="hero-title text-balance">
                Transformons l'<span className="text-gradient">Afrique</span> par la{" "}
                <span className="text-gradient">technologie</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-balance">
                Donnons à chaque africain les clés du numérique. De la robotique à l'IA, 
                des villages aux métropoles, formons la prochaine génération de 
                <strong className="text-foreground"> innovateurs africains</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedSection animation="scaleIn" delay={0.3}>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base px-8 py-4"
                  >
                    <a href="/cours">
                      <Target className="w-5 h-5 mr-2" />
                      Lancer ma formation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </AnimatedSection>
                
                <AnimatedSection animation="scaleIn" delay={0.4}>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 text-base px-8 py-4"
                  >
                    <a href="https://t.me/VulgaTechbot" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Essayer le Bot IA
                    </a>
                  </Button>
                </AnimatedSection>
              </div>

              {/* Stats */}
              <AnimatedSection animation="slideUp" delay={0.5}>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      <Counter from={0} to={50} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Langues africaines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      <Counter from={0} to={54} />
                    </div>
                    <div className="text-sm text-muted-foreground">Pays couverts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      <Counter from={0} to={1000000} suffix="M+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Apprenants</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection animation="scaleIn" delay={0.3}>
            <HeroImage />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
