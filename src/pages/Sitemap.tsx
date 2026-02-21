'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ExternalLink } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Virtual photo booth platform homepage" },
        { name: "About", url: "/about", description: "Learn about İdeal Photo and our mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Pricing", url: "/pricing", description: "View our affordable pricing plans" },
        { name: "Blog", url: "/blog", description: "Latest news, tips, and photo booth trends" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions and answers" },
        { name: "Sitemap", url: "/sitemap", description: "Complete overview of all pages" }
      ]
    },
    {
      category: "Photo Booth Types",
      links: [
        { name: "Easy4cut Photo Booth", url: "/easy4cut-photo-booth-online-free", description: "Create 4-cut photo strips with filters and frames" },
        { name: "K-pop Photo Booth", url: "/kpop-photobooth", description: "Create photos with K-pop idols and themes" },
        { name: "Vintage Photo Booth", url: "/vintage-photobooth", description: "Classic vintage-style photo booth experience" },
        { name: "Wedding Photo Booth", url: "/wedding-photobooth", description: "Elegant photo booth for weddings and events" },
        { name: "Digibooth", url: "/digibooth", description: "Modern digital photo booth with advanced features" },
        { name: "Pica Pica Photo Booth", url: "/pica-pica-photobooth", description: "Fun and colorful photo booth experience" },
        { name: "Selfie Booth", url: "/selfie-booth", description: "Perfect for taking high-quality selfies" },
        { name: "Party Booth", url: "/party-booth", description: "Interactive booth for parties and gatherings" },
        { name: "Memorify Booth", url: "/memorify-photo-booth", description: "Preserve your memories with custom photo strips" },
        { name: "Chinchinbooth", url: "/chinchinbooth", description: "Dynamic and fun photo booth experience" },
        { name: "BeautyPlus Booth", url: "/beautyplus-booth", description: "Enhanced beauty filters and effects" },
        { name: "Jepreto Booth", url: "/jepreto-booth", description: "Creative and artistic photo booth options" }
      ]
    },
    {
      category: "Blog Posts",
      links: [
        { name: "Easy4cut Photo Booth Guide", url: "/blog/easy4cut-photo-booth-guide", description: "Ultimate guide to Easy4cut photo booth" },
        { name: "Memorify Photobooth Tips", url: "/blog/memorify-photobooth-tips", description: "How to get the most out of Memorify" },
        { name: "K-pop Photo Trends 2023", url: "/blog/kpop-photo-trends-2023", description: "Latest trends in K-pop photography" },
        { name: "Top K-pop Photo Ideas", url: "/blog/top-kpop-photo-ideas", description: "Creative ideas for your K-pop photos" }
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we protect and handle your data" },
        { name: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions for using our service" },
        { name: "Cookie Policy", url: "/cookie-policy", description: "Information about cookies and tracking" }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Sitemap - İdeal Photo | All Pages and Resources"
        description="Complete sitemap of İdeal Photo website. Find all pages, photo booth types, resources, and important links in one organized location."
        canonicalPath="/sitemap"
        keywords="sitemap, site map, website navigation, all pages, photo booth pages, virtual photo booth sitemap"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Site Map</h1>
                <p className="text-xl opacity-90">
                  Navigate through all pages and resources on İdeal Photo
                </p>
              </div>
            </div>
          </section>

          {/* Sitemap Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-12">
                  {siteStructure.map((section, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                        {section.category}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {section.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="group">
                            <a
                              href={link.url}
                              className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <ExternalLink className="h-5 w-5 text-purple-600 mt-0.5 group-hover:text-purple-700" />
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {link.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {link.description}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 font-mono">
                                  https://idealphotovercel.com{link.url}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="mb-4">
                      This sitemap includes all publicly accessible pages on İdeal Photo. Our website is regularly updated with new features, content, and improvements.
                    </p>
                    <p className="mb-4">
                      For technical users, our XML sitemap is also available at <code>/sitemap.xml</code> for search engine crawlers.
                    </p>
                    <p>
                      If you can't find what you're looking for, please don't hesitate to <a href="/contact" className="text-purple-600 hover:text-purple-700">contact us</a> for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
