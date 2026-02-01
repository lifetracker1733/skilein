import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Money<span className="text-accent">Skills</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-medium max-w-sm leading-relaxed">
              Master the skills that pay. Learn freelancing, stock trading, crypto, and bond investing from industry experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Courses</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/?category=Freelancing" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Freelancing
                </Link>
              </li>
              <li>
                <Link to="/?category=Stock Trading" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Stock Trading
                </Link>
              </li>
              <li>
                <Link to="/?category=Crypto" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Crypto
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} MoneySkills. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
