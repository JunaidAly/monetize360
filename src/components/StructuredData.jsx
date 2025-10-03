import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Monetize360 Global",
    "url": "https://monetize360.global",
    "logo": "https://monetize360.global/logo.jpg",
    "description": "Monetize360 Global helps website owners maximize revenue through Google AdSense, MCM, AdX, and strategic monetization solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@monetize360.global",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      // Add social media links here when available
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Monetize360 Global",
    "url": "https://monetize360.global",
    "description": "Maximize your website revenue through Google AdSense, MCM, AdX, and strategic monetization solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://monetize360.global/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Monetization Services",
    "provider": {
      "@type": "Organization",
      "name": "Monetize360 Global",
      "url": "https://monetize360.global"
    },
    "areaServed": "Worldwide",
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google MCM Invitations",
          "description": "Google-compliant access to AdX at profitable revenue shares"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Header Bidding",
          "description": "Integration with top demand partners for maximum revenue"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pro Analytics",
          "description": "Advanced reporting and analytics for your monetization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IVT Prevention",
          "description": "Advanced traffic quality monitoring and filtering"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
