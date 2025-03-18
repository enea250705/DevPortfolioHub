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
  location = "Novara, Italy"
}: SEOProps) {
  const [currentPath] = useLocation();

  useEffect(() => {
    // Update meta tags
    document.title = `${title}${location ? ` in ${location}` : ''}`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Leading web development services in ${location}. ${description} Professional web development expertise serving clients globally from our base in Novara.`
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const baseKeywords = [
        'web development Novara',
        'sviluppo web Novara',
        'web developer Novara',
        'custom websites Novara',
        'frontend development Italy',
        'backend development Novara',
        'international web development',
        'global web solutions',
        location.toLowerCase(),
        'web developer'
      ];
      const allKeywords = [...new Set([...baseKeywords, ...keywords])];
      metaKeywords.setAttribute('content', allKeywords.join(', '));
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} in ${location} | Global Web Solutions`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        `Expert web development services based in Novara, Italy. ${description} Serving clients worldwide.`
      );
    }

  }, [title, description, keywords, location, currentPath]);

  return null;
}