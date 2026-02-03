import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformsSection from "@/components/PlatformsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InclusionSection from "@/components/InclusionSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SignupCTASection from "@/components/SignupCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PlatformsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CoursesSection />
        <InclusionSection />
        <TestimonialsCarousel />
        <SignupCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
