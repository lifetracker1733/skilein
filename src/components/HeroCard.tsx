import { Link } from "react-router-dom";
import type { Course, Category } from "@/data/mockCourses";

interface HeroCardProps {
  course: Course;
  className?: string;
  style?: React.CSSProperties;
}

const tagColors: Record<Category, string> = {
  Finance: "bg-tag-finance/20 text-tag-finance",
  Web3: "bg-tag-web3/20 text-tag-web3",
  Skill: "bg-tag-skill/20 text-tag-skill",
  Crypto: "bg-tag-crypto/20 text-tag-crypto",
};

const HeroCard = ({ course, className = "", style }: HeroCardProps) => {
  return (
    <Link 
      to={`/course/${course.id}`} 
      className={`block group ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-2xl glass border border-white/10 w-64 card-glow">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="h-full w-full object-cover img-gritty group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold mb-2 ${tagColors[course.category]}`}>
            {course.category}
          </span>
          <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
            {course.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
