import { useState, useMemo } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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

    // Filter by category
    if (selectedCategory !== "All") {
      courses = courses.filter((course) => course.category === selectedCategory);
    }

    // Filter by search query
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Learn skills that generate income</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Master Skills That{" "}
              <span className="text-gradient">Pay</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn freelancing, stock trading, crypto investing, and bond strategies from industry experts. Turn your knowledge into income.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary gradient-primary-hover text-white rounded-full px-8 py-6 text-lg font-semibold group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-border hover:bg-card"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertly crafted courses to help you master money-making skills
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10 items-center justify-between">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <div className="w-full lg:w-80">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No courses found. Try adjusting your filters.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 text-primary"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students who are already building their income streams with our courses.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary gradient-primary-hover text-white rounded-full px-8 py-6 text-lg font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
