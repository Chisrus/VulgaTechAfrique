import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, Counter } from "./Animations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="container-modern relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <AnimatedSection animation="fadeIn" delay={0}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Révolution Technologique Africaine</span>
            </motion.div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              L'<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Afrique</span> réinvente la{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">technologie</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transformons le continent africain à travers l'innovation technologique. 
              De l'intelligence artificielle à la robotique, formons la prochaine génération de leaders technologiques.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="slideUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <a href="/cours">
                  <Target className="w-5 h-5 mr-2" />
                  Commencer l'aventure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-purple-400/50 hover:border-purple-400 text-purple-300 hover:text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <a href="https://t.me/VulgaTechbot" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rejoindre la communauté
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
