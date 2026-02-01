import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart, CheckCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkileBox from "@/components/SkileBox";
import CourseCard from "@/components/CourseCard";
import { getCourseById, getRelatedCourses, type Category } from "@/data/mockCourses";

const tagColors: Record<Category, string> = {
  Finance: "bg-tag-finance/20 text-tag-finance border-tag-finance/30",
  Web3: "bg-tag-web3/20 text-tag-web3 border-tag-web3/30",
  Skill: "bg-tag-skill/20 text-tag-skill border-tag-skill/30",
  Crypto: "bg-tag-crypto/20 text-tag-crypto border-tag-crypto/30",
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const relatedCourses = getRelatedCourses(id || "", 3);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
            <p className="text-white/50 mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentLesson = course.lessons[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Course Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[course.category]}`}>
                  {course.category}
                </span>
                <div className="flex items-center gap-1 text-white/40 text-xs font-medium">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1 text-white/40 text-xs font-medium">
                  <BarChart className="h-3.5 w-3.5" />
                  {course.level}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                {course.title}
              </h1>

              <p className="text-lg text-white/50 mb-6 font-medium max-w-xl">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm text-white/50 font-medium">
                  by <strong className="text-white">{course.instructor}</strong>
                </span>
                <span className={`text-2xl font-bold ${course.price ? 'text-white' : 'text-tag-skill'}`}>
                  {course.price ? `$${course.price}` : 'Free'}
                </span>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 font-semibold group"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </div>

            {/* Course Thumbnail */}
            <div className="relative overflow-hidden rounded-2xl glass border border-white/10">
              <img
                src={course.thumbnail_url}
                alt={course.title}
                className="w-full aspect-video object-cover img-gritty"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-white mb-6 tracking-tight">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-tag-skill shrink-0 mt-0.5" />
                <span className="text-white/80 font-medium text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lesson Section */}
      {currentLesson && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Video Player - Full Width, Rounded */}
            <div className="overflow-hidden rounded-2xl glass border border-white/10 mb-10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={currentLesson.video_url}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </AspectRatio>
            </div>

            {/* Lesson Info */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">{currentLesson.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium glass text-white/60">
                  {currentLesson.duration}
                </span>
              </div>
              <p className="text-white/50 font-medium">{currentLesson.description}</p>
            </div>

            {/* The Skile Box - Command Center */}
            <SkileBox 
              prompt={currentLesson.ai_prompt}
              appLinks={currentLesson.app_links}
            />
          </div>
        </section>
      )}

      {/* Related Courses */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
