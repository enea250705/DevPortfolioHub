import nodemailer from "nodemailer";
import { type ContactMessage } from "@shared/schema";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "authsmtp.securemail.pro",
  port: 465,
  secure: true,
  auth: {
    user: "info@codewithenea.it",
    pass: "Enea25072005@"
  }
});

export async function sendContactEmail(message: ContactMessage) {
  // Format the email content
  const emailContent = `
    New Contact Form Submission:
    
    Name: ${message.name}
    Email: ${message.email}
    Message: ${message.message}
    
    Sent at: ${message.createdAt}
  `;

  // Send email
  await transporter.sendMail({
    from: process.env.SMTP_USER || "your-email@gmail.com",
    to: "contact@codewithenea.it",
    subject: `New Contact Form Submission from ${message.name}`,
    text: emailContent,
  });
}
