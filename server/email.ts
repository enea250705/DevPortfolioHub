import nodemailer from "nodemailer";
import { type ContactMessage } from "@shared/schema";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "authsmtp.securemail.pro",
  port: 465,
  secure: true,
  auth: {
    user: "info@codewithenea.it",
    pass: "Israa10022006@"
  },
  debug: true // Enable debug output
});

// Verify SMTP connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error("SMTP verification failed:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

export async function sendContactEmail(message: ContactMessage) {
  try {
    console.log("Preparing email content for:", message.email);
    
    // Format the email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${message.name}
      Email: ${message.email}
      Message: ${message.message}
      
      Sent at: ${message.createdAt}
    `;

    console.log("Sending notification email to admin");
    // Send notification email to admin
    const adminMailResponse = await transporter.sendMail({
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
    
    console.log("Admin email sent:", adminMailResponse.response);

    console.log("Sending thank you email to customer:", message.email);
    // Send thank you email to customer
    const customerMailResponse = await transporter.sendMail({
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
    
    console.log("Customer email sent:", customerMailResponse.response);
    
    return { adminMail: adminMailResponse, customerMail: customerMailResponse };
  } catch (error) {
    console.error("Error in sendContactEmail function:", error);
    throw error; // Re-throw to allow handling in the route
  }
}
