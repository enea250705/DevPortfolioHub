import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [location] = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur">
        <nav className="flex flex-col space-y-6 mt-8">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "block px-4 py-2 text-lg transition-colors hover:text-primary cursor-pointer border-l-2",
                  location === item.href
                    ? "text-primary font-medium border-primary"
                    : "text-muted-foreground border-transparent hover:border-primary/50"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-sm text-muted-foreground text-center">
            Let's build something amazing together
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}