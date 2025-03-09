import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {" "}Digital Reality
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Professional web development services tailored to your needs. Let's build something amazing together.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Professional developer"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
