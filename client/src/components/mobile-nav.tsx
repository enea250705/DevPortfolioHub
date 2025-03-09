import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when navigating
  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;

    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => handleNavigation(href)}
        className={cn(
          "py-2 px-4 rounded-md hover:bg-accent/50 transition-all cursor-pointer",
          isActive ? "text-foreground font-medium bg-accent/30" : "text-muted-foreground"
        )}>
        {children}
      </motion.div>
    );
  };

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        className="relative hover:bg-accent/80 transition-all duration-300"
        aria-label="Toggle Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 bg-background/95 backdrop-blur-sm border-t"
          >
            <motion.div 
              className="relative z-20 grid gap-2 p-4 rounded-lg bg-card/50 shadow-lg border"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <nav className="grid grid-flow-row auto-rows-max text-sm items-center gap-2">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <span className="text-muted-foreground text-sm">Toggle theme</span>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}