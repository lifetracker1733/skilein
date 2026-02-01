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
      <div className={`relative w-full overflow-hidden rounded-2xl border border-white/5 cursor-pointer ${featured ? 'aspect-[4/5]' : 'aspect-video'}`}>
        {/* Background Image with Brightness Filter */}
        {!imageError ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8]"
          />
        ) : (
          /* Fallback gradient with centered title */
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
            <span className="text-white/50 text-center font-medium">{course.title}</span>
          </div>
        )}

        {/* Gradient Overlay - Bottom Focused */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content - Bottom Positioned with hover lift effect */}
        <div className="absolute bottom-5 left-5 right-5 z-20 transition-transform duration-300 group-hover:-translate-y-1">
          {/* Category Tag */}
          <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold border mb-3 ${tagColors[course.category]}`}>
            {course.category}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white leading-tight mb-1">
            {course.title}
          </h3>
          
          {/* Instructor */}
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
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
