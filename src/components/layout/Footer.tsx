import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </Link>
            <span className="text-border">·</span>
            <a 
              href="mailto:hello@smallwins.app" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
            <span className="text-border">·</span>
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </Link>
          </nav>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Built to remind you that you're doing okay
            <Heart className="h-3.5 w-3.5 text-primary fill-primary animate-pulse-soft" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
