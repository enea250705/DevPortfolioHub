import { Route, Switch, Router, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post";
import BlogPostComplete from "./pages/blog-post-complete";
import BlogPostConversion from "./pages/blog-post-conversion";
import BlogPostInventory from "./pages/blog-post-inventory";
import NotFound from "./pages/not-found";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Pricing from "./pages/pricing";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
// Italian city pages
import NovaraPage from "./pages/it/novara";
import MilanoPage from "./pages/it/milano";
import TorinoPage from "./pages/it/torino";
import BiellaPage from "./pages/it/biella";
import LocationsPage from "./pages/it/locations";
import RomaPage from "./pages/it/roma";

// Component to handle scrolling to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

export default function App() {
  return (
    <Router base="/">
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/improve-inventory-management-custom-web-application" component={BlogPostInventory} />
            <Route path="/blog/case-study-website-increased-conversions" component={BlogPostConversion} />
            <Route path="/blog/complete-website-redesign" component={BlogPostComplete} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/pricing" component={Pricing} />
            {/* Italian city pages */}
            <Route path="/it/novara" component={NovaraPage} />
            <Route path="/it/milano" component={MilanoPage} />
            <Route path="/it/torino" component={TorinoPage} />
            <Route path="/it/biella" component={BiellaPage} />
            <Route path="/it/roma" component={RomaPage} />
            <Route path="/it/locations" component={LocationsPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}