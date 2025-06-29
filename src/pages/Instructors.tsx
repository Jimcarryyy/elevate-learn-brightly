
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Users, Award, Play } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Frontend Development Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b39ba7e0?auto=format&fit=crop&w=400&h=400',
      rating: 4.9,
      students: 15420,
      courses: 8,
      specialties: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      bio: 'Former Google engineer with 10+ years of experience building scalable web applications.'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      title: 'Data Science & AI Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400',
      rating: 4.8,
      students: 12350,
      courses: 6,
      specialties: ['Python', 'Machine Learning', 'Statistics', 'TensorFlow'],
      bio: 'PhD in Computer Science, published researcher, and former Amazon ML engineer.'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'UI/UX Design Master',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
      rating: 4.9,
      students: 9840,
      courses: 5,
      specialties: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
      bio: 'Lead Designer at Spotify, creating user experiences that delight millions of users.'
    },
    {
      id: '4',
      name: 'James Wilson',
      title: 'Backend Architecture Guru',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
      rating: 4.7,
      students: 8920,
      courses: 7,
      specialties: ['Node.js', 'AWS', 'Docker', 'Microservices'],
      bio: 'Senior architect at Netflix, scaling systems to handle billions of requests.'
    },
    {
      id: '5',
      name: 'Lisa Park',
      title: 'Mobile Development Expert',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&h=400',
      rating: 4.8,
      students: 7650,
      courses: 9,
      specialties: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      bio: 'iOS team lead at Uber, passionate about creating seamless mobile experiences.'
    },
    {
      id: '6',
      name: 'Robert Kim',
      title: 'Full Stack Mentor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400',
      rating: 4.9,
      students: 11200,
      courses: 12,
      specialties: ['JavaScript', 'Python', 'React', 'Django'],
      bio: 'Serial entrepreneur and coding bootcamp founder, helping thousands launch tech careers.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Meet Our Instructors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn from industry experts who have worked at top companies and built products used by millions.
            </p>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <div
                  key={instructor.id}
                  className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Profile Image */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{instructor.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{instructor.bio}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-bold text-gray-900">{instructor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Users className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-bold text-gray-900">{instructor.students.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-600">Students</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Play className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-bold text-gray-900">{instructor.courses}</span>
                      </div>
                      <p className="text-xs text-gray-600">Courses</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-gray-500 mb-2">SPECIALIZES IN</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-glow">
                    View Courses
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become Instructor CTA */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
              Share Your Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of world-class instructors and help shape the future of online learning.
            </p>
            <button className="btn-primary">
              Become an Instructor
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Instructors;
