
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="gradient-text">Unlock the</span>
              <br />
              <span className="text-gray-900">Future of</span>
              <br />
              <span className="gradient-text">Learning</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join thousands of learners and creators on Elevate. Master new skills, 
              build your expertise, and transform your career with our premium courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses" className="btn-primary group">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link to="/instructors" className="btn-secondary group">
                <PlayCircle className="mr-2 h-5 w-5" />
                Become an Instructor
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-gray-600">Active Learners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">1.2K+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">15K+</div>
                <div className="text-gray-600">Courses Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600"
                  alt="Student learning online"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Course Card */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-pulse-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">JavaScript Mastery</div>
                    <div className="text-sm text-gray-600">4.9 ★ (2.1k reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
