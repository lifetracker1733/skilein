import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              Money<span className="text-accent">Skills</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Courses
            </Link>
            <Link to="/?category=Freelancing" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Freelancing
            </Link>
            <Link to="/?category=Stock Trading" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Investing
            </Link>
            <Link to="/?category=Crypto" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Crypto
            </Link>
          </div>

          {/* CTA Button - Inverted Contrast */}
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 font-semibold text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
