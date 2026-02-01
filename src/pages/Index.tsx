import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
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

  // Split courses for two marquee rows (specified order)
  // Row 1: Stock, Dropshipping, Vibe Coding, Prompt Engineering
  // Row 2: Crypto, Content, Ad Management
  const row1Courses = mockCourses.filter(c => 
    ["stock", "dropshipping", "vibecoding", "prompt"].includes(c.id)
  );
  const row2Courses = mockCourses.filter(c => 
    ["crypto", "content", "admanagement"].includes(c.id)
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - The "Hook" with Infinite Scroll Marquee */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          {/* Text Content */}
          <div className="animate-fade-up text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter mb-6">
              Master the<br />
              Economy.
            </h1>
            <p className="text-lg text-foreground/50 mb-8 max-w-md font-medium mx-auto lg:mx-0">
              Real skills. Real income. Free for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to={`/course/${mockCourses[0]?.id || 'dropshipping'}`}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold text-base group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10 rounded-full px-8 py-6 font-semibold text-base" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                View Courses
              </Button>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Marquee - Two Rows */}
        <div className="w-full space-y-5 overflow-hidden">
          {/* Row 1 - Right to Left (Stock, Dropshipping, Vibe Coding, Prompt) */}
          <Marquee direction="left" speed={35} pauseOnHover className="py-2">
            {row1Courses.map((course) => (
              <HeroCard key={course.id} course={course} className="shrink-0" />
            ))}
          </Marquee>

          {/* Row 2 - Left to Right (Crypto, Drop Coursing, Ad Management, AI Content) */}
          <Marquee direction="right" speed={40} pauseOnHover className="py-2">
            {row2Courses.map((course) => (
              <HeroCard key={course.id} course={course} className="shrink-0" />
            ))}
          </Marquee>
        </div>

        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Our Mission Section - Split Layout */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">
                Our Mission
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter leading-tight">
                Break the System.<br />Build Your Legacy.
              </h2>
              <p className="text-foreground/50 text-lg leading-relaxed">
                Education is broken. Universities teach nothing about wealth. Paid courses sell empty promises behind $1,000 paywalls.
              </p>
              <p className="text-foreground font-medium text-lg leading-relaxed">
                Skile.in delivers elite skills—Stocks, Dropshipping, AI—100% free. No fluff. No hidden fees. Every lesson is verified. 2026-ready.
              </p>
              <Link to="/mission">
                <Button variant="outline" className="glass border-white/10 text-foreground hover:bg-white/10 rounded-full px-6 py-5 font-semibold mt-4 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 lg:hidden" />
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern dark office"
                  className="w-full h-[400px] lg:h-[500px] object-cover img-gritty"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid - Bento Layout */}
      <section id="courses" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-2">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-4">
            Ready to level up?
          </h2>
          <p className="text-foreground/50 font-medium mb-8 text-lg">
            Join thousands of students building their income streams.
          </p>
          <Link to={`/course/${mockCourses[0]?.id || 'dropshipping'}`}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 font-semibold text-base">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
