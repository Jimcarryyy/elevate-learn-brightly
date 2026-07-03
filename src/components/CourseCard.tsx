import { Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Course } from "@/data/courses";

type CourseCardProps = Pick<
  Course,
  | "slug"
  | "title"
  | "instructor"
  | "image"
  | "rating"
  | "students"
  | "duration"
  | "price"
  | "category"
  | "level"
  | "badge"
>;

const CourseCard = ({
  slug,
  title,
  instructor,
  image,
  rating,
  students,
  duration,
  price,
  category,
  level,
  badge,
}: CourseCardProps) => {
  return (
    <Link to={`/course/${slug}`} className="group block h-full">
      <Card className="card-elevated h-full overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
              {badge}
            </Badge>
          )}
          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            <Badge variant="secondary" className="bg-background/90 text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className="bg-background/90 text-xs">
              {level}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className="mb-1 line-clamp-2 font-semibold text-foreground group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">by {instructor}</p>

          <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">{rating}</span>
              <span>({students.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-foreground">${price}</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
