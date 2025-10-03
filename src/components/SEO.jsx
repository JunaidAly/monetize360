import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Monetize360 Global - Maximize Your Website Revenue',
  description = 'Monetize360 Global helps website owners maximize revenue through Google AdSense, MCM, AdX, and strategic monetization solutions. Partner with us for higher earnings.',
  keywords = 'website monetization, Google AdSense, Google MCM, AdX, ad revenue, publisher monetization, website earnings',
  ogImage = '/logo.jpg',
  ogType = 'website',
  canonicalUrl = ''
}) => {
  const siteUrl = 'https://monetize360.global/'; // Replace with your actual domain
  const fullUrl = canonicalUrl || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Monetize360 Global" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Monetize360 Global" />
    </Helmet>
  );
};

export default SEO;
