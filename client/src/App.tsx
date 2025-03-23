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

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Albanian city pages
const TiranaPage = lazy(() => import("@/pages/sq/tirane"));
const DurresPage = lazy(() => import("@/pages/sq/durres"));
const VloraPage = lazy(() => import("@/pages/sq/vlore"));
const ShkodraPage = lazy(() => import("@/pages/sq/shkoder"));
const ElbasanPage = lazy(() => import("@/pages/sq/elbasan"));
const FierPage = lazy(() => import("@/pages/sq/fier"));
const KorcePage = lazy(() => import("@/pages/sq/korce"));
const AlbanianHomePage = lazy(() => import("@/pages/sq/home"));

function Router() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Simulate loading state on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  // Preload next possible routes
  useEffect(() => {
    const preloadRoutes = () => {
      const routes = ['/services', '/portfolio', '/contact', '/sq/tirane', '/sq/durres', '/sq/vlore'];
      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Preload after initial page load
    window.requestIdleCallback 
      ? window.requestIdleCallback(preloadRoutes) 
      : setTimeout(preloadRoutes, 1000);
  }, []);

  return (
    <>
      <LoadingTransition isLoading={isLoading} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
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

              {/* Albanian routes */}
              <Route path="/sq" component={AlbanianHomePage} />
              <Route path="/sq/tirane" component={TiranaPage} />
              <Route path="/sq/durres" component={DurresPage} />
              <Route path="/sq/vlore" component={VloraPage} />
              <Route path="/sq/shkoder" component={ShkodraPage} />
              <Route path="/sq/elbasan" component={ElbasanPage} />
              <Route path="/sq/fier" component={FierPage} />
              <Route path="/sq/korce" component={KorcePage} />

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

  // Determine current language and location based on path
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
  const neighborhoods = {
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