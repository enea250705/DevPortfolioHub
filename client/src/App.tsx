import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LoadingTransition } from "@/components/loading-transition";
import { SEO } from "@/components/seo";
import { Suspense, lazy } from "react";

// Only import navbar and footer synchronously as they're needed immediately
const Navbar = lazy(() => import("@/components/navbar"));
const Footer = lazy(() => import("@/components/footer").then(mod => ({ default: mod.Footer })));

// Lazy load all pages
const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Minimal loading component
const PageLoading = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <LoadingTransition isLoading={true} />
  </div>
);

function Router() {
  const [location] = useLocation();

  return (
    <LazyMotion features={domAnimation} strict>
      {/* Use motion.div (aliased as m) for better performance */}
      <m.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Suspense fallback={<PageLoading />}>
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
      </m.div>
    </LazyMotion>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SEO />
      <div className="min-h-screen bg-background flex flex-col">
        <Suspense fallback={<div className="h-14 bg-background" />}>
          <Navbar />
        </Suspense>
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Router />
        </main>
        <Suspense fallback={<div className="h-64 bg-background" />}>
          <Footer />
        </Suspense>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;