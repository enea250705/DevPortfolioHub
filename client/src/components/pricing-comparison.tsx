import dynamic from 'next/dynamic';

const CheckCircle2 = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle2));
const XCircle = dynamic(() => import('lucide-react').then(mod => mod.XCircle));
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const pricingTiers = [
  {
    name: "Basic",
    price: 499,
    description: "Perfect for small projects",
    features: [
      "Web Development",
      "Basic SEO",
      "Mobile Responsive",
      "3 Revisions",
      "1 Month Support",
    ],
    included: [true, true, true, true, true],
  },
  {
    name: "Professional",
    price: 999,
    description: "Ideal for growing businesses",
    features: [
      "Web Development",
      "Advanced SEO",
      "Mobile Responsive",
      "Unlimited Revisions",
      "3 Months Support",
      "Performance Optimization",
      "Analytics Integration",
    ],
    included: [true, true, true, true, true, true, true],
  },
  {
    name: "Enterprise",
    price: 1999,
    description: "For large-scale applications",
    features: [
      "Custom Web Development",
      "Enterprise SEO",
      "Mobile Responsive",
      "Unlimited Revisions",
      "12 Months Support",
      "Performance Optimization",
      "Analytics Integration",
      "24/7 Priority Support",
      "Custom Features",
    ],
    included: [true, true, true, true, true, true, true, true, true],
  },
];

export function PricingComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pricingTiers.map((tier) => (
        <Card key={tier.name} className="p-6">
          <h3 className="text-2xl font-bold">{tier.name}</h3>
          <div className="mt-4">
            <div className="text-3xl font-bold">${tier.price}</div>
            <div className="text-sm text-muted-foreground mt-1">
              50% upfront (${tier.price / 2})<br />
              50% upon completion (${tier.price / 2})
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">{tier.description}</p>
          <ul className="mt-6 space-y-4">
            {tier.features.map((feature, index) => (
              <li key={feature} className="flex items-center gap-2">
                {tier.included[index] ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild className="w-full mt-6">
            <Link href={`/contact?plan=${tier.name}`}>Start Your Project</Link>
          </Button>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Secure 50/50 payment plan available
          </p>
        </Card>
      ))}
    </div>
  );
}