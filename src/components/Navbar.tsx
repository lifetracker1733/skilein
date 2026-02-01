import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - SKILE all caps, heavy bold */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black text-white tracking-tight">
            SKILE
          </span>
        </Link>

        {/* Navigation Pills - Glassmorphism */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          <Link 
            to="/" 
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Home
          </Link>
          <Link 
            to="/mission" 
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Our Mission
          </Link>
          <Link 
            to="/career" 
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Career
          </Link>
        </div>

        {/* CTA Button - Pure White Pill */}
        <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-semibold text-sm">
          Start Learning
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
