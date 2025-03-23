import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const services = [
  {
    title: "Zhvillim Website",
    description: "Website profesionale për biznesin tuaj në Elbasan, të optimizuara për kërkim dhe shpejtësi.",
    icon: <SiNextdotjs className="w-10 h-10" />
  },
  {
    title: "Aplikacione Web",
    description: "Aplikacione web moderne me React dhe Node.js, të përshtatura për nevojat tuaja.",
    icon: <FaReact className="w-10 h-10" />
  },
  {
    title: "E-commerce",
    description: "Platforma e-commerce të fuqishme për biznesin tuaj online në Elbasan.",
    icon: <FaShopify className="w-10 h-10" />
  },
  {
    title: "Zhvillim Backend",
    description: "Zgjidhje backend të qëndrueshme me Node.js dhe TypeScript.",
    icon: <FaNodeJs className="w-10 h-10" />
  }
];

const ElbasanPage: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Zhvillues Web Profesional në Elbasan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Zgjidhje dixhitale profesionale për bizneset në Elbasan. 
            Ekspertizë në React.js, Node.js dhe TypeScript.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="mr-4">Na Kontaktoni</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">Shiko Punët Tona</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Shërbimet Tona në Elbasan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElbasanPage;