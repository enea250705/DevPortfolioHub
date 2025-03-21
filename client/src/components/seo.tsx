import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  location?: string;
  language?: 'en' | 'it' | 'sq';
  cityName?: string;
  neighborhoods?: string[];
}

export function SEO({ 
  title = "CodeWithEnea - Professional Web Development Services",
  description = "Transform your ideas into digital reality with expert web development services.",
  keywords = [],
  location = "Novara, Italy",
  language = 'en',
  cityName,
  neighborhoods = []
}: SEOProps) {
  const [currentPath] = useLocation();

  useEffect(() => {
    // Update document language
    document.documentElement.lang = language;

    // Generate local business schema for Albanian cities
    if (language === 'sq' && cityName) {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `CodeWithEnea - Zhvillues Web në ${cityName}`,
        "description": `Shërbime profesionale të zhvillimit web në ${cityName}. ${description}`,
        "@id": `https://codewithenea.it/sq/${cityName.toLowerCase()}`,
        "url": `https://codewithenea.it/sq/${cityName.toLowerCase()}`,
        "telephone": "+393761024080",
        "email": "info@codewithenea.it",
        "areaServed": neighborhoods,
        "priceRange": "€€",
        "knowsLanguage": ["sq", "en", "it"]
      };

      let scriptTag = document.querySelector('#local-business-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'local-business-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(localBusinessSchema);
    }

    // Add news article schema for fresh content signals
    if (language === 'sq' && cityName) {
      const newsArticleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": `Zhvillues Web Profesional në ${cityName}`,
        "datePublished": "2025-03-21T08:00:00+01:00",
        "dateModified": "2025-03-21T08:00:00+01:00",
        "description": `Shërbime profesionale të zhvillimit web në ${cityName}. ${description}`,
        "author": {
          "@type": "Person",
          "name": "Enea Muja"
        }
      };

      let scriptTag = document.querySelector('#news-article-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'news-article-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(newsArticleSchema);
    }

    // Generate breadcrumb data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://codewithenea.it"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": cityName || location,
          "item": `https://codewithenea.it/${language}/${cityName?.toLowerCase() || ''}`
        }
      ]
    };

    // Update meta tags
    document.title = `${title}${location ? ` in ${location}` : ''} | ${
      language === 'sq' ? 'Zhvillues Web Profesional' : 'Top Local Developer'
    }`;

    // Update meta description with location-specific content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const localizedDesc = language === 'sq'
        ? `Shërbime profesionale të zhvillimit web në ${location}. ${description} ${
            neighborhoods.length ? `Shërbime në: ${neighborhoods.join(', ')}` : ''
          }`
        : `Top-rated web development services in ${location}. ${description} ${
            neighborhoods.length ? `Serving: ${neighborhoods.join(', ')}` : ''
          }`;
      metaDescription.setAttribute('content', localizedDesc);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const baseKeywords = language === 'sq'
        ? [
            'zhvillues web profesional',
            'zhvillim web',
            'web developer',
            'programim web',
            'faqe interneti profesionale',
            ...neighborhoods.map(n => `zhvillues web ${n}`),
            ...neighborhoods.map(n => `web developer ${n}`)
          ]
        : [
            'web development',
            'web developer',
            'professional websites',
            'business web solutions',
            'local web developer',
            ...neighborhoods.map(n => `web development ${n}`),
            ...neighborhoods.map(n => `web services ${n}`)
          ];
      const allKeywords = [...baseKeywords, ...keywords].join(', ');
      metaKeywords.setAttribute('content', allKeywords);
    }

    // Update canonical URL
    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', `https://codewithenea.it${currentPath}`);

    // Add breadcrumb schema
    let scriptTag = document.querySelector('#breadcrumb-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'breadcrumb-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(breadcrumbData);

    // Add preload hints for critical resources
    const preloadLinks = [
      { as: 'style', href: '/src/index.css' },
      { as: 'script', href: '/src/main.tsx' },
      { as: 'font', href: '/fonts/inter-var.woff2', crossorigin: true }
    ];

    preloadLinks.forEach(({ as, href, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = href;
      if (crossorigin) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Add Open Graph meta tags
    const ogTags = {
      'og:title': document.title,
      'og:description': metaDescription?.getAttribute('content') || '',
      'og:type': 'website',
      'og:locale': language === 'sq' ? 'sq_AL' : language === 'it' ? 'it_IT' : 'en_US',
      'og:site_name': 'CodeWithEnea',
      'og:url': `https://codewithenea.it${currentPath}`
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Add sitemap link in header
    let sitemapLink = document.querySelector('link[rel="sitemap"]');
    if (!sitemapLink) {
      sitemapLink = document.createElement('link');
      sitemapLink.setAttribute('rel', 'sitemap');
      sitemapLink.setAttribute('type', 'application/xml');
      sitemapLink.setAttribute('title', 'Sitemap');
      sitemapLink.setAttribute('href', '/sitemap-index.xml');
      document.head.appendChild(sitemapLink);
    }

    // Add language alternates for all cities if this is a city page
    if (cityName && language === 'sq') {
      const cities = ['tirane', 'durres', 'vlore', 'shkoder', 'elbasan', 'fier', 'korce'];
      cities.forEach(city => {
        let linkTag = document.querySelector(`link[hreflang="sq"][href*="${city}"]`);
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.setAttribute('rel', 'alternate');
          linkTag.setAttribute('hreflang', 'sq');
          linkTag.setAttribute('href', `https://codewithenea.it/sq/${city}`);
          document.head.appendChild(linkTag);
        }
      });
    }

    // Add XML link header
    const linkHeader = document.createElement('meta');
    linkHeader.setAttribute('http-equiv', 'Link');
    linkHeader.setAttribute('content', '</sitemap-index.xml>; rel="sitemap"');
    document.head.appendChild(linkHeader);
  }, [title, description, keywords, location, language, cityName, neighborhoods, currentPath]);

  return null;
}