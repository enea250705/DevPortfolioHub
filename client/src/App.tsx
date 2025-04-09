import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Blog from "./pages/blog";
import NotFound from "./pages/not-found";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Pricing from "./pages/pricing";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/pricing" component={Pricing} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}