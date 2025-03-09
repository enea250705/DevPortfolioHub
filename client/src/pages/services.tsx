import { ServiceCard } from "@/components/service-card";
import { Code, Globe, Layout, Database, Layers, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Expert in HTML5, CSS3, and modern JavaScript frameworks. Creating responsive and interactive user interfaces.",
    icon: <Layout className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    title: "Backend Development",
    description: "Proficient in Java and Node.js. Building robust server-side applications and RESTful APIs.",
    icon: <Server className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development combining frontend and backend expertise for complete solutions.",
    icon: <Layers className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    title: "Database Design",
    description: "Expert in database design, SQL, and various database management systems.",
    icon: <Database className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
  },
  {
    title: "Web Applications",
    description: "Building scalable web applications using modern frameworks and best practices.",
    icon: <Globe className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}