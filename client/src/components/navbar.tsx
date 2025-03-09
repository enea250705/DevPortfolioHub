import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MobileNav } from "./mobile-nav";

export default function Navbar() {
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <span
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary cursor-pointer",
          location === href
            ? "text-foreground"
            : "text-muted-foreground"
        )}
      >
        {children}
        {location === href && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 top-full h-[2px] w-full bg-primary"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="pl-4 md:pl-6">
          <Link href="/">
            <span className="flex items-center space-x-2 cursor-pointer font-bold text-lg">
              <span className="gradient-text">CodeWithEnea</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="md:hidden flex items-center">
            <span className="text-sm text-muted-foreground mr-2 animate-pulse">
              Menu →
            </span>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}