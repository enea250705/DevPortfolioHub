
import { Link as WouterLink, useLocation } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";  // Import NextLink to avoid nesting anchor tags

// NavLink component with active state
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <span 
      onClick={() => window.location.href = href}
      className={cn(
        "hover:text-foreground transition-colors cursor-pointer",
        isActive ? "text-foreground font-medium" : "text-muted-foreground"
      )}>
      {children}
    </span>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="ml-4 md:ml-8">
          <WouterLink href="/">
            <span className="flex items-center space-x-2 cursor-pointer font-bold text-lg">
              <span className="gradient-text">CodeWithEnea</span>
            </span>
          </WouterLink>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <ThemeToggle />
          <Button 
            variant="outline" 
            className="hidden md:flex"
            onClick={() => window.location.href = "/contact"}
          >
            <span>Let's Talk</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
