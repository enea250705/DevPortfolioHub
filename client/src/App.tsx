import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, LazyMotion, domAnimation } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LoadingTransition } from "@/components/loading-transition";
import { SEO } from "@/components/seo";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense, lazy, useState, useEffect } from "react";

// Lazy load non-critical pages
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/pricing" component={Pricing} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation}>
        <SEO />
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </LazyMotion>
    </QueryClientProvider>
  );
}

export default App;