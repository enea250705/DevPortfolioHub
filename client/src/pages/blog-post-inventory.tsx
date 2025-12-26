import React from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { PageBreadcrumb } from "@/components/page-breadcrumb";

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
  },
  {
    id: "2",
    title: "Case Study: How a New Website Increased Conversions by 40%",
    excerpt: "In today's digital-first market, a company's website is often the prime driver of sales and leads. This case study explores how one business transformed their outdated website into a high-converting marketing machine through strategic redesign and optimization.",
    date: "April 10, 2025",
    author: "Enea",
    category: "Case Study",
    tags: ["Web Design", "Conversion Optimization", "Business Growth"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    slug: "case-study-website-increased-conversions"
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
      <PageBreadcrumb />
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
            Efficient inventory management can make or break a business. Yet many companies still rely on spreadsheets or manual tracking, leading to errors and lost opportunities. A custom web application tailored to your inventory needs can dramatically improve accuracy, save time, and boost your bottom line.
          </p>
          
          <h2>The Challenges of Manual Inventory Management</h2>
          <p>If you're managing inventory with pen-and-paper or basic spreadsheets, you've likely encountered these issues:</p>
          
          <ul>
            <li><strong>Inaccurate Stock Counts:</strong> Manual updates are prone to error – items get missed or miscounted. This leads to discrepancies between what's recorded and what's actually on the shelf.</li>
            
            <li><strong>Stockouts and Overstock:</strong> Without real-time visibility, it's hard to balance supply and demand. You might reorder too late and run out of popular items, missing sales. Or you overstock slow-moving products, tying up capital in surplus inventory.</li>
            
            <li><strong>Lack of Real-Time Visibility:</strong> Spreadsheets updated weekly (or even daily) can't show the current status. This lag means you can't reliably promise customers an item is in stock. It also prohibits accurate forecasting – if you can't see trends in real time, you can't react quickly.</li>
            
            <li><strong>Inefficient Processes:</strong> Staff spend hours on data entry, checking inventory in multiple systems, or trying to consolidate information from sales, purchasing, and warehouse logs. These labor-intensive processes are time-consuming and error-prone.</li>
            
            <li><strong>Integration Gaps:</strong> Inventory doesn't exist in a vacuum. It connects to sales (e.g., your e-commerce site or POS system), procurement, and finance. Using disconnected tools or manual methods makes it hard to synchronize data.</li>
          </ul>
          
          <h3>Real-World Impact:</h3>
          <p>
            These challenges cost real money. Industry estimates suggest businesses typically have 20-30% of their working capital tied up in inventory. Poor management can lead to 3-5% annual inventory shrinkage (lost, damaged, or stolen goods). Meanwhile, stockouts can cause immediate revenue loss and, worse, damage customer relationships – 70-90% of shoppers who encounter an out-of-stock item will take their business elsewhere rather than wait.
          </p>
          
          <h2>Why a Custom Web Application Makes a Difference</h2>
          <p>
            While there are many off-the-shelf inventory solutions, a custom web application offers specific advantages. It can be built around your workflow, not vice versa. It can integrate perfectly with your existing systems. And it can scale from straightforward tracking to sophisticated forecasting as your needs evolve.
          </p>
          
          <ul>
            <li><strong>Centralized Dashboard:</strong> A homepage that gives a quick overview – total inventory value, today's orders, items low in stock, and any alerts.</li>
            
            <li><strong>Real-Time Inventory Updates:</strong> Every sale, return, delivery, or adjustment should update the system instantly.</li>
            
            <li><strong>Low-Stock Alerts & Auto Reorder:</strong> The system should notify the right person when items hit a threshold. You could configure rules like "If Product X drops below 10 units, create purchase order draft."</li>
            
            <li><strong>Barcode/QR Code Integration:</strong> Generate and scan barcodes for receiving and shipping goods. Using a tablet or phone camera with the web app can allow quick scanning to update counts.</li>
            
            <li><strong>Multi-Location Support:</strong> If you have multiple stores or warehouses, the app should track inventory per location and allow transfers.</li>
            
            <li><strong>User Roles and Permissions:</strong> Not everyone should access everything. For instance, warehouse staff might update quantities, but only managers approve purchase orders.</li>
            
            <li><strong>Historical Data & Reporting:</strong> Beyond current status, store all historical transactions. This lets you run reports like "inventory turnover rate," "shrinkage (loss) over time," or "forecast vs actual demand."</li>
            
            <li><strong>Mobile Accessibility:</strong> Since a web app can be made responsive, employees with tablets or smartphones on the warehouse floor can use it.</li>
            
            <li><strong>Integration Hooks:</strong> Plan for APIs or import/export functions so the app can talk to other systems.</li>
          </ul>
          
          <p>
            By incorporating these features, your custom system will cover the full spectrum from day-to-day ease of use to strategic planning capabilities.
          </p>
          
          <h2>Step-by-Step: Implementing a Custom Inventory Management System</h2>
          <p>
            Embarking on developing a custom solution might seem daunting. Here's a step-by-step roadmap to guide the process:
          </p>
          
          <ol>
            <li><strong>Requirements Gathering:</strong> Start by auditing your current inventory processes. Document what works and what doesn't. Engage the end-users (warehouse staff, purchasing managers, sales team) to understand their pain points. Make a wishlist of features and prioritize them.</li>
            
            <li><strong>Design & Planning:</strong> With requirements in hand, work with a developer or development team to design the application architecture. Decide on the tech stack (frontend, backend, database) that suits your environment. Ensure the design is scalable (can handle more products, users, transactions in the future).</li>
            
            <li><strong>Development & Testing:</strong> Start building the application in iterations. Involve actual users for feedback. Rigorously test for edge cases and ensure compatibility across devices.</li>
            
            <li><strong>Data Migration:</strong> Plan how to get existing data into the new app. This might involve cleaning data (removing duplicate entries, standardizing product codes).</li>
            
            <li><strong>Training & Adoption:</strong> Conduct training sessions with all inventory-related staff. Highlight the benefits and demonstrate how to perform their daily tasks in the new app.</li>
            
            <li><strong>Go Live and Iterate:</strong> Launch fully once everything checks out. Monitor the system closely in the early days: Are inventory levels matching reality? Any sync issues with other systems? Over time, continue to iterate. Use the reporting features to identify further optimization opportunities.</li>
          </ol>
          
          <h2>Case Study: Inventory Transformation in Action</h2>
          <p>
            To illustrate the impact, let's consider a hypothetical (but realistic) example:
          </p>
          
          <h3>Company Background:</h3>
          <p>
            "ABC Electronics" is a mid-sized retailer selling consumer electronics through two physical stores and an online shop. Initially, they managed inventory in spreadsheets and a basic off-the-shelf software that wasn't well integrated. They faced frequent issues: a popular phone model would sell out online but still show as available in-store (causing order cancelations), and storage rooms were filled with outdated accessories that nobody realized were overstocked.
          </p>
          
          <h3>Solution Implemented:</h3>
          <p>
            ABC Electronics invested in a custom web inventory app. Key features included real-time syncing between online and store sales, a centralized product database, and automatic low-stock alerts. The app was integrated with their POS systems at both stores and with the online order system. They also added a predictive restocking module – using 2 years of sales data to forecast demand for each product and suggest optimal reorder times.
          </p>
          
          <h3>Results After 6 Months:</h3>
          <ul>
            <li>Inventory accuracy climbed to over 98%, meaning almost no surprises during physical counts.</li>
            <li>Stockouts for fast-moving items dropped sharply – the system would flag low stock and create an order suggestion which managers quickly approved.</li>
            <li>Sales grew by 18% within six months due to improved stock availability and reduced out-of-stock scenarios.</li>
            <li>Employee efficiency increased. The purchasing team saved hours each week by automating processes. Warehouse staff used tablets to receive shipments – scanning barcodes to instantly add to inventory – reducing order processing time by about 40%.</li>
          </ul>
          
          <h2>Conclusion: A Competitive Edge Through Better Inventory Management</h2>
          <p>
            Inventory may not be the most glamorous part of business, but it has a direct impact on profit and customer satisfaction. By moving from manual methods to a custom web application, you turn inventory management from a constant headache into a streamlined, intelligent process. You'll benefit from real-time visibility, fewer errors, and data-driven insights that help you stock smarter.
          </p>
          
          <h3>Takeaway:</h3>
          <p>
            Don't let poor inventory processes undermine your business. With the technology and expertise available today, even smaller companies can afford to implement robust inventory systems. The result is often higher profitability and smoother operations, as inventory becomes one less thing to worry about. If you're ready to explore a custom inventory management solution, reach out to professionals who can tailor it to your needs.
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