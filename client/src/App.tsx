import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LoadingTransition } from "@/components/loading-transition";
import { SEO } from "@/components/seo";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense, lazy } from "react";

// Lazy load main pages
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
      ease: [0.22, 1, 0.36, 1]
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

function App() {
  const [location] = useLocation();
  const language = location.startsWith('/sq') ? 'sq' : location.startsWith('/it') ? 'it' : 'en';
  const cityMatch = location.match(/\/sq\/(tirane|durres|vlore|shkoder|elbasan|fier|korce)/);
  const cityName = cityMatch ? cityMatch[1] : undefined;

  return (
    <QueryClientProvider client={queryClient}>
      <SEO 
        language={language}
        cityName={cityName}
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
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
                  {['tirane', 'durres', 'vlore', 'shkoder', 'elbasan', 'fier', 'korce'].map(city => (
                    <>
                      <Route 
                        path={`/sq/${city}`} 
                        component={lazy(() => import(`@/pages/sq/${city}/index`))} 
                      />
                      <Route 
                        path={`/sq/${city}/services`} 
                        component={lazy(() => import(`@/pages/sq/${city}/services`))} 
                      />
                      <Route 
                        path={`/sq/${city}/portfolio`} 
                        component={lazy(() => import(`@/pages/sq/${city}/portfolio`))} 
                      />
                      <Route 
                        path={`/sq/${city}/contact`} 
                        component={lazy(() => import(`@/pages/sq/${city}/contact`))} 
                      />
                      <Route 
                        path={`/sq/${city}/about`} 
                        component={lazy(() => import(`@/pages/sq/${city}/about`))} 
                      />
                    </>
                  ))}

                  {/* 404 route */}
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;