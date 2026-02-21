'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Image, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Chinchinbooth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free online Chinchinbooth photo booth. Create Korean-style photo strips with cute frames and filters.",
  "url": "https://idealphotovercel.com/chinchinbooth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Chinchinbooth?", "acceptedAnswer": { "@type": "Answer", "text": "Chinchinbooth is a popular Korean-style photo booth experience. İdeal Photo brings the chinchinbooth experience online for free with custom frames, filters, and stickers." } },
    { "@type": "Question", "name": "Is Chinchinbooth free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! İdeal Photo's Chinchinbooth is completely free. No sign-up required." } },
    { "@type": "Question", "name": "How do I use Chinchinbooth online?", "acceptedAnswer": { "@type": "Answer", "text": "Just visit İdeal Photo, allow camera access, choose your filters and frames, and start taking photos. Your chinchinbooth photo strip is ready to download instantly." } }
  ]
};

const features = [
  { icon: Camera, title: "Korean-Style Photos", description: "Take authentic Korean-style chinchinbooth photos with professional quality." },
  { icon: Palette, title: "Cute Frames", description: "Choose from adorable chinchinbooth-style frames and borders." },
  { icon: Sparkles, title: "Beauty Filters", description: "Apply Korean beauty filters for flawless chinchinbooth photos." },
  { icon: Image, title: "Photo Strips", description: "Create beautiful photo strips just like real chinchinbooth machines." },
  { icon: Download, title: "Free Download", description: "Download your chinchinbooth photos for free in high quality." },
  { icon: Share2, title: "Share Instantly", description: "Share your chinchinbooth creations on social media with one click." },
];

const testimonials = [
  { name: "Ji-yeon K.", text: "This chinchinbooth online is amazing! The frames look just like the real thing in Korea.", rating: 5 },
  { name: "Soo-min L.", text: "Best chinchinbooth experience online. I use it with my friends every weekend!", rating: 5 },
  { name: "Hye-jin P.", text: "I was looking for a chinchinbooth and İdeal Photo is perfect. Love the cute frames!", rating: 5 },
  { name: "Yuna C.", text: "The beauty filters make my chinchinbooth photos look incredible. Highly recommend!", rating: 5 },
  { name: "Min-seo J.", text: "Finally found a free chinchinbooth online! The quality is amazing.", rating: 5 },
  { name: "Eun-bi H.", text: "I love creating chinchinbooth photo strips. The stickers are so cute!", rating: 5 },
];

const faqs = [
  { q: "What is Chinchinbooth?", a: "Chinchinbooth is a popular Korean-style photo booth experience. İdeal Photo brings the chinchinbooth experience online, completely free." },
  { q: "Is Chinchinbooth free?", a: "Yes! İdeal Photo's Chinchinbooth is completely free. No sign-up required." },
  { q: "How do I use Chinchinbooth online?", a: "Just visit İdeal Photo, allow camera access, choose your filters and frames, and start taking photos." },
  { q: "What makes Chinchinbooth special?", a: "Chinchinbooth features Korean-style cute frames, beauty filters, and the classic photo strip format loved in Korea." },
  { q: "Can I use it on mobile?", a: "Yes! Chinchinbooth works perfectly on phones, tablets, and desktops." },
  { q: "Do I need to download an app?", a: "No! Chinchinbooth runs entirely in your browser. No download needed." },
];

const Chinchinbooth = () => {
  return (
    <>
      <SEOHead
        title="Chinchinbooth | Free Online Chinchin Booth | İdeal Photo"
        description="Chinchinbooth by İdeal Photo — free online chinchinbooth with Korean-style frames, beauty filters, stickers, and instant download. Try the chinchinbooth experience now!"
        canonicalPath="/chinchinbooth"
        keywords="chinchinbooth, chinchin booth, chinchinbooth online, chinchinbooth free, chinchin photo booth, korean photo booth chinchin, chinchinbooth photo strip"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">🎀 Free Chinchinbooth</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Chinchinbooth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">Korean-Style Photo Booth Online</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">The best free chinchinbooth online. Take cute Korean-style photos with beauty filters, adorable frames, and fun stickers. Download and share instantly!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digibooth"><Button size="lg" className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Start Chinchinbooth</Button></Link>
              <Link href="/kpop-photobooth"><Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2"><Sparkles className="mr-2 h-5 w-5" /> Try K-pop Booth</Button></Link>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">What is Chinchinbooth?</h2>
            <p className="text-lg text-gray-600 text-center mb-4">Chinchinbooth (친친부스) is a beloved Korean photo booth brand known for its cute, playful photo strip designs. İdeal Photo brings the chinchinbooth experience online — completely free.</p>
            <p className="text-lg text-gray-600 text-center">With our online chinchinbooth, you can capture the authentic Korean photo booth vibe from anywhere in the world. Cute frames, beauty filters, and adorable stickers included!</p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Chinchinbooth Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What People Say About Chinchinbooth</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Chinchinbooth — FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-sky-600 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-sky-600 to-teal-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Chinchinbooth?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Start creating cute Korean-style photo strips now. Free and fun!</p>
            <Link href="/digibooth"><Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Open Chinchinbooth</Button></Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Chinchinbooth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">Looking for the best chinchinbooth online? İdeal Photo brings the beloved Korean chinchinbooth experience to your screen. Cute frames, beauty filters, and fun stickers — all free.</p>
            <p className="text-gray-600">Try Chinchinbooth now and create adorable photo strips just like in Korea!</p>
          </div>
        </section>
      </PhotoboothLayout>
    </>
  );
};

export default Chinchinbooth;
