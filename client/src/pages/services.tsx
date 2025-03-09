import { ServiceCard } from "@/components/service-card";
import { Code, Layout, Database, Layers, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Expert in HTML5, CSS3, and modern JavaScript frameworks. Creating responsive and interactive user interfaces.",
    icon: <Layout className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Backend Development",
    description: "Proficient in Java and Node.js. Building robust server-side applications and RESTful APIs.",
    icon: <Server className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development combining frontend and backend expertise for complete solutions.",
    icon: <Layers className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
  },
  {
    title: "Database Design",
    description: "Expert in database design, SQL, and various database management systems.",
    icon: <Database className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66"
  }
];

export default function Services() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive development services leveraging cutting-edge technologies and best practices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { Layout, Server, Layers, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const ServiceCard = ({ title, description, icon, imageUrl }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden border-b-2 hover:border-primary transition-all hover-card">
        <div 
          className="h-40 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${imageUrl})`
          }}
        />
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const services = [
  {
    title: "Frontend Development",
    description: "Expert in HTML5, CSS3, and modern JavaScript frameworks. Creating responsive and interactive user interfaces.",
    icon: <Layout className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Backend Development",
    description: "Proficient in Java and Node.js. Building robust server-side applications and RESTful APIs.",
    icon: <Server className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development combining frontend and backend expertise for complete solutions.",
    icon: <Layers className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
  },
  {
    title: "Database Design",
    description: "Expert in database design, SQL, and various database management systems.",
    icon: <Database className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66"
  }
];

export default function Services() {
  return (
    <div className="space-y-16">
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive development services leveraging cutting-edge technologies and best practices.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      
      <motion.div 
        className="mt-16 text-center bg-primary/5 rounded-lg p-8 space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I can help you build tailored solutions that match your specific business requirements.
        </p>
        <Button asChild size="lg" className="hover-card">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </div>
  );
}
