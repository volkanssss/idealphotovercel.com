'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomepageFAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions About İdeal Photo</h2>
          <p className="text-muted-foreground">Everything you need to know about İdeal Photo virtual photo booth and İdeal Photo vercel app</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-card rounded-lg shadow-sm border border-border">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                What is İdeal Photo and how does it work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                İdeal Photo is a free online virtual photo booth that lets you create professional-quality 
                photo strips directly in your browser. Simply visit idealphotovercel.com, choose your preferred theme 
                (K-pop, wedding, vintage, digibooth), allow camera access, and start taking photos. Customize with 
                frames, filters, stickers, and download or share instantly. No registration or payment required.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                How do I access İdeal Photo vercel app?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                You can access İdeal Photo vercel app by visiting idealphotovercel.com on any browser. The İdeal Photo 
                vercel app works on desktop, laptop, tablet, and mobile devices. Simply open the website, choose 
                your photo booth theme, and start creating. No download or installation needed — İdeal Photo runs 
                entirely in your web browser.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                Is İdeal Photo free to use? What are the pricing options?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Yes! İdeal Photo is completely free to use. You can take unlimited photos, access all themes 
                including K-pop, vintage, wedding, and digibooth styles, apply filters and effects, and download 
                high-resolution photo strips at no cost. There's no subscription, no hidden fees, and no watermarks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                Can I use İdeal Photo as a K-pop photo booth?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Absolutely! İdeal Photo features a dedicated K-pop photo booth with idol-themed backgrounds, 
                stickers, and filters. You can create photos with themes from popular groups and share them with 
                your fandom. The idealphoto kpop booth is one of our most popular features, loved by ARMY, BLINK, 
                ONCE, and K-pop fans worldwide.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                How is İdeal Photo different from easy4cut and other photo booth apps?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                İdeal Photo offers several advantages over alternatives like easy4cut: it's completely free with 
                no limitations, works directly in your browser without downloads, offers multiple booth styles 
                (K-pop, vintage, wedding, digital), and processes all photos locally on your device for maximum 
                privacy. İdeal Photo also provides more customization options including custom frames, filters, 
                stickers, and text overlays.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                What devices and browsers does İdeal Photo support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                İdeal Photo works on all modern web browsers including Chrome, Firefox, Safari, and Edge. 
                You can use it on desktop computers, laptops, tablets, and smartphones. Any device with a camera 
                and internet connection can run İdeal Photo. The İdeal Photo vercel app is optimized for both 
                mobile and desktop experiences.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                Are my photos private and secure on İdeal Photo?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Yes, your privacy is our top priority. All photos taken with İdeal Photo are processed entirely 
                on your device — we never upload, store, or access your personal photos on any server. Your 
                images stay on your device until you choose to download or share them yourself.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                What types of events can I use İdeal Photo for?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                İdeal Photo is perfect for weddings, birthday parties, graduation ceremonies, corporate events, 
                K-pop fan meetups, school events, and any special occasion. Our wedding photobooth, vintage 
                photobooth, and digibooth themes let you create the perfect atmosphere for every event type.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                Can I use İdeal Photo as an alternative to memorify photobooth?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Yes! İdeal Photo is a great alternative to memorify photobooth and other online photo booth apps. 
                İdeal Photo offers more customization options, multiple booth themes, and is completely free. 
                Many users have switched from memorify photobooth to İdeal Photo for its superior features 
                and ease of use.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger className="px-6 text-foreground hover:text-primary">
                How do I download and share my İdeal Photo creations?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                After creating your photo strip, simply click the "Download" button to save a high-resolution 
                image to your device. You can also share directly to social media platforms like Instagram, 
                Twitter, and Facebook. İdeal Photo generates optimized images perfect for both printing and 
                online sharing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
