import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
  locale?: string;
}

const SEOHead = ({
  title = "VulgaTech - La tech pour tous, partout en Afrique",
  description = "Démocratisons la robotique et l'IA pour chaque africain. Cours en 30+ langues, accessibles via Telegram, adaptés aux villages et zones rurales.",
  keywords = "robotique, IA, intelligence artificielle, Afrique, cours en ligne, éducation tech, villages, zones rurales, langues africaines, Telegram",
  ogImage = "/og-image.png",
  canonical = "https://www.vulgatech.online",
  type = "website",
  locale = "fr_FR"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Performance monitoring
    if ('performance' in window && 'measure' in window.performance) {
      window.performance.mark('app-start');
    }

    // Accessibility improvements
    document.documentElement.lang = 'fr';
    document.documentElement.dir = 'ltr';
    
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    }

    // High contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
      document.documentElement.setAttribute('data-high-contrast', 'true');
    }

    return () => {
      if ('performance' in window && 'measure' in window.performance) {
        window.performance.mark('app-end');
        window.performance.measure('app-duration', 'app-start', 'app-end');
      }
    };
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="VulgaTech" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="VulgaTech" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@vulgatech" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="VulgaTech" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "VulgaTech",
          "url": canonical,
          "logo": `${canonical}/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CI",
            "addressLocality": "Abidjan"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+22500000000",
            "contactType": "customer service",
            "availableLanguage": ["fr", "en", "wo", "yo", "ha", "sw"]
          },
          "sameAs": [
            "https://twitter.com/vulgatech",
            "https://linkedin.com/company/vulgatech",
            "https://github.com/vulgatech"
          ]
        })}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.supabase.io" />
      <link rel="preconnect" href="https://t.me" />
      
      {/* DNS prefetch for likely navigation */}
      <link rel="dns-prefetch" href="//cours.vulgatech.online" />
      <link rel="dns-prefetch" href="//articles.vulgatech.online" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default SEOHead;
