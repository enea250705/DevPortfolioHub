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

          <h2>Project Requirements</h2>
          <p>
            To ensure successful project completion, clients agree to:
          </p>
          <ul>
            <li>Provide clear project requirements and timely feedback</li>
            <li>Supply necessary content, images, and materials as agreed</li>
            <li>Review and approve deliverables within specified timeframes</li>
            <li>Make payments according to the agreed schedule</li>
          </ul>

          <h2>Project Modifications</h2>
          <p>
            Any changes to the agreed project scope, timeline, or deliverables must be:
          </p>
          <ul>
            <li>Submitted in writing and mutually agreed upon</li>
            <li>May require additional costs and timeline adjustments</li>
            <li>Subject to our capacity and current commitments</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Our payment terms include:
          </p>
          <ul>
            <li>50% upfront deposit before project commencement</li>
            <li>Remaining balance upon project completion</li>
            <li>Additional fees for scope changes or extra revisions</li>
            <li>Late payment fees may apply after 30 days</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any project delays or issues beyond our reasonable control.
          </p>

          <h2>Project Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice if:
          </p>
          <ul>
            <li>The other party breaches these terms</li>
            <li>Project requirements significantly change</li>
            <li>Circumstances make completion impossible</li>
          </ul>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify clients of any material changes by posting the new Terms of Service on this page.
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