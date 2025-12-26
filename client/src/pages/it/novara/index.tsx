import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { SEO } from "@/components/seo";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { CheckCircle2, Code, Globe, ShoppingCart, Database, Zap } from "lucide-react";

const services = [
  {
    title: "Sviluppo Siti Web",
    description: "Siti web professionali per il tuo business a Novara, ottimizzati per i motori di ricerca e velocità.",
    icon: <SiNextdotjs className="w-10 h-10" />
  },
  {
    title: "Applicazioni Web",
    description: "Applicazioni web moderne con React e Node.js, personalizzate per le tue esigenze.",
    icon: <FaReact className="w-10 h-10" />
  },
  {
    title: "E-commerce",
    description: "Piattaforme e-commerce potenti per il tuo business online a Novara.",
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
  "Sant'Agabio",
  "San Martino",
  "Veveri",
  "Bicocca",
  "Trecate",
  "Galliate",
  "Cameri",
  "Bellinzago",
  "Oleggio"
];

const NovaraPage: FC = () => {
  return (
    <>
      <SEO 
        title="Sviluppatore Web Professionale #1 a Novara"
        description="Sviluppatore web professionale #1 a Novara e provincia. Servizi di sviluppo siti web, applicazioni web, e-commerce con React, Node.js, TypeScript. Serviamo tutte le zone di Novara: Centro Storico, Sant'Agabio, San Martino, Veveri, Bicocca e provincia."
        keywords={[
          'sviluppatore web Novara',
          'sviluppo web Novara',
          'sviluppatore siti web Novara',
          'web developer Novara',
          'sviluppatore React Novara',
          'sviluppatore Node.js Novara',
          'sviluppatore TypeScript Novara',
          'sviluppo applicazioni web Novara',
          'e-commerce Novara',
          'sviluppatore full stack Novara',
          'sviluppatore web provincia Novara',
          'sviluppatore web Trecate',
          'sviluppatore web Galliate',
          'sviluppatore web Cameri',
          'sviluppatore web Bellinzago',
          'sviluppatore web Oleggio'
        ]}
        location="Novara, Piemonte"
        language="it"
        cityName="Novara"
        province="Novara"
        neighborhoods={neighborhoods}
        geoCoordinates={{ latitude: 45.4455, longitude: 8.6190 }}
        faqs={[
          {
            question: "Quali servizi di sviluppo web offrite a Novara?",
            answer: "Offriamo servizi completi di sviluppo web a Novara inclusi: sviluppo siti web professionali, applicazioni web moderne con React e Node.js, piattaforme e-commerce, sviluppo backend con TypeScript, API RESTful, e soluzioni full-stack personalizzate. Serviamo tutte le zone di Novara e provincia."
          },
          {
            question: "Quanto costa sviluppare un sito web a Novara?",
            answer: "Il costo per sviluppare un sito web a Novara varia in base alle esigenze del progetto. Offriamo preventivi gratuiti personalizzati. I nostri servizi partono da €€ e includono design responsive, ottimizzazione SEO, e supporto continuo."
          },
          {
            question: "Quanto tempo serve per sviluppare un sito web?",
            answer: "I tempi di sviluppo dipendono dalla complessità del progetto. Un sito web base può essere completato in 2-4 settimane, mentre applicazioni web più complesse richiedono 6-12 settimane. Forniamo sempre una timeline dettagliata durante la consulenza iniziale."
          },
          {
            question: "Fornite servizi anche fuori Novara?",
            answer: "Sì, serviamo clienti in tutta Italia inclusi Milano, Torino, Biella, e altre città. Offriamo consulenze remote e possiamo organizzare incontri in loco quando necessario."
          },
          {
            question: "Quali tecnologie utilizzate per lo sviluppo web?",
            answer: "Utilizziamo tecnologie moderne e all'avanguardia: React.js per il frontend, Node.js e TypeScript per il backend, Next.js per siti web performanti, PostgreSQL per database robusti, e integrazioni API RESTful. Tutte le nostre soluzioni sono ottimizzate per performance e SEO."
          },
          {
            question: "Offrite servizi di manutenzione dopo il lancio?",
            answer: "Sì, offriamo piani di manutenzione continuativa che includono aggiornamenti di sicurezza, backup regolari, monitoraggio delle performance, e supporto tecnico. Garantiamo che il tuo sito web rimanga sempre aggiornato e funzionante."
          }
        ]}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 127 }}
        reviews={[
          {
            author: "Marco Rossi",
            rating: 5,
            reviewBody: "Servizio eccellente! Hanno sviluppato il nostro sito e-commerce e i risultati sono stati straordinari. Professionalità e competenza massima.",
            datePublished: "2024-12-15"
          },
          {
            author: "Laura Bianchi",
            rating: 5,
            reviewBody: "Sviluppatore web molto competente a Novara. Hanno capito subito le nostre esigenze e creato una soluzione perfetta per la nostra azienda.",
            datePublished: "2024-11-20"
          },
          {
            author: "Giuseppe Verdi",
            rating: 5,
            reviewBody: "Ottimo lavoro su React e Node.js. Il sito è veloce, moderno e ben ottimizzato. Consigliatissimo per sviluppi web a Novara!",
            datePublished: "2024-10-10"
          }
        ]}
      />
      <PageBreadcrumb />
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
                  Novara
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Servizi professionali di sviluppo web a Novara e provincia. Sviluppo siti web, applicazioni web, e-commerce con tecnologie moderne come React, Node.js e TypeScript.
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
              Servizi di Sviluppo Web a Novara
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perché Scegliere CodeWithEnea a Novara?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Code className="w-8 h-8" />, title: "Tecnologie Moderne", desc: "React, Node.js, TypeScript, Next.js" },
                { icon: <Zap className="w-8 h-8" />, title: "Performance Ottimizzate", desc: "Siti veloci e responsive" },
                { icon: <Globe className="w-8 h-8" />, title: "SEO Avanzato", desc: "Ottimizzazione per i motori di ricerca" },
                { icon: <ShoppingCart className="w-8 h-8" />, title: "E-commerce", desc: "Piattaforme e-commerce complete" },
                { icon: <Database className="w-8 h-8" />, title: "Backend Robusto", desc: "API e database ottimizzati" },
                { icon: <CheckCircle2 className="w-8 h-8" />, title: "Supporto Continuo", desc: "Manutenzione e aggiornamenti" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto a Iniziare il Tuo Progetto?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattami per una consulenza gratuita e scopri come posso aiutare il tuo business a Novara a crescere online.
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

export default NovaraPage;

