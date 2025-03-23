import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LoadingTransition } from "@/components/loading-transition";
import { SEO } from "@/components/seo";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense, lazy, useEffect, useState } from "react";

// Lazy load main pages
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Albanian city pages and their sub-pages
const cities = [
  {
    name: 'tirane',
    pages: {
      home: lazy(() => import("@/pages/sq/tirane")),
      services: lazy(() => import("@/pages/sq/tirane/services")),
      portfolio: lazy(() => import("@/pages/sq/tirane/portfolio")),
      contact: lazy(() => import("@/pages/sq/tirane/contact")),
      about: lazy(() => import("@/pages/sq/tirane/about"))
    }
  },
  {
    name: 'durres',
    pages: {
      home: lazy(() => import("@/pages/sq/durres")),
      services: lazy(() => import("@/pages/sq/durres/services")),
      portfolio: lazy(() => import("@/pages/sq/durres/portfolio")),
      contact: lazy(() => import("@/pages/sq/durres/contact")),
      about: lazy(() => import("@/pages/sq/durres/about"))
    }
  },
  // Add other cities similarly...
  {
    name: 'vlore',
    pages: {
      home: lazy(() => import("@/pages/sq/vlore")),
      services: lazy(() => import("@/pages/sq/vlore/services")),
      portfolio: lazy(() => import("@/pages/sq/vlore/portfolio")),
      contact: lazy(() => import("@/pages/sq/vlore/contact")),
      about: lazy(() => import("@/pages/sq/vlore/about"))
    }
  },
  {
    name: 'shkoder',
    pages: {
      home: lazy(() => import("@/pages/sq/shkoder")),
      services: lazy(() => import("@/pages/sq/shkoder/services")),
      portfolio: lazy(() => import("@/pages/sq/shkoder/portfolio")),
      contact: lazy(() => import("@/pages/sq/shkoder/contact")),
      about: lazy(() => import("@/pages/sq/shkoder/about"))
    }
  },
  {
    name: 'elbasan',
    pages: {
      home: lazy(() => import("@/pages/sq/elbasan")),
      services: lazy(() => import("@/pages/sq/elbasan/services")),
      portfolio: lazy(() => import("@/pages/sq/elbasan/portfolio")),
      contact: lazy(() => import("@/pages/sq/elbasan/contact")),
      about: lazy(() => import("@/pages/sq/elbasan/about"))
    }
  },
  {
    name: 'fier',
    pages: {
      home: lazy(() => import("@/pages/sq/fier")),
      services: lazy(() => import("@/pages/sq/fier/services")),
      portfolio: lazy(() => import("@/pages/sq/fier/portfolio")),
      contact: lazy(() => import("@/pages/sq/fier/contact")),
      about: lazy(() => import("@/pages/sq/fier/about"))
    }
  },
  {
    name: 'korce',
    pages: {
      home: lazy(() => import("@/pages/sq/korce")),
      services: lazy(() => import("@/pages/sq/korce/services")),
      portfolio: lazy(() => import("@/pages/sq/korce/portfolio")),
      contact: lazy(() => import("@/pages/sq/korce/contact")),
      about: lazy(() => import("@/pages/sq/korce/about"))
    }
  }
];

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function Router() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingTransition isLoading={isLoading} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="min-h-screen w-full"
        >
          <Suspense fallback={<LoadingTransition isLoading={true} />}>
            <Switch>
              {/* Main routes */}
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/pricing" component={Pricing} />

              {/* Albanian city routes */}
              {cities.map(city => (
                <>
                  <Route path={`/sq/${city.name}`} component={city.pages.home} />
                  <Route path={`/sq/${city.name}/services`} component={city.pages.services} />
                  <Route path={`/sq/${city.name}/portfolio`} component={city.pages.portfolio} />
                  <Route path={`/sq/${city.name}/contact`} component={city.pages.contact} />
                  <Route path={`/sq/${city.name}/about`} component={city.pages.about} />
                </>
              ))}

              {/* 404 route */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  const [location] = useLocation();
  const language = location.startsWith('/sq') ? 'sq' : location.startsWith('/it') ? 'it' : 'en';
  const cityMatch = location.match(/\/(tirane|durres|vlore|shkoder|elbasan|fier|korce)/);
  const cityName = cityMatch ? cityMatch[1] : undefined;

  return (
    <QueryClientProvider client={queryClient}>
      <SEO 
        language={language}
        cityName={cityName}
        neighborhoods={cityName ? getCityNeighborhoods(cityName) : []}
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

// Helper function to get neighborhoods for each city
function getCityNeighborhoods(city: string): string[] {
  const neighborhoods: Record<string, string[]> = {
    tirane: ['Qendër', 'Kombinat', 'Laprakë', 'Kinostudio', 'Selitë'],
    durres: ['Plazh', 'Qendër', 'Currila', 'Kënetë', 'Spitallë'],
    vlore: ['Skelë', 'Uji i Ftohtë', 'Qendër', 'Orikum', 'Radhimë'],
    shkoder: ['Qendër', 'Xhabiej', 'Rus', 'Bahçallek', 'Series'],
    elbasan: ['Qendër', 'Skampa', 'Partizani', '5 Maji', 'Dyli Lili'],
    fier: ['Qendër', 'Apolloni', 'Apolonia', 'Liri', 'Afrim'],
    korce: ['Qendër', 'Barç', 'Kala', 'Piktor', 'Shën Gjergj']
  };
  return neighborhoods[city] || [];
}

export default App;