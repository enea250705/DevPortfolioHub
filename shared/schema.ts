import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  plan: z.string().optional(),
  createdAt: z.string().default(() => new Date().toISOString()),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;