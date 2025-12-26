import { PricingComparison } from "@/components/pricing-comparison";
import { PricingCalculator } from "@/components/pricing-calculator";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { SEO } from "@/components/seo";

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Pricing - Web Development Services Packages"
        description="Transparent pricing for professional web development services. Choose from our service packages or request a custom quote for your project."
        keywords={['web development pricing', 'web developer cost', 'website development price', 'custom web app pricing']}
        location="Novara, Italy"
        language="en"
      />
      <PageBreadcrumb />
      <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Service Packages</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect package for your needs or build a custom solution
        </p>
      </div>

      <PricingComparison />
      <PricingCalculator />
    </div>
    </>
  );
}