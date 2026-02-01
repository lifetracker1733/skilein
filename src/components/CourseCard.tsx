import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Course, Category } from "@/data/mockCourses";

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<Category, string> = {
  Freelancing: "bg-category-freelancing",
  "Stock Trading": "bg-category-stocks",
  Crypto: "bg-category-crypto",
  Bonds: "bg-category-bonds",
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={course.thumbnail_url}
              alt={course.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          {/* Category Badge */}
          <Badge 
            className={`absolute top-3 right-3 ${categoryColors[course.category]} text-white border-0`}
          >
            {course.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {course.description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              by {course.instructor}
            </span>
            <span className={`font-bold ${course.price ? 'text-foreground' : 'text-category-freelancing'}`}>
              {course.price ? `$${course.price}` : 'Free'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
