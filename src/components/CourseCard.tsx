import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Course, Category } from "@/data/mockCourses";

interface CourseCardProps {
  course: Course;
}

const categoryStyles: Record<Category, { bg: string; text: string }> = {
  Freelancing: { bg: "bg-category-freelancing/10", text: "text-category-freelancing" },
  "Stock Trading": { bg: "bg-category-stocks/10", text: "text-category-stocks" },
  Crypto: { bg: "bg-category-crypto/10", text: "text-category-crypto" },
  Bonds: { bg: "bg-category-bonds/10", text: "text-category-bonds" },
};

const CourseCard = ({ course }: CourseCardProps) => {
  const categoryStyle = categoryStyles[course.category];

  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className="glass-card glass-card-hover relative overflow-hidden">
        {/* Image with gradient fade */}
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
            <img
              src={course.thumbnail_url}
              alt={course.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          {/* Category Badge */}
          <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text} backdrop-blur-sm border border-current/20`}>
            {course.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1 tracking-tight group-hover:text-accent transition-colors">
            {course.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 font-medium">
            {course.description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground font-medium">
              {course.instructor}
            </span>
            <span className={`text-sm font-bold ${course.price ? 'text-foreground' : 'text-category-freelancing'}`}>
              {course.price ? `$${course.price}` : 'Free'}
            </span>
          </div>
        </div>

        {/* Subtle inner glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
             style={{ boxShadow: 'inset 0 0 60px -20px rgba(255,255,255,0.1)' }} />
      </div>
    </Link>
  );
};

export default CourseCard;
