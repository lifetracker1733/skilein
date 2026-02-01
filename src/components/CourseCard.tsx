import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Course, Category } from "@/data/mockCourses";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const tagColors: Record<Category, string> = {
  Finance: "bg-tag-finance/20 text-tag-finance border-tag-finance/30",
  Web3: "bg-tag-web3/20 text-tag-web3 border-tag-web3/30",
  Skill: "bg-tag-skill/20 text-tag-skill border-tag-skill/30",
  Crypto: "bg-tag-crypto/20 text-tag-crypto border-tag-crypto/30",
};

const CourseCard = ({ course, featured = false }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl card-glow ${featured ? 'h-full' : ''}`}>
        {/* Background Image with Gradient Overlay */}
        <AspectRatio ratio={featured ? 4 / 5 : 16 / 10}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="h-full w-full object-cover img-gritty transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
          {/* Category Tag */}
          <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${tagColors[course.category]}`}>
            {course.category}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
            {course.title}
          </h3>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm font-medium">
              {course.instructor}
            </span>
            <span className={`font-bold ${course.price ? 'text-white' : 'text-tag-skill'}`}>
              {course.price ? `$${course.price}` : 'Free'}
            </span>
          </div>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none z-30" />
      </div>
    </Link>
  );
};

export default CourseCard;
