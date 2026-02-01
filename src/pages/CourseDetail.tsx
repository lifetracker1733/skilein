import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart, CheckCircle, PlayCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkileBox from "@/components/SkileBox";
import CourseCard from "@/components/CourseCard";
import ImpactDashboard from "@/components/ImpactDashboard";
import HallOfFame from "@/components/HallOfFame";
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
            <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-foreground/50 mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
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
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header - Large Title Above Video */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category & Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[course.category]}`}>
              {course.category}
            </span>
            <div className="flex items-center gap-1 text-foreground/40 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1 text-foreground/40 text-xs font-medium">
              <BarChart className="h-3.5 w-3.5" />
              {course.level}
            </div>
            <span className="text-lg font-bold text-tag-skill">
              Free
            </span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            {course.title}
          </h1>

          <p className="text-lg text-foreground/50 mb-4 font-medium max-w-2xl">
            {course.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-foreground/50 font-medium">
              by <strong className="text-foreground">{course.instructor}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Video Player Section - Strict Mode */}
      {currentLesson && (
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-6">
            {/* Video Player - Full Width, Rounded, Strict Mode */}
            <div className="overflow-hidden rounded-2xl glass border border-border mb-10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`${currentLesson.video_url}?rel=0&modestbranding=1&showinfo=0&autoplay=0`}
                  title={currentLesson.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </AspectRatio>
            </div>

            {/* Lesson Info */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{currentLesson.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium glass text-foreground/60">
                  {currentLesson.duration}
                </span>
              </div>
              <p className="text-foreground/50 font-medium">{currentLesson.description}</p>
            </div>

            {/* The Skile Box - Command Center */}
            <SkileBox 
              prompt={currentLesson.ai_prompt}
              appLinks={currentLesson.app_links}
            />
          </div>
        </section>
      )}

      {/* Curriculum Section (if available) */}
      {course.curriculum && course.curriculum.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((phase, index) => (
                <div key={index} className="glass rounded-2xl overflow-hidden">
                  <div className="p-5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">
                        {phase.phase}
                      </span>
                      <h3 className="font-bold text-foreground">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    {phase.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="px-5 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors">
                        <PlayCircle className="h-4 w-4 text-foreground/40 shrink-0" />
                        <span className="text-foreground/70 text-sm font-medium">{topic}</span>
                        <ChevronRight className="h-4 w-4 text-foreground/30 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Outcomes */}
      <section className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-foreground mb-6 tracking-tight">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-tag-skill shrink-0 mt-0.5" />
                <span className="text-foreground/80 font-medium text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Dashboard - Stats Grid */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <ImpactDashboard />
        </div>
      </section>

      {/* Hall of Fame - Leaderboard */}
      <section>
        <div className="max-w-4xl mx-auto px-6">
          <HallOfFame />
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Related Courses</h2>
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
