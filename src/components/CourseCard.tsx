import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl border border-white/5 cursor-pointer ${featured ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
        {/* Background Image with Brightness Filter */}
        {!imageError ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 h-full w-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Fallback gradient with centered title */
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
            <span className="text-white/50 text-center font-medium">{course.title}</span>
          </div>
        )}

        {/* Gradient Overlay - Bottom Focused */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Content - Bottom Positioned */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          {/* Category Tag */}
          <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold border mb-2 ${tagColors[course.category]}`}>
            {course.category}
          </div>
          
          {/* Title */}
          <h3 className="text-white font-bold text-lg leading-tight mb-1">
            {course.title}
          </h3>
          
          {/* Instructor */}
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            {course.instructor}
          </p>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none z-30" />
      </div>
    </Link>
  );
};

export default CourseCard;
