import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Feature {
  id: string;
  name: string;
  price: number;
}

const additionalFeatures: Feature[] = [
  { id: "seo", name: "Search Engine Optimization", price: 499 },
  { id: "analytics", name: "Advanced Analytics Integration", price: 299 },
  { id: "cms", name: "Content Management System", price: 799 },
  { id: "maintenance", name: "Monthly Maintenance", price: 199 },
  { id: "security", name: "Enhanced Security Features", price: 399 },
];

export function PricingCalculator() {
  const [basePackage, setBasePackage] = useState<string>("professional");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const getBasePrice = () => {
    switch (basePackage) {
      case "basic": return 999;
      case "professional": return 2499;
      case "enterprise": return 4999;
      default: return 2499;
    }
  };

  const calculateTotal = () => {
    const basePrice = getBasePrice();
    const additionalCost = selectedFeatures.reduce((total, featureId) => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    return basePrice + additionalCost;
  };

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Custom Package Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Select Base Package</Label>
          <div className="grid grid-cols-3 gap-4">
            {["basic", "professional", "enterprise"].map((pkg) => (
              <Button
                key={pkg}
                variant={basePackage === pkg ? "default" : "outline"}
                onClick={() => setBasePackage(pkg)}
                className="capitalize"
              >
                {pkg}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-lg font-semibold">Additional Features</Label>
          <div className="grid gap-4">
            {additionalFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-3">
                <Checkbox
                  id={feature.id}
                  checked={selectedFeatures.includes(feature.id)}
                  onCheckedChange={(checked) => {
                    setSelectedFeatures(
                      checked
                        ? [...selectedFeatures, feature.id]
                        : selectedFeatures.filter(id => id !== feature.id)
                    );
                  }}
                />
                <Label htmlFor={feature.id} className="flex-1">
                  {feature.name}
                </Label>
                <span className="text-muted-foreground">${feature.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Estimated Total:</span>
            <span className="text-2xl font-bold">${calculateTotal()}</span>
          </div>
          <Button asChild className="w-full">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
