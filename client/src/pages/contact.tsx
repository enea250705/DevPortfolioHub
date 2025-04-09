import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

// Define schema locally to avoid import issues
const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactMessage = z.infer<typeof contactMessageSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const selectedPlan = searchParams.get('plan');

  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: selectedPlan 
        ? `I'm interested in the ${selectedPlan} package.`
        : "",
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactMessage) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
      });
    },
  });

  const onSubmit = (data: ContactMessage) => {
    mutation.mutate(data);
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/eneaaa__m" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/enea-muja-16b5b9311" },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div 
        className="space-y-8"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="text-muted-foreground">
            Have a project in mind? I'm here to help turn your ideas into reality.
          </p>
        </motion.div>

        {selectedPlan && (
          <div className="mb-6 p-4 bg-primary/5 rounded-lg">
            <p className="font-medium">Selected Plan: {selectedPlan}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Once you submit this form, we'll review your project requirements and confirm the final quote.
              The project will begin after the initial 50% payment is received.
            </p>
          </div>
        )}

        <motion.div className="space-y-6" variants={fadeInUp}>
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@codewithenea.it</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+393761024080</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Milan, IT</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="flex gap-4" variants={fadeInUp}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="bg-card rounded-lg p-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full relative overflow-hidden"
              disabled={mutation.isPending}
            >
              <motion.span
                initial={false}
                animate={{
                  opacity: mutation.isPending ? 0 : 1,
                  y: mutation.isPending ? 20 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.span>
              {mutation.isPending && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Sending...
                </motion.div>
              )}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}