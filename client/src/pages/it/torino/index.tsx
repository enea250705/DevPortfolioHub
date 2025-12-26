import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { SEO } from "@/components/seo";
import { CheckCircle2, Code, Globe, ShoppingCart, Database, Zap } from "lucide-react";

const services = [
  {
    title: "Sviluppo Siti Web",
    description: "Siti web professionali per il tuo business a Torino, ottimizzati per i motori di ricerca.",
    icon: <SiNextdotjs className="w-10 h-10" />
  },
  {
    title: "Applicazioni Web",
    description: "Applicazioni web moderne con React e Node.js per aziende torinesi.",
    icon: <FaReact className="w-10 h-10" />
  },
  {
    title: "E-commerce",
    description: "Piattaforme e-commerce potenti per il tuo business online a Torino.",
    icon: <FaShopify className="w-10 h-10" />
  },
  {
    title: "Sviluppo Backend",
    description: "Soluzioni backend robuste con Node.js e TypeScript.",
    icon: <FaNodeJs className="w-10 h-10" />
  }
];

const neighborhoods = [
  "Centro",
  "San Salvario",
  "Crocetta",
  "Lingotto",
  "Borgo Po",
  "Vanchiglia",
  "Aurora",
  "Barriera di Milano",
  "Mirafiori",
  "Borgo San Paolo"
];

const TorinoPage: FC = () => {
  return (
    <>
      <SEO 
        title="Sviluppatore Web Professionale #1 a Torino"
        description="Sviluppatore web professionale #1 a Torino e provincia. Servizi di sviluppo siti web, applicazioni web, e-commerce con React, Node.js, TypeScript. Serviamo tutte le zone di Torino: Centro, San Salvario, Crocetta, Lingotto e provincia."
        keywords={[
          'sviluppatore web Torino',
          'sviluppo web Torino',
          'sviluppatore siti web Torino',
          'web developer Torino',
          'sviluppatore React Torino',
          'sviluppatore Node.js Torino',
          'sviluppatore TypeScript Torino',
          'sviluppo applicazioni web Torino',
          'e-commerce Torino',
          'sviluppatore full stack Torino',
          'sviluppatore web provincia Torino',
          'sviluppatore web San Salvario',
          'sviluppatore web Crocetta',
          'sviluppatore web Lingotto'
        ]}
        location="Torino, Piemonte"
        language="it"
        cityName="Torino"
        province="Torino"
        neighborhoods={neighborhoods}
        geoCoordinates={{ latitude: 45.0703, longitude: 7.6869 }}
      />
      <div className="min-h-screen">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sviluppatore Web Professionale #1 a{' '}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Torino
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Servizi professionali di sviluppo web a Torino e provincia. Sviluppo siti web, applicazioni web, e-commerce con tecnologie moderne come React, Node.js e TypeScript.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Richiedi Preventivo Gratuito
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Servizi di Sviluppo Web a Torino
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="text-primary mb-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto a Iniziare il Tuo Progetto a Torino?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita e scopri come posso aiutare il tuo business a Torino a crescere online.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contattami Ora
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TorinoPage;

