import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { m } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

function getResponsiveImageUrls(imageUrl: string) {
  const baseUrl = imageUrl.split('?')[0];
  return {
    tiny: `${baseUrl}?auto=format&fit=crop&w=200&q=75&fm=webp&blur=200`,
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
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-[250px] overflow-hidden">
          <img
            src={responsiveUrls.tiny}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
            aria-hidden="true"
          />
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={responsiveUrls.large}
              type="image/webp"
            />
            <source
              media="(min-width: 1024px)"
              srcSet={responsiveUrls.medium}
              type="image/webp"
            />
            <img
              src={responsiveUrls.small}
              alt={title}
              className={`relative w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              width="400"
              height="250"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader>
          <CardTitle>
            <m.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </m.span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <m.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-primary/10 transition-colors"
              >
                {tech}
              </m.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
}