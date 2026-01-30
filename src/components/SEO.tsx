import { useEffect } from 'react';
import { SEO as SEO_CONFIG } from '@constants/index';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps = {}) {
  const seoTitle = title || SEO_CONFIG.title;
  const seoDescription = description || SEO_CONFIG.description;
  const seoImage = image || SEO_CONFIG.ogImage;
  const seoUrl = url || SEO_CONFIG.url;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Update meta tags
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', SEO_CONFIG.keywords);

    // Open Graph tags
    updateMetaTag('og:title', seoTitle, 'property');
    updateMetaTag('og:description', seoDescription, 'property');
    updateMetaTag('og:image', seoImage, 'property');
    updateMetaTag('og:url', seoUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoTitle);
    updateMetaTag('twitter:description', seoDescription);
    updateMetaTag('twitter:image', seoImage);

    // Structured data for local business
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: "Jessica's Shampooch",
      description: seoDescription,
      image: seoImage,
      '@id': seoUrl,
      url: seoUrl,
      telephone: '+17243423647',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2005 Pine Hollow Blvd',
        addressLocality: 'Hermitage',
        addressRegion: 'PA',
        postalCode: '16148',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.2242,
        longitude: -80.4398,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '15:00',
        },
      ],
      priceRange: '$$',
    };

    // Add or update structured data script
    let script = document.getElementById(
      'structured-data'
    ) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [seoTitle, seoDescription, seoImage, seoUrl]);

  return null;
}

function updateMetaTag(
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name'
) {
  let element = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}
