'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, PartyPopper, Music, Image, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Party Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free online party photo booth with fun filters, party frames, and instant sharing. Perfect for birthdays, celebrations, and events.",
  "url": "https://idealphotovercel.com/party-booth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Party Booth?", "acceptedAnswer": { "@type": "Answer", "text": "Party Booth is a free online photo booth by İdeal Photo designed for parties, birthdays, and celebrations. Take fun group photos with party-themed filters and frames." } },
    { "@type": "Question", "name": "Is Party Booth free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Party Booth is completely free. Perfect for any party or celebration." } },
    { "@type": "Question", "name": "Can I use Party Booth at events?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Party Booth works on any device with a camera. Set it up at your party and let guests take fun photos." } }
  ]
};

const features = [
  { icon: PartyPopper, title: "Party Themes", description: "Choose from birthday, celebration, and party-themed frames and backgrounds." },
  { icon: Palette, title: "Fun Filters", description: "Apply colorful and fun party filters to make every photo festive." },
  { icon: Sparkles, title: "Party Stickers", description: "Add balloons, confetti, party hats, and celebratory stickers to your photos." },
  { icon: Image, title: "Group Photo Mode", description: "Perfect for group photos with friends and family at any celebration." },
  { icon: Download, title: "Instant Download", description: "Download party photos instantly in high quality. Share the fun!" },
  { icon: Share2, title: "Social Sharing", description: "Share party moments directly to social media with one click." },
];

const testimonials = [
  { name: "Mehmet Y.", text: "Party Booth made our birthday party so much fun! Everyone loved taking photos with the party stickers.", rating: 5 },
  { name: "Fatma B.", text: "We used Party Booth at our graduation party. The photos turned out amazing!", rating: 5 },
  { name: "Ali K.", text: "Best free party photo booth! The party-themed frames are perfect for any celebration.", rating: 5 },
  { name: "Ebru S.", text: "I set up Party Booth on my tablet at our wedding after-party. Guests had a blast!", rating: 5 },
  { name: "Can D.", text: "Love the confetti and balloon stickers! Party Booth adds so much fun to every event.", rating: 5 },
  { name: "Büşra T.", text: "We use Party Booth for every family gathering now. It's free and so easy to use!", rating: 5 },
];

const faqs = [
  { q: "What is Party Booth?", a: "Party Booth is a free online photo booth by İdeal Photo designed for parties, birthdays, and celebrations." },
  { q: "Is Party Booth free?", a: "Yes! Party Booth is completely free with no sign-up required." },
  { q: "Can I use Party Booth at events?", a: "Absolutely! Set it up on any device with a camera and let guests take fun party photos." },
  { q: "What themes are available?", a: "We offer birthday, graduation, New Year, wedding party, and many other celebration themes." },
  { q: "Can I take group photos?", a: "Yes! Party Booth is perfect for group photos with friends, family, and party guests." },
  { q: "Do I need to download an app?", a: "No app needed! Party Booth runs entirely in your web browser." },
];

const PartyBooth = () => {
  return (
    <>
      <SEOHead
        title="Party Booth | Free Online Party Photo Booth | İdeal Photo"
        description="Party Booth by İdeal Photo — free online party photo booth with fun filters, party frames, stickers, and instant sharing. Perfect for birthdays and celebrations!"
        canonicalPath="/party-booth"
        keywords="party booth, party photo booth, online party booth, free party photo booth, birthday photo booth, celebration photo booth, party booth online, party photo booth free"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">🎉 Free Party Booth</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Party Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Fun Photos for Every Celebration</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">The best free online party photo booth. Take fun photos with party filters, stickers, and frames. Perfect for birthdays, events, and celebrations!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digibooth"><Button size="lg" className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Start Party Booth</Button></Link>
              <Link href="/selfie-booth"><Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2"><Sparkles className="mr-2 h-5 w-5" /> Try Selfie Booth</Button></Link>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">What is Party Booth?</h2>
            <p className="text-lg text-gray-600 text-center mb-4">Party Booth is a free online photo booth designed specifically for parties and celebrations. With fun party-themed filters, colorful stickers, and festive frames, every photo becomes a party memory.</p>
            <p className="text-lg text-gray-600 text-center">Set it up at your birthday, graduation, wedding party, or any event — guests will love taking photos with Party Booth!</p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Party Booth Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What People Say About Party Booth</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Party Booth — FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-amber-600 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-red-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Party?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Start using Party Booth now. It's free and perfect for any celebration!</p>
            <Link href="/digibooth"><Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Open Party Booth</Button></Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Party Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">Looking for a free party photo booth? İdeal Photo's Party Booth offers fun party-themed filters, stickers, and frames for any celebration. Perfect for birthdays, graduations, weddings, and more.</p>
            <p className="text-gray-600">Try Party Booth now and make every celebration unforgettable!</p>
          </div>
        </section>
      </PhotoboothLayout>
    </>
  );
};

export default PartyBooth;
