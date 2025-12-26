import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface FAQItem {
  question: string;
  answer: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  location?: string;
  language?: 'en' | 'it' | 'sq';
  cityName?: string;
  neighborhoods?: string[];
  ogImage?: string;
  twitterImage?: string;
  noindex?: boolean;
  geoCoordinates?: { latitude: number; longitude: number };
  province?: string;
  faqs?: FAQItem[];
  reviews?: Review[];
  aggregateRating?: { ratingValue: number; reviewCount: number };
  hasOffice?: boolean;
  officeAddress?: string;
}

export function SEO({ 
  title = "CodeWithEnea - Professional Web Development Services",
  description = "Transform your ideas into digital reality with expert web development services.",
  keywords = [],
  location = "Novara, Italy",
  language = 'en',
  cityName,
  neighborhoods = [],
  ogImage = "https://codewithenea.it/og-image.jpg",
  twitterImage = "https://codewithenea.it/twitter-image.jpg",
  noindex = false,
  geoCoordinates,
  province,
  faqs = [],
  reviews = [],
  aggregateRating,
  hasOffice = false,
  officeAddress
}: SEOProps) {
  const [currentPath] = useLocation();

  useEffect(() => {
    // Update document language
    document.documentElement.lang = language;

    // Generate local business schema for Italian cities
    if (language === 'it' && cityName) {
      const cityCoords = geoCoordinates || getCityCoordinates(cityName);
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `CodeWithEnea - Sviluppatore Web Professionale a ${cityName}${province ? `, ${province}` : ''}`,
        "description": `Servizi professionali di sviluppo web a ${cityName}${province ? `, ${province}` : ''}. ${description}`,
        "@id": `https://codewithenea.it/it/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
        "url": `https://codewithenea.it/it/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
        "telephone": "+393761024080",
        "email": "info@codewithenea.it",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityName,
          "addressRegion": province || "Piemonte",
          "addressCountry": "IT"
        },
        "geo": cityCoords ? {
          "@type": "GeoCoordinates",
          "latitude": cityCoords.latitude.toString(),
          "longitude": cityCoords.longitude.toString()
        } : undefined,
        "areaServed": neighborhoods.length > 0 ? neighborhoods : [cityName],
        "priceRange": "€€",
        "knowsLanguage": ["it", "en", "sq"],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      };

      // Add aggregate rating if provided
      if (aggregateRating) {
        localBusinessSchema.aggregateRating = {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue.toString(),
          "reviewCount": aggregateRating.reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        };
      }

      // Add reviews if provided
      if (reviews.length > 0) {
        localBusinessSchema.review = reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "datePublished": review.datePublished || new Date().toISOString(),
          "reviewBody": review.reviewBody,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
          }
        }));
      }

      // Add office address if hasOffice is true
      if (hasOffice && officeAddress) {
        localBusinessSchema.address = {
          "@type": "PostalAddress",
          "streetAddress": officeAddress,
          "addressLocality": cityName,
          "addressRegion": province || "Piemonte",
          "addressCountry": "IT"
        };
      }

      let scriptTag = document.querySelector('#local-business-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'local-business-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(localBusinessSchema);
    }

    // Add FAQ Schema if FAQs are provided
    if (faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      let faqScriptTag = document.querySelector('#faq-schema');
      if (!faqScriptTag) {
        faqScriptTag = document.createElement('script');
        faqScriptTag.id = 'faq-schema';
        faqScriptTag.type = 'application/ld+json';
        document.head.appendChild(faqScriptTag);
      }
      faqScriptTag.textContent = JSON.stringify(faqSchema);
    }

    // Add Organization Schema with multiple locations (for enterprise SEO)
    if (language === 'it' && cityName) {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CodeWithEnea",
        "url": "https://codewithenea.it",
        "logo": "https://codewithenea.it/logo.png",
        "description": "Azienda leader nello sviluppo web professionale in Italia. Servizi di sviluppo siti web, applicazioni web, e-commerce con tecnologie moderne.",
        "telephone": "+393761024080",
        "email": "info@codewithenea.it",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityName,
          "addressRegion": province || "Piemonte",
          "addressCountry": "IT"
        },
        "sameAs": [
          "https://www.instagram.com/eneaaa__m",
          "https://www.linkedin.com/in/enea-muja-16b5b9311"
        ],
        "areaServed": [
          { "@type": "City", "name": "Novara" },
          { "@type": "City", "name": "Milano" },
          { "@type": "City", "name": "Torino" },
          { "@type": "City", "name": "Biella" },
          { "@type": "City", "name": "Roma" },
          { "@type": "City", "name": "Napoli" },
          { "@type": "City", "name": "Firenze" },
          { "@type": "City", "name": "Bologna" },
          { "@type": "City", "name": "Genova" },
          { "@type": "City", "name": "Venezia" }
        ]
      };

      let orgScriptTag = document.querySelector('#organization-schema');
      if (!orgScriptTag) {
        orgScriptTag = document.createElement('script');
        orgScriptTag.id = 'organization-schema';
        orgScriptTag.type = 'application/ld+json';
        document.head.appendChild(orgScriptTag);
      }
      orgScriptTag.textContent = JSON.stringify(organizationSchema);
    }

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
    const finalTitle = language === 'it' 
      ? `${title}${cityName ? ` a ${cityName}` : location ? ` a ${location}` : ''} | Sviluppatore Web #1${province ? ` in ${province}` : ''}`
      : language === 'sq'
      ? `${title}${cityName ? ` në ${cityName}` : location ? ` në ${location}` : ''} | Zhvillues Web Profesional`
      : `${title}${location ? ` in ${location}` : ''} | Top Local Developer`;
    
    document.title = finalTitle;

    // Update meta description with location-specific content
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const localizedDesc = language === 'it'
      ? `Sviluppatore web professionale #1 a ${cityName || location}${province ? `, ${province}` : ''}. ${description} ${
          neighborhoods.length ? `Servizi in: ${neighborhoods.join(', ')}` : ''
        }. Sviluppo siti web, applicazioni web, e-commerce con React, Node.js, TypeScript.`
      : language === 'sq'
      ? `Shërbime profesionale të zhvillimit web në ${location}. ${description} ${
          neighborhoods.length ? `Shërbime në: ${neighborhoods.join(', ')}` : ''
        }`
      : `Top-rated web development services in ${location}. ${description} ${
          neighborhoods.length ? `Serving: ${neighborhoods.join(', ')}` : ''
        }`;
    metaDescription.setAttribute('content', localizedDesc);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    
    const baseKeywords = language === 'it'
      ? [
          `sviluppatore web ${cityName || location}`,
          `sviluppo web ${cityName || location}`,
          `sviluppatore siti web ${cityName || location}`,
          `web developer ${cityName || location}`,
          `sviluppatore React ${cityName || location}`,
          `sviluppatore Node.js ${cityName || location}`,
          `sviluppatore TypeScript ${cityName || location}`,
          `sviluppo applicazioni web ${cityName || location}`,
          `e-commerce ${cityName || location}`,
          `sviluppatore full stack ${cityName || location}`,
          ...(province ? [`sviluppatore web ${province}`, `sviluppo web ${province}`] : []),
          ...neighborhoods.map(n => `sviluppatore web ${n}`),
          ...neighborhoods.map(n => `sviluppo web ${n}`)
        ]
      : language === 'sq'
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

    // Update canonical URL - ensure it always points to the current page
    // Remove any existing canonical tags first to avoid duplicates
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(canonical => canonical.remove());
    
    // Create new canonical tag pointing to current page
    const canonicalUrl = document.createElement('link');
    canonicalUrl.setAttribute('rel', 'canonical');
    // Ensure currentPath doesn't have trailing slash unless it's root
    const cleanPath = currentPath === '/' ? '' : currentPath.replace(/\/$/, '');
    canonicalUrl.setAttribute('href', `https://codewithenea.it${cleanPath}`);
    document.head.appendChild(canonicalUrl);

    // Add breadcrumb schema
    let scriptTag = document.querySelector('#breadcrumb-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'breadcrumb-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(breadcrumbData);

    // Add robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Add Open Graph meta tags
    const ogTags = {
      'og:title': document.title,
      'og:description': metaDescription?.getAttribute('content') || '',
      'og:type': 'website',
      'og:locale': language === 'sq' ? 'sq_AL' : language === 'it' ? 'it_IT' : 'en_US',
      'og:site_name': 'CodeWithEnea',
      'og:url': `https://codewithenea.it${currentPath}`,
      'og:image': ogImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': document.title
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Add Twitter Card meta tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': document.title,
      'twitter:description': metaDescription?.getAttribute('content') || '',
      'twitter:image': twitterImage || ogImage,
      'twitter:site': '@codewithenea',
      'twitter:creator': '@codewithenea'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      if (!content) return;
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Add geo tags for Italian cities
    if (language === 'it' && cityName && geoCoordinates) {
      const geoTags = {
        'geo.region': province ? `IT-${getProvinceCode(province)}` : 'IT-NO',
        'geo.placename': cityName,
        'geo.position': `${geoCoordinates.latitude};${geoCoordinates.longitude}`,
        'ICBM': `${geoCoordinates.latitude}, ${geoCoordinates.longitude}`
      };

      Object.entries(geoTags).forEach(([name, content]) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
      });
    }

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

    // Add language alternates for Italian cities
    if (cityName && language === 'it') {
      const italianCities = ['novara', 'milano', 'torino', 'biella', 'vercelli', 'alessandria', 'asti'];
      italianCities.forEach(city => {
        let linkTag = document.querySelector(`link[hreflang="it"][href*="${city}"]`);
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.setAttribute('rel', 'alternate');
          linkTag.setAttribute('hreflang', 'it');
          linkTag.setAttribute('href', `https://codewithenea.it/it/${city}`);
          document.head.appendChild(linkTag);
        }
      });
    }

    // Add language alternates for Albanian cities
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
  }, [title, description, keywords, location, language, cityName, neighborhoods, currentPath, ogImage, twitterImage, noindex, geoCoordinates, province, faqs, reviews, aggregateRating, hasOffice, officeAddress]);

  return null;
}

// Helper function to get city coordinates
function getCityCoordinates(cityName: string): { latitude: number; longitude: number } | undefined {
  const cityCoords: Record<string, { latitude: number; longitude: number }> = {
    'novara': { latitude: 45.4455, longitude: 8.6190 },
    'milano': { latitude: 45.4642, longitude: 9.1900 },
    'torino': { latitude: 45.0703, longitude: 7.6869 },
    'biella': { latitude: 45.5667, longitude: 8.0500 },
    'vercelli': { latitude: 45.3217, longitude: 8.4200 },
    'alessandria': { latitude: 44.9133, longitude: 8.6167 },
    'asti': { latitude: 44.8990, longitude: 8.2060 },
    'napoli': { latitude: 40.8518, longitude: 14.2681 },
    'roma': { latitude: 41.9028, longitude: 12.4964 },
    'firenze': { latitude: 43.7696, longitude: 11.2558 },
    'bologna': { latitude: 44.4949, longitude: 11.3426 },
    'genova': { latitude: 44.4056, longitude: 8.9463 },
    'venezia': { latitude: 45.4408, longitude: 12.3155 },
    'trecate': { latitude: 45.4333, longitude: 8.7333 },
    'galliate': { latitude: 45.4833, longitude: 8.7000 },
    'cameri': { latitude: 45.5000, longitude: 8.6500 },
    'bellinzago': { latitude: 45.4167, longitude: 8.6333 },
    'oleggio': { latitude: 45.6000, longitude: 8.6333 }
  };
  
  return cityCoords[cityName.toLowerCase().replace(/\s+/g, '')];
}

// Helper function to get province code
function getProvinceCode(province: string): string {
  const provinceCodes: Record<string, string> = {
    'novara': 'NO',
    'milano': 'MI',
    'torino': 'TO',
    'biella': 'BI',
    'vercelli': 'VC',
    'alessandria': 'AL',
    'asti': 'AT',
    'napoli': 'NA',
    'roma': 'RM',
    'firenze': 'FI',
    'bologna': 'BO',
    'genova': 'GE',
    'venezia': 'VE'
  };
  
  return provinceCodes[province.toLowerCase()] || 'NO';
}