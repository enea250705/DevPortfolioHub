import { ContactMessage } from "@shared/schema";

// Interface defining the storage operations
export interface IStorage {
  createContactMessage(message: ContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

// In-memory storage implementation
class MemStorage implements IStorage {
  private contactMessages: ContactMessage[] = [];

  async createContactMessage(message: ContactMessage): Promise<ContactMessage> {
    this.contactMessages.push(message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return this.contactMessages;
  }
}

// Export a single instance to be used throughout the application
export const storage = new MemStorage();