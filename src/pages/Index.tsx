import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import HeroCard from "@/components/HeroCard";
import { mockCourses, type Category } from "@/data/mockCourses";

type FilterOption = Category | "All";

const categories: FilterOption[] = ["All", "Finance", "Web3", "Skill", "Crypto"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return mockCourses;
    return mockCourses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - The "Hook" */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                We're Changing<br />
                How You<br />
                <span className="text-white/40">Earn Forever.</span>
              </h1>
              <p className="text-lg text-white/50 mb-8 max-w-md font-medium">
                Practical education for the digital age. Master skills that generate real income.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 font-semibold text-base group"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass border-white/10 text-white hover:bg-white/10 rounded-full px-8 py-6 font-semibold text-base"
                >
                  View Courses
                </Button>
              </div>
            </div>

            {/* Right Side - Floating 3D Cards Grid */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute inset-0 fade-right">
                {/* Staggered floating cards */}
                <HeroCard 
                  course={mockCourses[0]} 
                  className="absolute top-0 left-0 animate-float"
                  style={{ animationDelay: "0s" }}
                />
                <HeroCard 
                  course={mockCourses[1]} 
                  className="absolute top-20 left-48 animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <HeroCard 
                  course={mockCourses[2]} 
                  className="absolute top-40 left-8 animate-float"
                  style={{ animationDelay: "2s" }}
                />
                <HeroCard 
                  course={mockCourses[3]} 
                  className="absolute top-60 left-56 animate-float opacity-60"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
              {/* Gradient fade on right edge */}
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Course Grid - Bento Layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                Explore Courses
              </h2>
              <p className="text-white/50 font-medium">
                Skills that pay. Knowledge that compounds.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "glass text-white/70 hover:text-white hover:bg-white/10"
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
              <div 
                key={course.id}
                className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <CourseCard course={course} featured={index === 0} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 font-medium mb-4">
                No courses in this category yet.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("All")}
                className="glass border-white/10 text-white rounded-full"
              >
                View all courses
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to level up?
          </h2>
          <p className="text-white/50 font-medium mb-8 text-lg">
            Join thousands of students building their income streams.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-6 font-semibold text-base"
          >
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
