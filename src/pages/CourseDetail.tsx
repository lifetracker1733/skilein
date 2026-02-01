import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart, CheckCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import CopyButton from "@/components/CopyButton";
import AppLinkBadge from "@/components/AppLinkBadge";
import CourseCard from "@/components/CourseCard";
import { getCourseById, getRelatedCourses, type Category } from "@/data/mockCourses";

const categoryStyles: Record<Category, { bg: string; text: string }> = {
  Freelancing: { bg: "bg-category-freelancing/10", text: "text-category-freelancing" },
  "Stock Trading": { bg: "bg-category-stocks/10", text: "text-category-stocks" },
  Crypto: { bg: "bg-category-crypto/10", text: "text-category-crypto" },
  Bonds: { bg: "bg-category-bonds/10", text: "text-category-bonds" },
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const relatedCourses = getRelatedCourses(id || "", 3);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Course Not Found</h1>
            <p className="text-muted-foreground mb-6 font-medium">The course you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
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

  const categoryStyle = categoryStyles[course.category];
  const currentLesson = course.lessons[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Course Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text} border border-current/20`}>
                  {course.category}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
                  <BarChart className="h-3.5 w-3.5" />
                  {course.level}
                </div>
              </div>

              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
                {course.title}
              </h1>

              <p className="text-base text-muted-foreground mb-6 font-medium max-w-2xl leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground font-medium">by <strong className="text-foreground">{course.instructor}</strong></span>
                <span className={`text-xl font-bold ${course.price ? 'text-foreground' : 'text-category-freelancing'}`}>
                  {course.price ? `$${course.price}` : 'Free'}
                </span>
              </div>

              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 font-semibold group"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </div>

            {/* Course Thumbnail */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="glass-card overflow-hidden">
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-10 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-foreground mb-6 tracking-tight">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-category-freelancing shrink-0 mt-0.5" />
                <span className="text-foreground font-medium text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lesson Section */}
      {currentLesson && (
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Video Player */}
              <VideoPlayer videoUrl={currentLesson.video_url} title={currentLesson.title} />

              {/* Lesson Info */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">{currentLesson.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {currentLesson.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-10 font-medium leading-relaxed">{currentLesson.description}</p>

                {/* AI Prompt Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-semibold text-foreground tracking-tight">AI Prompt</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-accent/10 text-accent border border-accent/20">
                      COPY & USE
                    </span>
                  </div>
                  <CopyButton text={currentLesson.ai_prompt} />
                </div>

                {/* App Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Tools & Resources</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentLesson.app_links.map((link) => (
                      <AppLinkBadge
                        key={link.id}
                        name={link.app_name}
                        url={link.app_url}
                        iconName={link.icon_name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Courses */}
      <section className="py-14 md:py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
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
