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