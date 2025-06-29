
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '2M+', label: 'Active Learners' },
    { icon: Award, value: '10K+', label: 'Courses Available' },
    { icon: Globe, value: '150+', label: 'Countries Reached' },
    { icon: Zap, value: '95%', label: 'Completion Rate' }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
      bio: 'Former VP of Engineering at Coursera, passionate about democratizing education.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b39ba7e0?auto=format&fit=crop&w=300&h=300',
      bio: 'Product leader with 12+ years experience at Google, focused on user-centric design.'
    },
    {
      name: 'David Chen',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
      bio: 'Technical architect who scaled platforms at Netflix and Spotify.'
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
      bio: 'Former curriculum director at Khan Academy, ensuring quality learning experiences.'
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
              About Elevate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make world-class education accessible to everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Mission Story */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2020, Elevate was born from a simple belief: that everyone deserves access to 
                high-quality education, regardless of their location, background, or circumstances. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We started with a vision to connect passionate learners with world-class instructors, 
                creating an ecosystem where knowledge flows freely and careers are transformed through 
                the power of learning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, millions of learners across 150+ countries trust Elevate to advance their careers, 
                learn new skills, and achieve their dreams. We're just getting started.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
              Impact by Numbers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a diverse team of educators, engineers, and dreamers united by our passion for learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Elevate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility First</h3>
                <p className="text-gray-600">
                  Quality education should be available to everyone, regardless of their background or circumstances.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in content quality, platform performance, and user experience.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to create better learning experiences and outcomes for our community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
