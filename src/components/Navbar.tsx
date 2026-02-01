import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gradient">MoneySkills</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link to="/?category=Freelancing" className="text-muted-foreground hover:text-foreground transition-colors">
              Freelancing
            </Link>
            <Link to="/?category=Stock Trading" className="text-muted-foreground hover:text-foreground transition-colors">
              Investing
            </Link>
          </div>

          {/* CTA Button */}
          <Button className="gradient-primary gradient-primary-hover text-white rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
