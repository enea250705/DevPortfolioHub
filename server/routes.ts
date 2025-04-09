import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);

      // Log the submission attempt
      console.log("Contact form submission received:", message);

      // Send email notification
      try {
        console.log("Attempting to send email...");
        await sendContactEmail(message);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue with the response even if email fails
      }

      res.status(201).json(message);
    } catch (error) {
      console.error("Contact form validation error:", error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}