import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Modern Web Development Trends in 2023",
    excerpt: "Explore the latest trends in web development including serverless architecture, JAMstack, and headless CMS solutions.",
    date: "June 15, 2023",
    author: "Enea Jahollari",
    category: "Web Development",
    tags: ["JavaScript", "React", "NextJS"],
    imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b",
    slug: "modern-web-development-trends-2023"
  },
  {
    id: "2",
    title: "Optimizing Website Performance",
    excerpt: "Learn techniques to improve website loading speed, reduce bundle size, and enhance user experience through performance optimization.",
    date: "July 12, 2023",
    author: "Enea Jahollari",
    category: "Performance",
    tags: ["Optimization", "SEO", "Core Web Vitals"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    slug: "optimizing-website-performance"
  },
  {
    id: "3",
    title: "The Importance of SEO for Local Businesses",
    excerpt: "Discover why local SEO is crucial for businesses in Albania and how to improve your local search rankings.",
    date: "August 5, 2023",
    author: "Enea Jahollari",
    category: "SEO",
    tags: ["Local SEO", "Google Business", "Rankings"],
    imageUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    slug: "importance-of-seo-local-businesses"
  },
  {
    id: "4",
    title: "Building Responsive Layouts with Flexbox and Grid",
    excerpt: "A comprehensive guide to creating modern, responsive layouts using CSS Flexbox and Grid layout systems.",
    date: "September 20, 2023",
    author: "Enea Jahollari",
    category: "CSS",
    tags: ["Flexbox", "CSS Grid", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
    slug: "responsive-layouts-flexbox-grid"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Blog
        </motion.h1>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Insights, tutorials, and news about web development, design trends, and technology.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          >
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-3 pt-0">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto group" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="flex items-center space-x-1 text-primary">
                      <span>Read more</span>
                      <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPage;