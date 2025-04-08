import React from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";

// Blog post data structure (same as in blog.tsx)
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
          <p>
            In today's rapidly evolving digital landscape, staying ahead of the curve in {post.category.toLowerCase()} is essential for businesses and developers alike.
            This article explores key aspects of {post.title.toLowerCase()} and provides practical insights for implementation.
          </p>
          
          <h2>Introduction</h2>
          <p>{post.excerpt}</p>
          
          <h2>Key Benefits</h2>
          <ul>
            <li>Improved user experience and engagement</li>
            <li>Better conversion rates and business outcomes</li>
            <li>Enhanced technical performance and reliability</li>
            <li>Future-proofing your digital presence</li>
          </ul>
          
          <h2>Implementation Strategies</h2>
          <p>
            When approaching this topic, it's important to consider the specific needs of your project and audience.
            One size does not fit all, and customization is key to success in the competitive digital marketplace.
          </p>
          
          <p>
            The technical implementation will vary depending on your tech stack, but there are common principles that apply across platforms and frameworks.
            Always prioritize clean code, documentation, and scalability in your solutions.
          </p>
          
          <h2>Case Studies</h2>
          <p>
            We've successfully implemented these strategies for clients across various industries, resulting in measurable improvements in key performance indicators.
            From local businesses in Albania to international corporations, the principles remain consistent while the applications differ.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            As we look to the future, the importance of staying updated with the latest trends and best practices cannot be overstated.
            Continuous learning and adaptation are essential for success in the ever-changing digital landscape.
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