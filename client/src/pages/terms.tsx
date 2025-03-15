import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: March 15, 2025</p>

      <Card>
        <CardContent className="prose prose-neutral dark:prose-invert pt-6">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2>Services</h2>
          <p>
            We provide web development and related services. The specific scope, deliverables, and timeline for services will be agreed upon in separate written agreements or statements of work.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            Upon full payment, clients receive ownership rights to the final deliverables. However, we retain ownership of:
          </p>
          <ul>
            <li>Any pre-existing materials used in creating deliverables</li>
            <li>Any unused concepts or proposals</li>
            <li>The rights to use the work in our portfolio</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Use our services in compliance with applicable laws</li>
            <li>Pay agreed-upon fees in a timely manner</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
          </p>

          <h2>Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at:
            <br />
            Email: info@codewithenea.it
            <br />
            Phone: +393761024080
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
