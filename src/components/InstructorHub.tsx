
import { Link } from 'react-router-dom';
import { Users, DollarSign, Award, TrendingUp } from 'lucide-react';

const InstructorHub = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Learners Reached',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      value: '$2.5M+',
      label: 'Instructor Earnings',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: '4.8/5',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'React Instructor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e8b400?auto=format&fit=crop&w=150&h=150',
      quote: 'Teaching on Elevate has transformed my career. I\'ve reached thousands of students and built a sustainable income.',
      earnings: '$15K/month'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Data Science Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
      quote: 'The platform provides everything I need to create engaging courses. The community support is outstanding.',
      earnings: '$22K/month'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      quote: 'I love the flexibility and tools Elevate provides. It\'s the perfect platform for passionate educators.',
      earnings: '$8K/month'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Become an Instructor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your expertise with millions of learners worldwide. Join our community of 
            successful instructors and build a thriving online teaching business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-green-600 font-bold text-sm">{testimonial.earnings}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card rounded-3xl p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            Ready to Start Teaching?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of instructors who are already earning while sharing their knowledge. 
            It's free to get started, and we provide all the tools you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/instructor-signup" className="btn-primary">
              Launch Your Course
            </Link>
            <Link to="/instructor-guide" className="btn-secondary">
              Learn More
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Marketing tools included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorHub;
