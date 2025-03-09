import nodemailer from "nodemailer";
import { type ContactMessage } from "@shared/schema";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "your-email@gmail.com",
    pass: process.env.SMTP_PASS || "your-app-specific-password"
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
