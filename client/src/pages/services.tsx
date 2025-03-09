import { ServiceCard } from "@/components/service-card";
import { Code, Smartphone, Globe, Laptop } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: <Globe className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1649105703438-0992d6844823"
  },
  {
    title: "Frontend Development",
    description: "Responsive and interactive user interfaces with modern frameworks.",
    icon: <Laptop className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    title: "Backend Development",
    description: "Scalable and secure server-side solutions for your applications.",
    icon: <Code className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968"
  }
];

export default function Services() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of development services to help bring your ideas to life.
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
