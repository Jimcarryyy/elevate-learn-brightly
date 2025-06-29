
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Clock, Award, TrendingUp, Play, Star } from 'lucide-react';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete React Development Bootcamp',
      instructor: 'Sarah Johnson',
      progress: 65,
      nextLesson: 'React Hooks Deep Dive',
      totalLessons: 42,
      completedLessons: 27,
      lastAccessed: '2 hours ago'
    },
    {
      id: '2',
      title: 'Data Science with Python',
      instructor: 'Dr. Michael Chen',
      progress: 23,
      nextLesson: 'Pandas for Data Analysis',
      totalLessons: 38,
      completedLessons: 9,
      lastAccessed: '1 day ago'
    },
    {
      id: '3',
      title: 'UI/UX Design Masterclass',
      instructor: 'Emily Rodriguez',
      progress: 89,
      nextLesson: 'Final Project Review',
      totalLessons: 28,
      completedLessons: 25,
      lastAccessed: '3 hours ago'
    }
  ];

  const achievements = [
    { name: 'First Course Complete', icon: Award, earned: true },
    { name: '7-Day Streak', icon: TrendingUp, earned: true },
    { name: 'Fast Learner', icon: Clock, earned: false },
    { name: 'Course Creator', icon: BookOpen, earned: false }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Welcome back, John!
            </h1>
            <p className="text-xl text-gray-600">
              Continue your learning journey. You're doing great!
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-gray-600 text-sm">Enrolled Courses</div>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-gray-600 text-sm">Certificates Earned</div>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">47h</div>
                <div className="text-gray-600 text-sm">Learning Time</div>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-gray-600 text-sm">Day Streak</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Current Courses */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="glass-card rounded-2xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm">by {course.instructor}</p>
                        </div>
                        <span className="text-xs text-gray-500">{course.lastAccessed}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Next Lesson:</p>
                          <p className="font-medium text-gray-900">{course.nextLesson}</p>
                        </div>
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300">
                          <Play className="h-4 w-4" />
                          <span>Continue</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Learning Streak */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Learning Streak</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text mb-2">
                      12 Days
                    </div>
                    <p className="text-gray-600 text-sm mb-4">Keep it up! You're on fire 🔥</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">3 more days to unlock the "Consistent Learner" badge</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                            : 'bg-gray-200'
                        }`}>
                          <achievement.icon className={`h-4 w-4 ${achievement.earned ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <span className={`text-sm ${achievement.earned ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                          {achievement.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 rounded-lg bg-white/30 hover:bg-white/50 transition-colors duration-300">
                      Browse New Courses
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg bg-white/30 hover:bg-white/50 transition-colors duration-300">
                      View Certificates
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg bg-white/30 hover:bg-white/50 transition-colors duration-300">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
