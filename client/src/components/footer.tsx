import { Link, useLocation } from "wouter";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/eneaaa__m", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/enea-muja-16b5b9311", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:info@codewithenea.it", label: "Email" },
  ];

  const contactInfo = [
    { label: "info@codewithenea.it", href: "mailto:info@codewithenea.it" },
    { label: "+393761024080", href: "tel:+393761024080" },
    { label: "Milan, IT", href: "#location" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      window.location.href = href;
      return;
    }
  };

  return (
    <footer className="bg-card mt-24 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">
                <span className="gradient-text">CodeWithEnea</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Transforming ideas into digital reality through innovative web development solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span 
                    onClick={() => handleNavigation(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CodeWithEnea. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}