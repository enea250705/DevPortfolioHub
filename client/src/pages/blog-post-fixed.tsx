import React from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

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

// Sample blog posts (matching those defined in blog.tsx)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Improve Inventory Management With a Custom Web Application",
    excerpt: "Efficient inventory management can make or break a business. Yet many companies still rely on spreadsheets or manual tracking, leading to errors and lost opportunities. A custom web application tailored to your inventory needs can dramatically improve accuracy, save time, and boost your bottom line.",
    date: "April 8, 2025",
    author: "Enea",
    category: "Web Development",
    tags: ["Inventory Management", "Custom Web Apps", "Business Solutions"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    slug: "improve-inventory-management-custom-web-application"
  }
];

const BlogPost: React.FC = () => {
  const [location] = useLocation();
  const slug = location.split("/")[2]; // Extract slug from URL
  
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Posts
          </Link>
        </Button>
      </div>
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <img 
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center flex-wrap gap-2 ml-auto">
            {post.tags.map(tag => (
              <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Efficient inventory management can make or break a business. Yet many companies still rely on spreadsheets or manual tracking, leading to errors and lost opportunities. A custom web application tailored to your inventory needs can dramatically improve accuracy, save time, and boost your bottom line. In this article, we'll explore common inventory challenges and how a custom web app can solve them, with features to consider and a step-by-step approach to implementation.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Inventory may not be the most glamorous part of business, but it has a direct impact on profit and customer satisfaction. By moving from manual methods to a custom web application, you turn inventory management from a constant headache into a streamlined, intelligent process. You'll benefit from real-time visibility, fewer errors, and data-driven insights that help you stock smarter.
          </p>

          <div className="not-prose mt-8">
            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="flex gap-4 p-4 border rounded-lg hover:bg-accent transition-colors">
                    <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                      <img src={relatedPost.imageUrl} alt={relatedPost.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2">{relatedPost.title}</h4>
                      <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost;