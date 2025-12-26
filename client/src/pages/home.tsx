import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { SkillsSection } from "@/components/skills-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SEO } from "@/components/seo";

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

export default function Home() {
  const ref = useRef(null);
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

  return (
    <>
      <SEO 
        title="Best Web Development & Programming Services"
        description="Top-rated web development, programming, and software development services in Novara. Expert in custom web solutions, e-commerce, React.js, Node.js, TypeScript, and full-stack development."
        keywords={[
          'web development Novara',
          'sviluppatore web Novara',
          'web developer Novara',
          'sviluppatore siti web Novara',
          'programmatore Novara',
          'React developer Novara',
          'Node.js developer Novara',
          'full stack developer Novara',
          'TypeScript developer Novara',
          'e-commerce developer Novara'
        ]}
        location="Novara, Italy"
        language="en"
        cityName="Novara"
        province="Novara"
        neighborhoods={["Centro Storico", "Sant'Agabio", "San Martino", "Veveri", "Bicocca"]}
        geoCoordinates={{ latitude: 45.4455, longitude: 8.6190 }}
      />
      <div className="space-y-24">
      {/* Hero Section with Parallax */}
      <motion.section
        ref={ref}
        id="hero"
        className="py-16 flex flex-col md:flex-row items-center gap-8 overflow-hidden"
      >
        <div className="flex-1 space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional web development services tailored to your needs. Let's build something amazing together.
          </motion.p>
          <motion.div
            className="flex gap-4"
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
          </motion.div>
        </div>
        <motion.div
          className="flex-1"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Professional developer workspace"
            className="rounded-lg shadow-lg object-cover w-full aspect-video"
          />
        </motion.div>
      </motion.section>

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
            <motion.div
              key={feature}
              className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </motion.div>
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
            <motion.div
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
            </motion.div>
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
    </>
  );
}