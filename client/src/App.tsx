import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, LazyMotion, domAnimation } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { SEO } from "@/components/seo";
import { Suspense, lazy } from "react";

// Only import critical components eagerly
import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/loading-spinner";

// Lazy load everything else
const Footer = lazy(() => import("@/components/footer" /* webpackPrefetch: true */));
const Home = lazy(() => import("@/pages/home" /* webpackPrefetch: true */));
const Services = lazy(() => import("@/pages/services" /* webpackPrefetch: true */));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation} strict>
        <SEO />
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
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
              </AnimatePresence>
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
        <Toaster />
      </LazyMotion>
    </QueryClientProvider>
  );
}