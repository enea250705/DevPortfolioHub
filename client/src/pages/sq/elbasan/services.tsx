import { FC } from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from "@/components/service-card";
import { Code, Layout, Database, Layers, Server } from "lucide-react";

const services = [
  {
    title: "Zhvillim Frontend",
    description: "Ekspert në HTML5, CSS3 dhe framework-et moderne të JavaScript. Krijimi i ndërfaqeve responsive dhe interaktive.",
    icon: <Layout className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Zhvillim Backend",
    description: "I specializuar në Java dhe Node.js. Ndërtimi i aplikacioneve të qëndrueshme server-side dhe API REST.",
    icon: <Server className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    title: "Zhvillim Full Stack",
    description: "Zhvillim i aplikacioneve nga fillimi në fund, duke kombinuar ekspertizën frontend dhe backend për zgjidhje të plota.",
    icon: <Layers className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
  },
  {
    title: "Dizajn Database",
    description: "Ekspert në dizajnimin e bazave të të dhënave, SQL dhe sisteme të ndryshme të menaxhimit të bazave të të dhënave.",
    icon: <Database className="h-6 w-6" />,
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66"
  }
];

const ElbasanServices: FC = () => {
  return (
    <div className="space-y-8 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Shërbimet Tona në Elbasan
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Shërbime të plota të zhvillimit duke përdorur teknologjitë më të fundit dhe praktikat më të mira.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElbasanServices;
