
import { useState } from 'react';
import CourseCard from './CourseCard';

const CoursesShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'Data Science', 'UI/UX', 'Mobile'];

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
    }
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular courses, carefully crafted by industry experts 
            to help you master in-demand skills and advance your career.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-glow'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="btn-primary">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesShowcase;
