import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  location?: string;
}

export function SEO({ 
  title = "CodeWithEnea - Professional Web Development Services",
  description = "Transform your ideas into digital reality with expert web development services.",
  keywords = [],
  location = "Milan, Italy"
}: SEOProps) {
  const [currentPath] = useLocation();
  
  useEffect(() => {
    // Update meta tags
    document.title = `${title}${location ? ` in ${location}` : ''}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${description} Professional web development services in ${location}.`
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const baseKeywords = [
        'web development',
        'frontend development',
        'backend development',
        'custom websites',
        location.toLowerCase(),
        'web developer'
      ];
      const allKeywords = [...new Set([...baseKeywords, ...keywords])];
      metaKeywords.setAttribute('content', allKeywords.join(', '));
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

  }, [title, description, keywords, location, currentPath]);

  return null;
}
