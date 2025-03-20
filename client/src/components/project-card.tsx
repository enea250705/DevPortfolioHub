import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

function getResponsiveImageUrls(imageUrl: string) {
  // Remove any existing URL parameters
  const baseUrl = imageUrl.split('?')[0];
  return {
    small: `${baseUrl}?auto=format&fit=crop&w=400&q=80&fm=webp`,
    medium: `${baseUrl}?auto=format&fit=crop&w=600&q=80&fm=webp`,
    large: `${baseUrl}?auto=format&fit=crop&w=800&q=80&fm=webp`
  };
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const responsiveUrls = getResponsiveImageUrls(imageUrl);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-[250px] overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={responsiveUrls.large}
              type="image/webp"
            />
            <source
              media="(min-width: 640px)"
              srcSet={responsiveUrls.medium}
              type="image/webp"
            />
            <img
              src={responsiveUrls.small}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              width="400"
              height="250"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader>
          <CardTitle>
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-primary/10 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}