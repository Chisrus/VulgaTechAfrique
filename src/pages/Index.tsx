import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformsSection from "@/components/PlatformsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InclusionSection from "@/components/InclusionSection";
import SignupCTASection from "@/components/SignupCTASection";
import Footer from "@/components/Footer";
import AnimatedRobots from "@/components/AnimatedRobots";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <PlatformsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <InclusionSection />
        <SignupCTASection />
        <AnimatedRobots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
