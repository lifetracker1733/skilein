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
      <div className={`relative w-full overflow-hidden rounded-xl cursor-pointer border border-white/10 bg-[#050505] ${featured ? 'aspect-[4/5]' : 'aspect-video'}`}>
        {/* Background Image */}
        {!imageError ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
            <span className="text-white/50 text-center font-medium">{course.title}</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

        {/* Content - Bottom Left */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          {/* Category Tag */}
          <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold border mb-2 ${tagColors[course.category]}`}>
            {course.category}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
            {course.title}
          </h3>
          
          {/* Instructor */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
            {course.instructor}
          </p>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none z-30" />
      </div>
    </Link>
  );
};

export default CourseCard;
