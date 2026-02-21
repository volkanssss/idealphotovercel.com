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
      "name": "What is İdeal Photo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İdeal Photo is a free online virtual photo booth that lets you create professional-quality photo strips with K-pop, wedding, vintage, and digital themes. Access İdeal Photo vercel app at idealphotovercel.com."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use İdeal Photo vercel app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit idealphotovercel.com on any browser, choose your theme, allow camera access, take photos, customize with frames and filters, then download or share. No registration needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is İdeal Photo free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, İdeal Photo is completely free with unlimited photos, all themes, no watermarks, and no registration required."
      }
    },
    {
      "@type": "Question",
      "name": "Is İdeal Photo better than easy4cut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İdeal Photo offers more features than easy4cut including multiple booth themes, better privacy, more customization options, and it's completely free with no limitations."
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

        <HomepageSEOSection />

        {/* FAQ Schema for Google Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

        <Footer />
      </div>
    </>
  );
};

export default Index;
