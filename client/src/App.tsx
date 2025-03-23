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

// Static imports for city pages
const TiraneIndex = lazy(() => import("./pages/sq/tirane/index"));
const TiraneServices = lazy(() => import("./pages/sq/tirane/services"));
const TiranePortfolio = lazy(() => import("./pages/sq/tirane/portfolio"));
const TiraneContact = lazy(() => import("./pages/sq/tirane/contact"));
const TiraneAbout = lazy(() => import("./pages/sq/tirane/about"));

const DurresIndex = lazy(() => import("./pages/sq/durres/index"));
const DurresServices = lazy(() => import("./pages/sq/durres/services"));
const DurresPortfolio = lazy(() => import("./pages/sq/durres/portfolio"));
const DurresContact = lazy(() => import("./pages/sq/durres/contact"));
const DurresAbout = lazy(() => import("./pages/sq/durres/about"));

const VloreIndex = lazy(() => import("./pages/sq/vlore/index"));
const VloreServices = lazy(() => import("./pages/sq/vlore/services"));
const VlorePortfolio = lazy(() => import("./pages/sq/vlore/portfolio"));
const VloreContact = lazy(() => import("./pages/sq/vlore/contact"));
const VloreAbout = lazy(() => import("./pages/sq/vlore/about"));

const ShkoderIndex = lazy(() => import("./pages/sq/shkoder/index"));
const ShkoderServices = lazy(() => import("./pages/sq/shkoder/services"));
const ShkoderPortfolio = lazy(() => import("./pages/sq/shkoder/portfolio"));
const ShkoderContact = lazy(() => import("./pages/sq/shkoder/contact"));
const ShkoderAbout = lazy(() => import("./pages/sq/shkoder/about"));

const ElbasanIndex = lazy(() => import("./pages/sq/elbasan/index"));
const ElbasanServices = lazy(() => import("./pages/sq/elbasan/services"));
const ElbasanPortfolio = lazy(() => import("./pages/sq/elbasan/portfolio"));
const ElbasanContact = lazy(() => import("./pages/sq/elbasan/contact"));
const ElbasanAbout = lazy(() => import("./pages/sq/elbasan/about"));

const FierIndex = lazy(() => import("./pages/sq/fier/index"));
const FierServices = lazy(() => import("./pages/sq/fier/services"));
const FierPortfolio = lazy(() => import("./pages/sq/fier/portfolio"));
const FierContact = lazy(() => import("./pages/sq/fier/contact"));
const FierAbout = lazy(() => import("./pages/sq/fier/about"));

const KorceIndex = lazy(() => import("./pages/sq/korce/index"));
const KorceServices = lazy(() => import("./pages/sq/korce/services"));
const KorcePortfolio = lazy(() => import("./pages/sq/korce/portfolio"));
const KorceContact = lazy(() => import("./pages/sq/korce/contact"));
const KorceAbout = lazy(() => import("./pages/sq/korce/about"));


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

                  {/* Tiranë routes */}
                  <Route path="/sq/tirane" component={TiraneIndex} />
                  <Route path="/sq/tirane/services" component={TiraneServices} />
                  <Route path="/sq/tirane/portfolio" component={TiranePortfolio} />
                  <Route path="/sq/tirane/contact" component={TiraneContact} />
                  <Route path="/sq/tirane/about" component={TiraneAbout} />

                  {/* Durrës routes */}
                  <Route path="/sq/durres" component={DurresIndex} />
                  <Route path="/sq/durres/services" component={DurresServices} />
                  <Route path="/sq/durres/portfolio" component={DurresPortfolio} />
                  <Route path="/sq/durres/contact" component={DurresContact} />
                  <Route path="/sq/durres/about" component={DurresAbout} />

                  {/* Vlorë routes */}
                  <Route path="/sq/vlore" component={VloreIndex} />
                  <Route path="/sq/vlore/services" component={VloreServices} />
                  <Route path="/sq/vlore/portfolio" component={VlorePortfolio} />
                  <Route path="/sq/vlore/contact" component={VloreContact} />
                  <Route path="/sq/vlore/about" component={VloreAbout} />

                  {/* Shkodër routes */}
                  <Route path="/sq/shkoder" component={ShkoderIndex} />
                  <Route path="/sq/shkoder/services" component={ShkoderServices} />
                  <Route path="/sq/shkoder/portfolio" component={ShkoderPortfolio} />
                  <Route path="/sq/shkoder/contact" component={ShkoderContact} />
                  <Route path="/sq/shkoder/about" component={ShkoderAbout} />

                  {/* Elbasan routes */}
                  <Route path="/sq/elbasan" component={ElbasanIndex} />
                  <Route path="/sq/elbasan/services" component={ElbasanServices} />
                  <Route path="/sq/elbasan/portfolio" component={ElbasanPortfolio} />
                  <Route path="/sq/elbasan/contact" component={ElbasanContact} />
                  <Route path="/sq/elbasan/about" component={ElbasanAbout} />

                  {/* Fier routes */}
                  <Route path="/sq/fier" component={FierIndex} />
                  <Route path="/sq/fier/services" component={FierServices} />
                  <Route path="/sq/fier/portfolio" component={FierPortfolio} />
                  <Route path="/sq/fier/contact" component={FierContact} />
                  <Route path="/sq/fier/about" component={FierAbout} />

                  {/* Korçë routes */}
                  <Route path="/sq/korce" component={KorceIndex} />
                  <Route path="/sq/korce/services" component={KorceServices} />
                  <Route path="/sq/korce/portfolio" component={KorcePortfolio} />
                  <Route path="/sq/korce/contact" component={KorceContact} />
                  <Route path="/sq/korce/about" component={KorceAbout} />


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