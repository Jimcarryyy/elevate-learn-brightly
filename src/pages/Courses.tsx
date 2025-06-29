import Navigation from '../components/Navigation';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'UI/UX', 'Mobile', 'DevOps'];

  const courses = [
    {
      id: '1',
      title: 'Complete React Development Bootcamp',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600',
      rating: 4.9,
      students: 15420,
      duration: '42 hours',
      price: 89,
      category: 'Frontend',
      level: 'Intermediate',
      badge: 'Bestseller'
    },
    {
      id: '2',
      title: 'Data Science with Python',
      instructor: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600',
      rating: 4.8,
      students: 12350,
      duration: '38 hours',
      price: 79,
      category: 'Data Science',
      level: 'Advanced',
    },
    {
      id: '3',
      title: 'UI/UX Design Masterclass',
      instructor: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600',
      rating: 4.9,
      students: 9840,
      duration: '28 hours',
      price: 69,
      category: 'UI/UX',
      level: 'Beginner',
      badge: 'New'
    },
    {
      id: '4',
      title: 'Node.js Backend Development',
      instructor: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600',
      rating: 4.7,
      students: 8920,
      duration: '35 hours',
      price: 85,
      category: 'Backend',
      level: 'Intermediate',
    },
    {
      id: '5',
      title: 'Mobile App Development with React Native',
      instructor: 'Lisa Park',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600',
      rating: 4.8,
      students: 7650,
      duration: '45 hours',
      price: 95,
      category: 'Mobile',
      level: 'Advanced',
    },
    {
      id: '6',
      title: 'Advanced JavaScript Concepts',
      instructor: 'Robert Kim',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600',
      rating: 4.9,
      students: 11200,
      duration: '32 hours',
      price: 75,
      category: 'Frontend',
      level: 'Advanced',
    },
    {
      id: '7',
      title: 'Docker & Kubernetes for DevOps',
      instructor: 'Alex Martinez',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600',
      rating: 4.7,
      students: 6430,
      duration: '40 hours',
      price: 99,
      category: 'DevOps',
      level: 'Advanced',
    },
    {
      id: '8',
      title: 'Full Stack Web Development',
      instructor: 'Maria Garcia',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600',
      rating: 4.8,
      students: 13250,
      duration: '60 hours',
      price: 129,
      category: 'Frontend',
      level: 'Beginner',
      badge: 'Complete Bundle'
    }
  ];

  const filteredCourses = courses
    .filter(course => selectedCategory === 'All' || course.category === selectedCategory)
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Explore Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover thousands of courses from world-class instructors. Learn at your own pace and transform your career.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass-card border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Filters & Courses */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-glow'
                      : 'bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredCourses.length} courses
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
