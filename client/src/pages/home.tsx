import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Code2, Users } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Satisfied Clients", value: "30+" },
  ];

  const features = [
    "Custom Web Development",
    "Frontend Expertise",
    "Backend Development",
    "Database Design",
    "API Integration",
    "Performance Optimization",
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
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
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Professional developer workspace"
            className="rounded-lg shadow-lg object-cover w-full aspect-video"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent/10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I bring expertise, dedication, and a track record of successful projects across various technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-card">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center space-y-6 bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's discuss how we can work together to bring your ideas to life.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}