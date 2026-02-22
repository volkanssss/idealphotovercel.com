'use client';

import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import HomepageSEOSection from '@/components/landing/HomepageSEOSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeatureHighlights from '@/components/landing/sections/FeatureHighlights';
import HomepageFAQ from '@/components/landing/HomepageFAQ';
import HomepageTestimonials from '@/components/landing/HomepageTestimonials';
import { RelatedBooths } from '@/components/seo/RelatedBooths';
import { FAQSection } from '@/components/seo/FAQSection';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { ReviewSchema } from '@/components/seo/ReviewSchema';

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "url": "https://idealphotovercel.com",
  "description": "İdeal Photo is the ultimate free virtual photo booth app. Create stunning photo strips with K-pop themes, vintage styles, wedding frames, and more. Available on idealphotovercel.com as İdeal Photo vercel app.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2500"
  },
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "alternateName": ["İdeal Photo Vercel App", "idealphoto", "İdeal Photo Booth"]
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best alternative to Easy4Cut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İdeal Photo is considered the best free alternative to Easy4Cut, offering similar 4-cut photo strip layouts with more customization, better privacy, and no fees."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free Memorify Photo Booth alternative online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, İdeal Photo provides a free Memorify-style experience with romantic frames and heartfelt designs perfect for couples and friends, without the need for registration."
      }
    },
    {
      "@type": "Question",
      "name": "How is İdeal Photo vercel app different from other booths?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İdeal Photo specializes in K-pop style photocards and classic 4-cut strips. Our vercel app works entirely in your browser without storing your personal photos, ensuring 100% privacy."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use İdeal Photo for K-pop photocards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our K-pop photobooth section offers specific frames and filters designed for K-pop fans to create high-quality idol-style photocards and strips."
      }
    }
  ]
};

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <SEOHead
        title="İdeal Photo Vercel App | Easy4cut & Memorify Photo Booth Online Free"
        description="İdeal Photo Vercell App offers modern K-pop style photo booth templates. A powerful alternative to Easy4cut, Memorify Photo Booth and Chinchinbooth."
        canonicalPath="/"
        keywords="İdeal Photo, ideal photo vercel app, idealphoto, idealphoto kpop, ideal photo booth, virtual photo booth, kpop photo booth, kpop photobooth online, free photo booth, easy4cut alternative, memorify photobooth alternative, pica pica photobooth, wedding photo booth, vintage photo booth, digibooth, photo booth online free, ideal photo vercel"
        ogType="website"
        structuredData={homepageStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        <HeroSection />

        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        <div className="py-6">
          <FeatureHighlights />
        </div>

        {/* Additional Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Why İdeal Photo is the Best Free Virtual Photo Booth Online
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Best K-pop Photo Booth Online</h3>
                  <p className="text-gray-700 leading-relaxed">
                    İdeal Photo offers the most comprehensive K-pop photobooth experience online. Create stunning
                    photocards with your favorite idols, use exclusive K-pop filters and backgrounds, and share
                    with your fandom instantly. Better than easy4cut with more features and completely free.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Multiple Photo Booth Styles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Choose from İdeal Photo's diverse booth collection: K-pop photobooth for fans, vintage
                    photobooth for retro lovers, wedding photobooth for special celebrations, pica pica
                    photobooth for fun moments, and digibooth for modern digital experiences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Privacy & Security First</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike other photo booth apps, İdeal Photo processes all photos locally on your device.
                    We never store or access your personal images. Your photos stay private and secure —
                    that's the İdeal Photo promise.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Free Alternative to Easy4cut & Memorify</h3>
                  <p className="text-gray-700 leading-relaxed">
                    İdeal Photo is the perfect free alternative to easy4cut and memorify photobooth. Get more
                    features, better quality, and complete privacy — all without paying a penny. Try the
                    İdeal Photo vercel app today and see the difference.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of users worldwide who trust İdeal Photo for their creative photo needs.
                  Start creating with İdeal Photo vercel app today — it's free forever!
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />

        <HomepageTestimonials />

        <HomepageFAQ />

        <FAQSection />

        <RelatedBooths />

        <HomepageSEOSection />

        {/* Global Schema Markup */}
        <SchemaMarkup />
        <ReviewSchema />

        {/* FAQ Schema for Google Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

        <Footer />
      </div>
    </>
  );
};

export default Index;
