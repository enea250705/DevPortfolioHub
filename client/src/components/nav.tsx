
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">Services</Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-accent-foreground">Home</Link>
            <Link to="/pricing" className="hover:text-accent-foreground">Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
