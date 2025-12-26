# 📦 SEO Portable Export Guide

## Files to Export for Migration

### Core SEO Files

```
✅ EXPORT THESE FILES:
├── client/src/components/seo.tsx          # Main SEO component (PORTABLE)
├── client/src/pages/it/                    # All Italian city pages
│   ├── novara/index.tsx
│   ├── milano/index.tsx
│   ├── torino/index.tsx
│   ├── biella/index.tsx
│   ├── roma/index.tsx
│   └── locations.tsx
├── client/public/
│   ├── sitemap.xml                        # Keep exact same URLs
│   ├── sitemap-index.xml
│   └── robots.txt
└── client/index.html                       # Base HTML with meta tags
```

### SEO Configuration (Create This)

Create a new file: `seo-config.ts`

```typescript
// seo-config.ts - Centralized SEO configuration
export interface CitySEOData {
  name: string;
  slug: string;
  province: string;
  region: string;
  coordinates: { latitude: number; longitude: number };
  neighborhoods: string[];
  faqs: Array<{ question: string; answer: string }>;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
  }>;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}

export const cityData: Record<string, CitySEOData> = {
  novara: {
    name: "Novara",
    slug: "novara",
    province: "Novara",
    region: "Piemonte",
    coordinates: { latitude: 45.4455, longitude: 8.6190 },
    neighborhoods: [
      "Centro Storico",
      "Sant'Agabio",
      "San Martino",
      "Veveri",
      "Bicocca",
      "Trecate",
      "Galliate",
      "Cameri",
      "Bellinzago",
      "Oleggio"
    ],
    faqs: [
      {
        question: "Quali servizi di sviluppo web offrite a Novara?",
        answer: "Offriamo servizi completi di sviluppo web a Novara inclusi: sviluppo siti web professionali, applicazioni web moderne con React e Node.js, piattaforme e-commerce, sviluppo backend con TypeScript, API RESTful, e soluzioni full-stack personalizzate. Serviamo tutte le zone di Novara e provincia."
      },
      // ... more FAQs
    ],
    aggregateRating: { ratingValue: 4.9, reviewCount: 127 },
    reviews: [
      {
        author: "Marco Rossi",
        rating: 5,
        reviewBody: "Servizio eccellente! Hanno sviluppato il nostro sito e-commerce e i risultati sono stati straordinari.",
        datePublished: "2024-12-15"
      },
      // ... more reviews
    ]
  },
  milano: {
    // ... same structure
  },
  // ... all cities
};

export const seoDefaults = {
  siteName: "CodeWithEnea",
  siteUrl: "https://codewithenea.it",
  phone: "+393761024080",
  email: "info@codewithenea.it",
  ogImage: "https://codewithenea.it/og-image.jpg",
  twitterImage: "https://codewithenea.it/twitter-image.jpg",
  socialLinks: {
    instagram: "https://www.instagram.com/eneaaa__m",
    linkedin: "https://www.linkedin.com/in/enea-muja-16b5b9311"
  }
};

// Helper functions
export function getCityCoordinates(cityName: string) {
  const city = cityData[cityName.toLowerCase()];
  return city?.coordinates;
}

export function getProvinceCode(province: string): string {
  const provinceCodes: Record<string, string> = {
    'novara': 'NO',
    'milano': 'MI',
    'torino': 'TO',
    'biella': 'BI',
    'roma': 'RM',
    'napoli': 'NA',
    'firenze': 'FI',
    'bologna': 'BO',
    'genova': 'GE',
    'venezia': 'VE'
  };
  return provinceCodes[province.toLowerCase()] || 'NO';
}
```

---

## Quick Migration Steps

### Step 1: Export Files
```bash
# Copy these directories
cp -r client/src/components/seo.tsx /path/to/new-project/
cp -r client/src/pages/it/ /path/to/new-project/
cp client/public/sitemap.xml /path/to/new-project/
cp client/public/robots.txt /path/to/new-project/
```

### Step 2: Adapt SEO Component
The SEO component works in any React-based framework. Just adapt the imports:

**Current (Wouter)**:
```typescript
import { useLocation } from 'wouter';
const [currentPath] = useLocation();
```

**Next.js**:
```typescript
import { usePathname } from 'next/navigation';
const currentPath = usePathname();
```

**Remix**:
```typescript
import { useLocation } from '@remix-run/react';
const { pathname: currentPath } = useLocation();
```

### Step 3: Keep Same Routes
Ensure your new framework uses the exact same URL structure:
- `/it/novara` → Same route
- `/it/milano` → Same route
- etc.

### Step 4: Test Structured Data
After migration, test each page:
1. Google Rich Results Test
2. Schema.org Validator
3. Google Search Console

---

## Migration Checklist

- [ ] Export SEO component
- [ ] Export all city pages
- [ ] Export sitemap files
- [ ] Create seo-config.ts
- [ ] Adapt SEO component to new framework
- [ ] Keep exact same URLs
- [ ] Test structured data
- [ ] Submit new sitemap to Google
- [ ] Monitor Search Console

---

## Your SEO is Safe! 🎉

As long as you:
1. ✅ Keep the same URLs
2. ✅ Preserve structured data
3. ✅ Keep meta tags
4. ✅ Maintain sitemap structure

You can migrate to **any** framework without losing SEO rankings!

