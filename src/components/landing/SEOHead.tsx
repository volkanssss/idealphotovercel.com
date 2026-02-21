'use client';

import React from 'react';

/**
 * SEOHead is now a no-op component in Next.js.
 * SEO metadata is handled by the `metadata` export in each page.tsx route file.
 * This component is kept for backward compatibility so existing page components
 * don't need to remove their SEOHead usage immediately.
 */
interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  altLangs?: { locale: string, path: string }[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ structuredData }) => {
  // In Next.js, metadata is handled by the metadata export in page.tsx files.
  // However, we still render structured data scripts since those are inline JSON-LD
  if (structuredData) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }
  return null;
};

export default SEOHead;
