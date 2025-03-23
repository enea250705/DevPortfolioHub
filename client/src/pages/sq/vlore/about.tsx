import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Code2, Laptop2, Trophy } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Projektet e Suksesshme",
    description: "Mbi 50+ projekte të suksesshme të zhvilluara për klientët në Vlorë dhe më gjerë."
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Teknologjitë Moderne",
    description: "Përdorim teknologjitë më të fundit për të krijuar zgjidhje të qëndrueshme dhe të shpejta."
  },
  {
    icon: <Laptop2 className="h-8 w-8 text-primary" />,
    title: "Zhvillim i Personalizuar",
    description: "Çdo projekt është i dizajnuar dhe zhvilluar sipas nevojave specifike të klientit."
  }
];

const skills = [
  "React.js & Next.js",
  "Node.js & Express",
  "TypeScript",
  "PostgreSQL & MongoDB",
  "UI/UX Design",
  "SEO Optimization"
];

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen space-y-24">
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Rreth Nesh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Zhvillues profesional me përvojë në krijimin e zgjidhjeve dixhitale 
              inovative për bizneset në Vlorë.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Teknologjitë që Përdorim
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Gati për të Filluar Projektin Tuaj?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Le të diskutojmë se si mund t'ju ndihmojmë të realizoni idetë tuaja dixhitale.
          </p>
          <Link href="/sq/vlore/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px] text-lg font-medium"
            >
              Na Kontaktoni
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
