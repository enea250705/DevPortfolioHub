import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: March 15, 2025</p>

      <Card>
        <CardContent className="prose prose-neutral dark:prose-invert pt-6">
          <h2>Introduction</h2>
          <p>
            At CodeWithEnea, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Messages you send through our contact form</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and communication</li>
            <li>Provide and improve our services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
