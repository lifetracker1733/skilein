import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkileBox from "@/components/SkileBox";
import CourseCard from "@/components/CourseCard";
import ImpactDashboard from "@/components/ImpactDashboard";
import HallOfFame from "@/components/HallOfFame";
import YouTubePlayer from "@/components/YouTubePlayer";
import PhaseSelector from "@/components/PhaseSelector";
import TopEarnerModal from "@/components/TopEarnerModal";
import { getCourseById, getRelatedCourses, type Category, type HallOfFameEntry } from "@/data/mockCourses";

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
  
  // Phase selection state
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  
  // Top Earner modal state
  const [selectedEarner, setSelectedEarner] = useState<HallOfFameEntry | null>(null);
  const [isEarnerModalOpen, setIsEarnerModalOpen] = useState(false);

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

  // Get current phase data
  const currentPhase = course.curriculum[activePhaseIndex];
  
  const handlePhaseSelect = (index: number) => {
    setActivePhaseIndex(index);
    // Scroll to video player smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleEarnerClick = (earner: HallOfFameEntry) => {
    setSelectedEarner(earner);
    setIsEarnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
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

      {/* Course Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter mb-6">
            {course.title}
          </h1>

          <p className="text-lg text-foreground/50 mb-4 font-medium max-w-2xl">
            {course.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-foreground/50 font-medium">
              by <strong className="text-foreground">{course.instructor}</strong>
            </span>
            <span className="text-sm text-foreground/40">
              {course.curriculum.length} phases
            </span>
          </div>
        </div>
      </section>

      {/* Main Content: Video + Phase Selector */}
      {currentPhase && (
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video Player Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Video Player */}
                <YouTubePlayer 
                  videoId={currentPhase.videoID} 
                  title={currentPhase.phaseTitle} 
                />

                {/* Current Phase Info */}
                <div className="glass rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary">
                      Now Playing
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-3">
                    {currentPhase.phaseTitle}
                  </h3>
                  
                  {/* Topics List */}
                  <div className="space-y-2 mt-4">
                    {currentPhase.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 text-foreground/60">
                        <CheckCircle className="h-4 w-4 text-tag-skill shrink-0" />
                        <span className="text-sm font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Skile Box */}
                <SkileBox 
                  prompt={currentPhase.ai_prompt || ""}
                  appLinks={currentPhase.app_links || []}
                />
              </div>
              
              {/* Phase Selector Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <PhaseSelector
                    phases={course.curriculum}
                    activePhaseIndex={activePhaseIndex}
                    onPhaseSelect={handlePhaseSelect}
                  />
                </div>
              </div>
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

      {/* Impact Dashboard */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <ImpactDashboard stats={course.stats} />
        </div>
      </section>

      {/* Hall of Fame - Clickable */}
      <section>
        <div className="max-w-4xl mx-auto px-6">
          <HallOfFame 
            entries={course.hall_of_fame} 
            onEarnerClick={handleEarnerClick}
          />
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
      
      {/* Top Earner Modal */}
      <TopEarnerModal
        earner={selectedEarner}
        isOpen={isEarnerModalOpen}
        onClose={() => setIsEarnerModalOpen(false)}
      />
    </div>
  );
};

export default CourseDetail;
