import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LoadingTransition } from "@/components/loading-transition";
import { SEO } from "@/components/seo";
import { Suspense, lazy, useState, useEffect } from "react";
import React from 'react';

// Load Navbar and Footer immediately as they're critical UI components
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

// Lazy load all pages and non-critical components
const Home = lazy(() => import("@/pages/home" /* webpackChunkName: "home" */));
const Services = lazy(() => import("@/pages/services" /* webpackChunkName: "services" */));
const Portfolio = lazy(() => import("@/pages/portfolio" /* webpackChunkName: "portfolio" */));
const Contact = lazy(() => import("@/pages/contact" /* webpackChunkName: "contact" */));
const Privacy = lazy(() => import("@/pages/privacy" /* webpackChunkName: "privacy" */));
const Terms = lazy(() => import("@/pages/terms" /* webpackChunkName: "terms" */));
const Pricing = lazy(() => import("@/pages/pricing" /* webpackChunkName: "pricing" */));
const NotFound = lazy(() => import("@/pages/not-found" /* webpackChunkName: "not-found" */));

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Page Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="text-muted-foreground">Please try refreshing the page</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function Router() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Show loading state during route transitions
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingTransition isLoading={isLoading} />
      <AnimatePresence mode="wait">
        <m.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <ErrorBoundary>
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
          </ErrorBoundary>
        </m.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation} strict>
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