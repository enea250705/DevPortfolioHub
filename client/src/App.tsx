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
const Blog = lazy(() => import("@/pages/blog"));
// Blog posts - we need conditional loading based on the slug
const BlogPostInventory = lazy(() => import("@/pages/blog-post-inventory"));
const BlogPostConversion = lazy(() => import("@/pages/blog-post-conversion"));
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
              <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">
                <LoadingTransition isLoading={true} />
              </div>}>
                <Switch>
                  {/* City-specific routes first */}
                  <Route path="/sq/tirane">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <TiraneIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/tirane/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <TiraneServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/tirane/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <TiranePortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/tirane/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <TiraneContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/tirane/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <TiraneAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/durres">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <DurresIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/durres/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <DurresServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/durres/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <DurresPortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/durres/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <DurresContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/durres/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <DurresAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/vlore">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <VloreIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/vlore/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <VloreServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/vlore/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <VlorePortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/vlore/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <VloreContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/vlore/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <VloreAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/shkoder">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ShkoderIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/shkoder/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ShkoderServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/shkoder/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ShkoderPortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/shkoder/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ShkoderContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/shkoder/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ShkoderAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/elbasan">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ElbasanIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/elbasan/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ElbasanServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/elbasan/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ElbasanPortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/elbasan/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ElbasanContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/elbasan/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <ElbasanAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/fier">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <FierIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/fier/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <FierServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/fier/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <FierPortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/fier/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <FierContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/fier/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <FierAbout />
                    </Suspense>
                  </Route>
                  <Route path="/sq/korce">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <KorceIndex />
                    </Suspense>
                  </Route>
                  <Route path="/sq/korce/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <KorceServices />
                    </Suspense>
                  </Route>
                  <Route path="/sq/korce/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <KorcePortfolio />
                    </Suspense>
                  </Route>
                  <Route path="/sq/korce/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <KorceContact />
                    </Suspense>
                  </Route>
                  <Route path="/sq/korce/about">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <KorceAbout />
                    </Suspense>
                  </Route>

                  {/* Main routes */}
                  <Route path="/">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Home />
                    </Suspense>
                  </Route>
                  <Route path="/services">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Services />
                    </Suspense>
                  </Route>
                  <Route path="/portfolio">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Portfolio />
                    </Suspense>
                  </Route>
                  <Route path="/contact">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Contact />
                    </Suspense>
                  </Route>
                  <Route path="/privacy">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Privacy />
                    </Suspense>
                  </Route>
                  <Route path="/terms">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Terms />
                    </Suspense>
                  </Route>
                  <Route path="/pricing">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Pricing />
                    </Suspense>
                  </Route>
                  <Route path="/blog">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <Blog />
                    </Suspense>
                  </Route>
                  <Route path="/blog/improve-inventory-management-custom-web-application">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <BlogPostInventory />
                    </Suspense>
                  </Route>
                  <Route path="/blog/case-study-website-increased-conversions">
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <BlogPostConversion />
                    </Suspense>
                  </Route>

                  {/* 404 route */}
                  <Route>
                    <Suspense fallback={<LoadingTransition isLoading={true} />}>
                      <NotFound />
                    </Suspense>
                  </Route>
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