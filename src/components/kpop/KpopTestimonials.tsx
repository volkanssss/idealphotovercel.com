'use client';


import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KpopTestimonials = () => {
  const testimonials = [
    {
      quote: "İdeal Photo's K-pop photo booth is a dream come true! I use idealphoto kpop to create amazing photocards with my bias. The themed backdrops and lighting are spot on — way better than easy4cut!",
      author: "Hannah C.",
      rating: 5,
      role: "K-pop Fan & ARMY",
      style: "kpop" as const
    },
    {
      quote: "The ideal photo vercel app kpop booth is my favorite! I create stunning photo strips with Enhypen and Stray Kids themes. İdeal Photo makes every fan event unforgettable.",
      author: "Minjun P.",
      rating: 5,
      role: "Fan Event Attendee",
      style: "kpop" as const
    },
    {
      quote: "I switched from memorify photobooth to İdeal Photo and the difference is incredible. The idealphoto kpop features are so much better — more idols, better filters, and it's completely free!",
      author: "Lisa W.",
      rating: 5,
      role: "BLINK & ONCE",
      style: "kpop" as const
    },
    {
      quote: "İdeal Photo vercel app is the best kpop photobooth online! I use it every day to make photocards. The webcam quality and idol overlays are professional-grade. Love idealphoto!",
      author: "Sakura T.",
      rating: 5,
      role: "K-pop Content Creator",
      style: "kpop" as const
    }
  ];
  
  const faqItems = [
    {
      q: "What is İdeal Photo K-pop Photo Booth?",
      a: "İdeal Photo K-pop Photo Booth is a free online virtual photo booth specifically designed for K-pop fans. Create stunning photocards, photo strips, and idol-themed memories using your webcam. The idealphoto kpop booth features exclusive idol backgrounds, K-pop filters, and fandom-themed frames."
    },
    {
      q: "How do I use İdeal Photo vercel app for K-pop photos?",
      a: "Simply visit idealphotovercel.com and navigate to the K-pop Photo Booth. Allow camera access, select your favorite idol theme or background, take photos, and customize with K-pop stickers, filters, and frames. Download or share your creations instantly — no registration needed!"
    },
    {
      q: "Which K-pop groups are available on İdeal Photo?",
      a: "İdeal Photo features themes and backgrounds for popular K-pop groups including BTS, BLACKPINK, Stray Kids, Enhypen, NCT, aespa, TWICE, and many more. We regularly update our idol collection to include new comebacks and debut groups."
    },
    {
      q: "Is İdeal Photo better than easy4cut for K-pop photos?",
      a: "Many users prefer İdeal Photo over easy4cut because it's completely free, works directly in your browser without any downloads, offers more customization options, and provides better privacy since all photos are processed on your device. İdeal Photo also offers exclusive K-pop themes not available elsewhere."
    },
    {
      q: "Can I create K-pop photocards with İdeal Photo?",
      a: "Yes! İdeal Photo's K-pop booth is perfect for creating photocard-style images. Choose from various photocard layouts, add idol-themed borders and stickers, and download high-resolution images perfect for printing or sharing on social media."
    },
    {
      q: "Does İdeal Photo K-pop booth work on mobile?",
      a: "Absolutely! İdeal Photo vercel app is fully optimized for mobile devices. Take K-pop photos using your phone's camera with the same great features available on desktop. The interface adapts perfectly to any screen size."
    }
  ];
  
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">İdeal Photo K-pop Booth Reviews</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what K-pop fans worldwide say about İdeal Photo's kpop photobooth experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* K-pop FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">İdeal Photo K-pop Photo Booth FAQ</h2>
            <p className="text-gray-600">Common questions about İdeal Photo's kpop photobooth features</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-200">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`kpop-faq-${index}`}>
                  <AccordionTrigger className="px-6 text-gray-800 hover:text-purple-600">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default KpopTestimonials;
