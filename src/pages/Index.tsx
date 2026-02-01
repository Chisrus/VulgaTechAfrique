import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InclusionSection from "@/components/InclusionSection";
import PlatformsSection from "@/components/PlatformsSection";
import CoursesSection from "@/components/CoursesSection";
import ArticlesSection from "@/components/ArticlesSection";
import LanguagesSection from "@/components/LanguagesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SignupCTASection from "@/components/SignupCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <InclusionSection />
        <PlatformsSection />
        <CoursesSection />
        <ArticlesSection />
        <LanguagesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsCarousel />
        <SignupCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
