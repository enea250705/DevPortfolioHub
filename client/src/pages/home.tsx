import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { SkillsSection } from "@/components/skills-section";
import { useScroll, useTransform } from "framer-motion";
import { m } from "framer-motion";
import { useRef, useState } from "react";

// In heroImageUrls object:
const heroImageUrls = {
  tiny: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=75&fm=webp",
  small: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80&fm=webp",
  medium: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1024&q=80&fm=webp",
  large: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&fm=webp",
  placeholder: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4eHh4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" // Blur placeholder
};

export default function Home() {
  const ref = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const features = [
    "Custom Web Development",
    "Frontend Expertise",
    "Backend Development",
    "Database Design",
    "API Integration",
    "Performance Optimization",
  ];

  const quotes = [
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      author: "Brian W. Kernighan"
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section with Parallax */}
      <m.section
        ref={ref}
        id="hero"
        className="min-h-[600px] py-16 flex flex-col md:flex-row items-center gap-8 overflow-hidden"
      >
        <div className="flex-1 space-y-4">
          <m.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl min-h-[80px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </m.h1>
          <m.p
            className="text-muted-foreground text-lg min-h-[56px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional web development services tailored to your needs. Let's build something amazing together.
          </m.p>
          <m.div
            className="flex gap-4 min-h-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </m.div>
        </div>
        <m.div
          className="flex-1 w-full aspect-[16/9] relative"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative h-[250px] md:h-[400px] overflow-hidden">
            {/* Blur placeholder */}
            <img
              src={heroImageUrls.placeholder}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
              aria-hidden="true"
            />

            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={heroImageUrls.large}
                type="image/webp"
              />
              <source
                media="(min-width: 1024px)"
                srcSet={heroImageUrls.medium}
                type="image/webp"
              />
              <source
                media="(min-width: 640px)"
                srcSet={heroImageUrls.small}
                type="image/webp"
              />
              <img
                src={heroImageUrls.tiny}
                alt="Professional developer workspace"
                className={`absolute inset-0 w-full h-full object-cover ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
                onLoad={() => setImageLoaded(true)}
                width="1200"
                height="675"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </m.div>
      </m.section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I bring expertise, dedication, and a track record of successful projects across various technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <m.div
              key={feature}
              className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </m.div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-12 bg-accent/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Words of Wisdom</h2>
          <p className="text-muted-foreground">Inspirational quotes that guide my development philosophy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <m.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute -top-4 -left-4" />
              <p className="text-lg mb-4 italic">{quote.text}</p>
              <p className="text-sm text-muted-foreground">- {quote.author}</p>
            </m.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 text-center space-y-6 bg-primary/5 rounded-lg p-8">
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

      <BackToTop />
    </div>
  );
}