import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformsSection from "@/components/PlatformsSection";
import CoursesSection from "@/components/CoursesSection";
import ArticlesSection from "@/components/ArticlesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SignupCTASection from "@/components/SignupCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PlatformsSection />
        <CoursesSection />
        <ArticlesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SignupCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
