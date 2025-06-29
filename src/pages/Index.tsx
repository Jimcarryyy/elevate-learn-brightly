
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CoursesShowcase from '../components/CoursesShowcase';
import InstructorHub from '../components/InstructorHub';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CoursesShowcase />
        <InstructorHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
