import { FC } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-commerce për Biznes Lokal",
    description: "Platformë e-commerce e zhvilluar për një dyqan në Fier, me funksionalitete të plota të shitjes online.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "Sistem Menaxhimi Hotelesh",
    description: "Sistem i plotë menaxhimi për hotelet në zonën e Fierit.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Aplikacion për Rezervime",
    description: "Aplikacion për rezervime online për restorantet në Fier.",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    technologies: ["React Native", "Firebase"]
  },
  {
    title: "Platform Edukative Online",
    description: "Platformë për mësimin online për shkollat në Fier.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    technologies: ["Vue.js", "Express", "MySQL"]
  }
];

const FierPortfolio: FC = () => {
  return (
    <div className="space-y-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Projektet Tona në Fier
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Zgjidhje të personalizuara dixhitale për bizneset në Fier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FierPortfolio;
