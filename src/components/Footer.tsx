import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white tracking-tight">SKILE</span>
            </Link>
            <p className="text-white/40 text-sm font-medium max-w-sm leading-relaxed">
              Practical education for the digital age. Master skills that generate real income and build your future.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} SKILE. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
