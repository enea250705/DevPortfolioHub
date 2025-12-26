import { FC } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/seo";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Novara",
    slug: "novara",
    province: "Novara",
    region: "Piemonte",
    description: "Sviluppatore web professionale #1 a Novara e provincia",
    priority: "Alta",
    neighborhoods: ["Centro Storico", "Sant'Agabio", "San Martino", "Veveri", "Bicocca"]
  },
  {
    name: "Milano",
    slug: "milano",
    province: "Milano",
    region: "Lombardia",
    description: "Servizi di sviluppo web professionali a Milano",
    priority: "Alta",
    neighborhoods: ["Centro", "Brera", "Navigli", "Porta Nuova", "Isola"]
  },
  {
    name: "Torino",
    slug: "torino",
    province: "Torino",
    region: "Piemonte",
    description: "Sviluppatore web professionale a Torino e provincia",
    priority: "Alta",
    neighborhoods: ["Centro", "San Salvario", "Crocetta", "Lingotto", "Borgo Po"]
  },
  {
    name: "Biella",
    slug: "biella",
    province: "Biella",
    region: "Piemonte",
    description: "Sviluppatore web professionale #1 a Biella e provincia",
    priority: "Alta",
    neighborhoods: ["Centro", "Piazzo", "Vernato", "Chiavazza", "Pavignano"]
  },
  {
    name: "Roma",
    slug: "roma",
    province: "Roma",
    region: "Lazio",
    description: "Servizi di sviluppo web professionali a Roma",
    priority: "Media",
    neighborhoods: ["Centro Storico", "Trastevere", "Testaccio", "Prati", "Monti"]
  },
  {
    name: "Napoli",
    slug: "napoli",
    province: "Napoli",
    region: "Campania",
    description: "Sviluppatore web professionale a Napoli",
    priority: "Media",
    neighborhoods: ["Centro Storico", "Vomero", "Chiaia", "Posillipo", "Fuorigrotta"]
  },
  {
    name: "Firenze",
    slug: "firenze",
    province: "Firenze",
    region: "Toscana",
    description: "Servizi di sviluppo web a Firenze",
    priority: "Media",
    neighborhoods: ["Centro Storico", "Oltrarno", "Santa Croce", "San Lorenzo"]
  },
  {
    name: "Bologna",
    slug: "bologna",
    province: "Bologna",
    region: "Emilia-Romagna",
    description: "Sviluppatore web professionale a Bologna",
    priority: "Media",
    neighborhoods: ["Centro", "San Donato", "Navile", "Bolognina"]
  },
  {
    name: "Genova",
    slug: "genova",
    province: "Genova",
    region: "Liguria",
    description: "Servizi di sviluppo web a Genova",
    priority: "Media",
    neighborhoods: ["Centro Storico", "Carignano", "Albaro", "Nervi"]
  },
  {
    name: "Venezia",
    slug: "venezia",
    province: "Venezia",
    region: "Veneto",
    description: "Sviluppatore web professionale a Venezia",
    priority: "Media",
    neighborhoods: ["San Marco", "Cannaregio", "Dorsoduro", "Castello"]
  }
];

const LocationsPage: FC = () => {
  return (
    <>
      <SEO 
        title="Sviluppatore Web Professionale in Tutta Italia"
        description="Servizi di sviluppo web professionali in tutta Italia. Operiamo a Novara, Milano, Torino, Biella, Roma, Napoli, Firenze, Bologna, Genova, Venezia e molte altre città. Sviluppo siti web, applicazioni web, e-commerce con tecnologie moderne."
        keywords={[
          'sviluppatore web Italia',
          'sviluppo web Italia',
          'sviluppatore web Novara',
          'sviluppatore web Milano',
          'sviluppatore web Torino',
          'sviluppatore web Roma',
          'sviluppatore web Napoli',
          'sviluppatore web Firenze',
          'sviluppatore web Bologna',
          'sviluppatore web Genova',
          'sviluppatore web Venezia'
        ]}
        location="Italia"
        language="it"
      />
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Serviamo Tutta l'Italia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sviluppatore web professionale con servizi in tutta Italia. Dalle grandi città come Milano e Roma, alle città più piccole come Novara e Biella.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/it/${city.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{city.name}</CardTitle>
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <CardDescription className="mb-2">
                        {city.province}, {city.region}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mb-3">
                        {city.description}
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-primary/5 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Non trovi la tua città?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Offriamo servizi in tutta Italia, anche se la tua città non è nella lista. Contattaci per scoprire come possiamo aiutarti.
            </p>
            <Link href="/contact">
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                Contattaci Ora
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LocationsPage;

