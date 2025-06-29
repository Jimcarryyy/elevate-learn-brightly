
import { Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  category: string;
  level: string;
  badge?: string;
}

const CourseCard = ({ 
  id, 
  title, 
  instructor, 
  image, 
  rating, 
  students, 
  duration, 
  price, 
  category,
  level,
  badge 
}: CourseCardProps) => {
  return (
    <Link to={`/course/${id}`} className="group">
      <div className="glass-card rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-glow">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
          
          {/* Category & Level */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="bg-white/80 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
            <span className="bg-white/80 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {level}
            </span>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="transform scale-0 group-hover:scale-100 transition-all duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 font-medium text-gray-900">
                View Course
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4">by {instructor}</p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
              <span>({students.toLocaleString()})</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Price & Enrollment */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              ${price}
            </div>
            
            <div className="flex items-center space-x-1 text-gray-500">
              <Users className="h-4 w-4" />
              <span className="text-sm">{students.toLocaleString()} enrolled</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
