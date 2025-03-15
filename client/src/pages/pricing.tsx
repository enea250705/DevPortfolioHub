
import { PricingComparison } from "@/components/pricing-comparison";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Service Packages</h1>
      <p className="text-center text-muted-foreground mb-12">
        Choose the perfect package for your needs
      </p>
      <PricingComparison />
    </div>
  );
}
