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

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Convert image URL to WebP if it's a JPEG/PNG
  const optimizedImageUrl = imageUrl.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-[250px] overflow-hidden">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <picture>
            <source srcSet={optimizedImageUrl} type="image/webp" />
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
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