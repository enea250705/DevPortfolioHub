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
    document.title = `${title}${location ? ` in ${location}` : ''} | Top Local Developer`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Top-rated web development services in ${location}. ${description} Leading local expert in web development serving Novara and surrounding areas with global reach.`
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const baseKeywords = [
        // Italian Keywords
        'web development Novara',
        'sviluppo web Novara',
        'web developer Novara',
        'sviluppatore web Novara',
        'siti web Novara',
        'web agency Novara',
        'frontend development Piedmont',
        'backend development Novara',
        'custom websites Novara',
        'Novara tech',
        'Italian web developer',
        // Albanian Keywords
        'zhvillues web Shqiperi',
        'zhvillim web Shqiperi',
        'web developer Albania',
        'programim web Shqiperi',
        'kompani web Shqiperi',
        'website developer Albania',
        // Location specific
        location.toLowerCase().replace(',', ''),
        'web developer',
        'siti web aziendali Novara'
      ];
      const allKeywords = [...baseKeywords, ...keywords].join(', ');
      metaKeywords.setAttribute('content', allKeywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} in ${location} | Top Local Expert`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        `Leading web development services in Novara, Italy and Albania. ${description} Local expertise with global reach.`
      );
    }

  }, [title, description, keywords, location, currentPath]);

  return null;
}