import { useLocation } from "wouter";
import { Link } from "wouter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function PageBreadcrumb() {
  const [location] = useLocation();

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

    if (pathSegments.length === 0) {
      return [];
    }

    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Skip if it's the last segment (current page)
      if (index === pathSegments.length - 1) {
        return;
      }

      // Map segment to readable label
      let label = segment;
      
      // Italian city pages
      if (segment === "it") {
        label = "Italia";
      } else if (segment === "sq") {
        label = "Shqipëria";
      } else {
        // Capitalize and format labels
        label = segment
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        
        // Special cases
        const labelMap: Record<string, string> = {
          "novara": "Novara",
          "milano": "Milano",
          "torino": "Torino",
          "biella": "Biella",
          "roma": "Roma",
          "locations": "Città",
          "tirane": "Tiranë",
          "durres": "Durrës",
          "vlore": "Vlorë",
          "shkoder": "Shkodër",
          "elbasan": "Elbasan",
          "fier": "Fier",
          "korce": "Korcë",
        };
        
        if (labelMap[segment.toLowerCase()]) {
          label = labelMap[segment.toLowerCase()];
        }
      }

      breadcrumbs.push({ label, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  const currentPageLabel = getCurrentPageLabel(location);

  // Don't show breadcrumb on homepage
  if (location === "/" || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
        {currentPageLabel && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPageLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function getCurrentPageLabel(path: string): string {
  const pathSegments = path.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  if (!lastSegment) return "";

  // Map to readable labels
  const labelMap: Record<string, string> = {
    "services": "Servizi",
    "portfolio": "Portfolio",
    "contact": "Contatti",
    "pricing": "Prezzi",
    "blog": "Blog",
    "privacy": "Privacy",
    "terms": "Termini",
    "novara": "Novara",
    "milano": "Milano",
    "torino": "Torino",
    "biella": "Biella",
    "roma": "Roma",
    "locations": "Città",
    "tirane": "Tiranë",
    "durres": "Durrës",
    "vlore": "Vlorë",
    "shkoder": "Shkodër",
    "elbasan": "Elbasan",
    "fier": "Fier",
    "korce": "Korcë",
    "about": "Chi Siamo",
    "services": "Servizi",
    "portfolio": "Portfolio",
    "contact": "Contatti",
  };

  // Handle blog posts
  if (pathSegments[0] === "blog" && pathSegments.length > 1) {
    return lastSegment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return labelMap[lastSegment.toLowerCase()] || 
    lastSegment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

