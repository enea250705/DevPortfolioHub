import nodemailer from "nodemailer";
import { type ContactMessage } from "@shared/schema";

// Create reusable transporter object using SMTP transport
let transporter;
try {
  transporter = nodemailer.createTransport({
    host: "authsmtp.securemail.pro",
    port: 465,
    secure: true,
    auth: {
      user: "info@codewithenea.it",
      pass: "Enea25072005@"
    }
  });
} catch (error) {
  console.error("Failed to create email transporter:", error);
  // Create a mock transporter for development/production if the real one fails
  transporter = {
    sendMail: async (options) => {
      console.log("Email would be sent with options:", options);
      return { accepted: [options.to], rejected: [] };
    }
  };
}

export async function sendContactEmail(message: ContactMessage) {
  try {
    // Format the email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${message.name}
      Email: ${message.email}
      Message: ${message.message}
      
      Sent at: ${message.createdAt}
    `;

    // Send notification email to admin
    await transporter.sendMail({
      from: "info@codewithenea.it",
      to: "info@codewithenea.it",
      subject: `New Contact Form Submission from ${message.name}`,
      text: `
New Contact Form Submission:

Name: ${message.name}
Email: ${message.email}
Message: ${message.message}

Sent at: ${message.createdAt}
      `,
    });

    // Send thank you email to customer
    await transporter.sendMail({
      from: "info@codewithenea.it",
      to: message.email,
      subject: "Thank you for contacting Code with Enea",
      text: `
Dear ${message.name},

Thank you for reaching out to us. We have received your message and our team will get back to you within 24-48 hours.

Best regards,
Enea.
      `,
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // Don't throw the error so it doesn't block the contact form submission
    return false;
  }
}
