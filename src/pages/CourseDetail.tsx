import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart, CheckCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import CopyButton from "@/components/CopyButton";
import AppLinkBadge from "@/components/AppLinkBadge";
import CourseCard from "@/components/CourseCard";
import { getCourseById, getRelatedCourses, type Category } from "@/data/mockCourses";

const categoryColors: Record<Category, string> = {
  Freelancing: "bg-category-freelancing",
  "Stock Trading": "bg-category-stocks",
  Crypto: "bg-category-crypto",
  Bonds: "bg-category-bonds",
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
            <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="gradient-primary text-white">
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

  const currentLesson = course.lessons[0]; // Show first lesson by default

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Course Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={`${categoryColors[course.category]} text-white border-0`}>
                  {course.category}
                </Badge>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <BarChart className="h-4 w-4" />
                  {course.level}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-muted-foreground">by <strong className="text-foreground">{course.instructor}</strong></span>
                <span className={`text-2xl font-bold ${course.price ? 'text-foreground' : 'text-category-freelancing'}`}>
                  {course.price ? `$${course.price}` : 'Free'}
                </span>
              </div>

              <Button 
                size="lg" 
                className="gradient-primary gradient-primary-hover text-white rounded-full px-8 py-6 text-lg font-semibold"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </div>

            {/* Course Thumbnail */}
            <div className="w-full lg:w-96 shrink-0">
              <img
                src={course.thumbnail_url}
                alt={course.title}
                className="w-full aspect-video object-cover rounded-xl border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-category-freelancing shrink-0 mt-0.5" />
                <span className="text-foreground">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lesson Section */}
      {currentLesson && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Video Player */}
              <VideoPlayer videoUrl={currentLesson.video_url} title={currentLesson.title} />

              {/* Lesson Info */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{currentLesson.title}</h3>
                  <Badge variant="secondary">{currentLesson.duration}</Badge>
                </div>
                <p className="text-muted-foreground mb-8">{currentLesson.description}</p>

                {/* AI Prompt Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-gradient">AI Prompt</span>
                    <Badge variant="outline" className="text-xs">Copy & Use</Badge>
                  </h4>
                  <CopyButton text={currentLesson.ai_prompt} />
                </div>

                {/* App Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Tools & Resources</h4>
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
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
