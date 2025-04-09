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

export default function App() {
  return (
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}