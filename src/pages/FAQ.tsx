'use client';


import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is İdeal Photo?",
      answer: "İdeal Photo is a free virtual photo booth platform that allows you to create professional-quality photos with your favorite K-pop idols. All processing happens locally in your browser, ensuring your privacy while delivering high-quality results."
    },
    {
      question: "Is İdeal Photo really free to use?",
      answer: "Yes! İdeal Photo is completely free to use. We believe every K-pop fan should have access to create beautiful photo memories with their favorite artists without any cost barriers."
    },
    {
      question: "How does the photo processing work?",
      answer: "All photo processing happens directly in your browser on your device. We don't upload your photos to any servers, which means your images remain completely private and secure. This local processing also ensures faster results."
    },
    {
      question: "What K-pop idols are available?",
      answer: "We feature a wide variety of popular K-pop idols including members from groups like BTS, BLACKPINK, TWICE, ITZY, NewJeans, and many more. We regularly update our collection with new idols and groups based on fan requests."
    },
    {
      question: "Can I use my own photos?",
      answer: "Yes! You can upload your own photos and combine them with our K-pop idol images, frames, and backgrounds to create unique photo compositions and photo strips."
    },
    {
      question: "What devices and browsers are supported?",
      answer: "İdeal Photo works on all modern browsers including Chrome, Firefox, Safari, and Edge. It's compatible with desktop computers, laptops, tablets, and smartphones. For the best experience, we recommend using a device with a camera."
    },
    {
      question: "How do I save my photos?",
      answer: "Once you create your photo, you can download it directly to your device using the download button. Your photos are saved in high-quality format, perfect for sharing on social media or printing."
    },
    {
      question: "Can I create photo strips?",
      answer: "Absolutely! İdeal Photo specializes in creating classic photo booth strips with multiple frames. You can customize the layout, add different poses, and create professional-looking photo strips just like traditional photo booths."
    },
    {
      question: "Are there any restrictions on usage?",
      answer: "İdeal Photo is free for personal use. Please respect copyright and use the photos responsibly. The images are meant for personal enjoyment and sharing among friends and family."
    },
    {
      question: "How can I request new features or idols?",
      answer: "We love hearing from our users! You can contact us through our contact page or email us directly at vlkneles1@gmail.com with your suggestions for new features, idols, or improvements."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your privacy is our top priority. Since all processing happens locally on your device, we never see or store your photos. We also have comprehensive privacy and cookie policies that explain how we handle any data."
    },
    {
      question: "Can I use İdeal Photo offline?",
      answer: "While you need an internet connection to initially load the app and idol images, once loaded, the photo processing works entirely in your browser and doesn't require additional internet connectivity."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title="FAQ | İdeal Photo - Frequently Asked Questions"
        description="Find answers to common questions about İdeal Photo virtual photo booth. Learn about features, privacy, supported devices, and how to create perfect K-pop photos."
        canonicalPath="/faq"
        keywords="ideal photo faq, photo booth questions, kpop photo help, virtual photo booth support, how to use ideal photo"
        ogType="website"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  Find answers to common questions about İdeal Photo
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      {openItem === index ? (
                        <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItem === index && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? We're here to help!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
