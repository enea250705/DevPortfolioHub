import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
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
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur">
        <motion.nav
          className="flex flex-col mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={item.href}>
                <span
                  className={cn(
                    "block px-4 py-3 text-lg transition-all hover:text-primary hover:pl-6 cursor-pointer border-l-2 rounded-r-md",
                    location === item.href
                      ? "text-primary font-medium border-primary bg-primary/5"
                      : "text-muted-foreground border-transparent hover:border-primary/50 hover:bg-accent/30"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          className="absolute bottom-8 left-8 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="text-sm text-muted-foreground text-center">
            Let's build something amazing together
          </p>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}