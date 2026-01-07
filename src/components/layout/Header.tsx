import { Link, useLocation } from "react-router-dom";
import { Sun, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/add", label: "Add Win" },
    { path: "/wall", label: "Wall of Wins" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="relative">
            <Sun className="h-7 w-7 text-primary transition-transform duration-500 group-hover:rotate-45" />
            <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-accent-foreground animate-pulse-soft" />
          </div>
          <span className="font-bold text-xl text-foreground">Small Wins</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <nav className="flex md:hidden items-center gap-1">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
