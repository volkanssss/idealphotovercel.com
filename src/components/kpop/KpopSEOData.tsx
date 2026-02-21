'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';

const kpopStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "K-pop Photo Booth",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Create stunning virtual photos with your favorite K-pop idols using innovative technology to design professional-quality photo memories.",
  "screenshot": "https://idealphotovercel.com/kpop-preview.png",
  "softwareVersion": "3.0"
};

const KpopSEOData: React.FC = () => {
  return (
    <SEOHead 
      title="K-pop Photo Booth | Create Photos with Your Favorite Idols"
      description="Create stunning virtual photos with your favorite K-pop idols. Our innovative platform combines cutting-edge technology with K-pop, allowing fans to design professional-quality photo memories."
      canonicalPath="/kpop-photo-booth"
      keywords="kpop photo booth, korean photo booth, kpop photocard maker, idol photo booth, bts photo booth, blackpink photo booth, twice photo booth, nct photo booth, seventeen photo booth"
      ogType="website"
      structuredData={kpopStructuredData}
      altLangs={[
        { locale: 'ko', path: '/kpop-photo-booth?lang=ko' },
        { locale: 'ja', path: '/kpop-photo-booth?lang=ja' },
        { locale: 'zh', path: '/kpop-photo-booth?lang=zh' }
      ]}
    />
  );
};

export default KpopSEOData;
