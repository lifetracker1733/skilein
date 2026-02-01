import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import { mockCourses, type Category } from "@/data/mockCourses";

type FilterOption = Category | "All";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    let courses = mockCourses;

    if (selectedCategory !== "All") {
      courses = courses.filter((course) => course.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query)
      );
    }

    return courses;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section - Educate.io Style */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-category-freelancing animate-glow-pulse" />
              <span className="text-xs text-muted-foreground font-medium">Skills that generate income</span>
            </div>
            
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
              Master Skills
              <br />
              <span className="text-muted-foreground">That Pay</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              Learn freelancing, stock trading, crypto investing, and bond strategies from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-base border-border hover:bg-card hover:border-foreground/20 text-foreground"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-3">
              Featured Courses
            </h2>
            <p className="text-muted-foreground font-medium">
              Expertly crafted courses to master money-making skills
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10 items-start lg:items-center justify-between">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <div className="w-full lg:w-72">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          {/* Bento Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-medium mb-4">
                No courses found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="rounded-full border-border hover:bg-card"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display text-3xl md:text-5xl text-foreground mb-4">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground font-medium mb-8 text-base">
              Join thousands building their income streams with our courses.
            </p>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
