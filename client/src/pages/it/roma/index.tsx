import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { SEO } from "@/components/seo";

const services = [
  {
    title: "Sviluppo Siti Web",
    description: "Siti web professionali per il tuo business a Roma, ottimizzati per i motori di ricerca.",
    icon: <SiNextdotjs className="w-10 h-10" />
  },
  {
    title: "Applicazioni Web",
    description: "Applicazioni web moderne con React e Node.js per aziende romane.",
    icon: <FaReact className="w-10 h-10" />
  },
  {
    title: "E-commerce",
    description: "Piattaforme e-commerce potenti per il tuo business online a Roma.",
    icon: <FaShopify className="w-10 h-10" />
  },
  {
    title: "Sviluppo Backend",
    description: "Soluzioni backend robuste con Node.js e TypeScript.",
    icon: <FaNodeJs className="w-10 h-10" />
  }
];

const neighborhoods = [
  "Centro Storico",
  "Trastevere",
  "Testaccio",
  "Prati",
  "Monti",
  "Parioli",
  "Flaminio",
  "San Lorenzo",
  "Esquilino",
  "EUR"
];

const RomaPage: FC = () => {
  return (
    <>
      <SEO 
        title="Sviluppatore Web Professionale a Roma"
        description="Sviluppatore web professionale a Roma e provincia. Servizi di sviluppo siti web, applicazioni web, e-commerce con React, Node.js, TypeScript. Serviamo tutte le zone di Roma: Centro Storico, Trastevere, Testaccio, Prati, Monti e provincia."
        keywords={[
          'sviluppatore web Roma',
          'sviluppo web Roma',
          'sviluppatore siti web Roma',
          'web developer Roma',
          'sviluppatore React Roma',
          'sviluppatore Node.js Roma',
          'sviluppatore TypeScript Roma',
          'sviluppo applicazioni web Roma',
          'e-commerce Roma',
          'sviluppatore full stack Roma',
          'sviluppatore web provincia Roma',
          'sviluppatore web Trastevere',
          'sviluppatore web Testaccio',
          'sviluppatore web Prati'
        ]}
        location="Roma, Lazio"
        language="it"
        cityName="Roma"
        province="Roma"
        neighborhoods={neighborhoods}
        geoCoordinates={{ latitude: 41.9028, longitude: 12.4964 }}
        faqs={[
          {
            question: "Offrite servizi di sviluppo web a Roma?",
            answer: "Sì, offriamo servizi completi di sviluppo web a Roma e provincia. Sviluppiamo siti web professionali, applicazioni web moderne, piattaforme e-commerce, e soluzioni full-stack per aziende romane."
          },
          {
            question: "Quali zone di Roma servite?",
            answer: "Serviamo tutte le zone di Roma inclusi Centro Storico, Trastevere, Testaccio, Prati, Monti, Parioli, Flaminio, San Lorenzo, Esquilino, EUR e molte altre. Offriamo anche servizi nella provincia di Roma."
          },
          {
            question: "Quanto tempo serve per sviluppare un sito web a Roma?",
            answer: "I tempi di sviluppo variano in base alla complessità. Un sito web base può essere completato in 2-4 settimane, mentre applicazioni più complesse richiedono 6-12 settimane. Forniamo sempre una timeline dettagliata durante la consulenza."
          }
        ]}
        aggregateRating={{ ratingValue: 4.8, reviewCount: 89 }}
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
                Sviluppatore Web Professionale a{' '}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Roma
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Servizi professionali di sviluppo web a Roma e provincia. Sviluppo siti web, applicazioni web, e-commerce con tecnologie moderne come React, Node.js e TypeScript.
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
              Servizi di Sviluppo Web a Roma
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
              Pronto a Iniziare il Tuo Progetto a Roma?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita e scopri come posso aiutare il tuo business a Roma a crescere online.
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

export default RomaPage;

