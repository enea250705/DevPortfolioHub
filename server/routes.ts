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

      // Send email notification
      try {
        await sendContactEmail(message);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue with the response even if email fails
      }

      res.status(201).json(message);
    } catch (error) {
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