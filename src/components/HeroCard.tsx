import { useState } from "react";
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
  const [imageError, setImageError] = useState(false);

  return (
    <Link 
      to={`/course/${course.id}`} 
      className={`block group ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 w-64 h-44">
        {/* Background Image */}
        {!imageError ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 h-full w-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold mb-1.5 ${tagColors[course.category]}`}>
            {course.category}
          </span>
          <h4 className="text-sm font-bold text-white leading-tight line-clamp-2">
            {course.title}
          </h4>
          <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">
            {course.instructor}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
