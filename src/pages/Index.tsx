import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import HeroCard from "@/components/HeroCard";
import Marquee from "@/components/Marquee";
import { mockCourses, type Category } from "@/data/mockCourses";

type FilterOption = Category | "All";
const categories: FilterOption[] = ["All", "Finance", "Web3", "Skill", "Crypto"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");
  
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return mockCourses;
    return mockCourses.filter(course => course.category === selectedCategory);
  }, [selectedCategory]);

  // Split courses for two marquee rows
  const row1Courses = mockCourses.slice(0, 4);
  const row2Courses = mockCourses.slice(4, 8);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - The "Hook" with Infinite Scroll Marquee */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          {/* Text Content */}
          <div className="animate-fade-up text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              We're Changing<br />
              How You<br />
              <span className="text-foreground/40">Earn Forever.</span>
            </h1>
            <p className="text-lg text-foreground/50 mb-8 max-w-md font-medium mx-auto lg:mx-0">
              Practical education for the digital age. Master skills that generate real income.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold text-base group">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10 rounded-full px-8 py-6 font-semibold text-base">
                View Courses
              </Button>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Marquee - Two Rows */}
        <div className="w-full space-y-5 overflow-hidden">
          {/* Row 1 - Right to Left */}
          <Marquee direction="left" speed={35} pauseOnHover className="py-2">
            {row1Courses.map((course) => (
              <HeroCard key={course.id} course={course} className="shrink-0" />
            ))}
          </Marquee>

          {/* Row 2 - Left to Right */}
          <Marquee direction="right" speed={40} pauseOnHover className="py-2">
            {row2Courses.map((course) => (
              <HeroCard key={course.id} course={course} className="shrink-0" />
            ))}
          </Marquee>
        </div>

        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Course Grid - Bento Layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
                Explore Courses
              </h2>
              <p className="text-foreground/50 font-medium">
                Skills that pay. Knowledge that compounds.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "glass text-foreground/70 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
                <CourseCard course={course} featured={index === 0} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50 font-medium mb-4">
                No courses in this category yet.
              </p>
              <Button variant="outline" onClick={() => setSelectedCategory("All")} className="glass border-white/10 text-foreground rounded-full">
                View all courses
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Ready to level up?
          </h2>
          <p className="text-foreground/50 font-medium mb-8 text-lg">
            Join thousands of students building their income streams.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 font-semibold text-base">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;