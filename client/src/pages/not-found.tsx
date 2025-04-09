import { Link, useLocation } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function NotFound() {
  const [location] = useLocation();
  
  useEffect(() => {
    console.log("Not Found page rendered for path:", location);
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertCircle className="h-20 w-20 text-destructive mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold tracking-tight mb-2">Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Current path: <code className="bg-muted px-2 py-1 rounded">{location}</code>
      </p>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
