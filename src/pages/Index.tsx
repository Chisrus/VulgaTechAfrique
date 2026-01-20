import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlatformsSection from "@/components/PlatformsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RobotSplashScreen from "@/components/RobotSplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showSplash && <RobotSplashScreen onComplete={handleSplashComplete} />}
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PlatformsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
