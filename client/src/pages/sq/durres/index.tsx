import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const services = [
  {
    title: "Zhvillim Website",
    description: "Website profesionale për biznesin tuaj në Durrës, të optimizuara për kërkim dhe shpejtësi.",
    icon: <SiNextdotjs className="w-10 h-10" />
  },
  {
    title: "Aplikacione Web",
    description: "Aplikacione web moderne me React dhe Node.js, të përshtatura për nevojat tuaja.",
    icon: <FaReact className="w-10 h-10" />
  },
  {
    title: "E-commerce",
    description: "Platforma e-commerce të fuqishme për biznesin tuaj online në Durrës.",
    icon: <FaShopify className="w-10 h-10" />
  },
  {
    title: "Zhvillim Backend",
    description: "Zgjidhje backend të qëndrueshme me Node.js dhe TypeScript.",
    icon: <FaNodeJs className="w-10 h-10" />
  }
];

const DurresPage: FC = () => {
  return (
    <div className="min-h-screen">
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Zhvillues Web Profesional në Durrës
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Zgjidhje dixhitale profesionale për bizneset në Durrës. 
              Ekspertizë në React.js, Node.js dhe TypeScript.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] text-lg font-medium"
                >
                  Na Kontaktoni
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-300 min-w-[180px] text-lg font-medium"
                >
                  Shiko Punët Tona
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Shërbimet Tona në Durrës
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                  <CardHeader className="space-y-4">
                    <div className="text-primary/80 transition-colors duration-300 group-hover:text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
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

export default DurresPage;