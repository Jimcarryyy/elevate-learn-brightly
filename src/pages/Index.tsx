import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureBlocks from "@/components/FeatureBlocks";
import CoursesShowcase from "@/components/CoursesShowcase";
import CreatorCTA from "@/components/CreatorCTA";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle(
    "Elevate — Online courses for developers and designers",
    "Structured courses, progress tracking, and creator tools. Elevate helps learners build skills and instructors reach students worldwide."
  );

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureBlocks />
        <CoursesShowcase />
        <CreatorCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
