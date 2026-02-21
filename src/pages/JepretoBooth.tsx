'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Image, Palette, Focus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jepreto Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free online Jepreto Booth photo booth. Capture amazing moments with professional filters, frames, and instant download.",
  "url": "https://idealphotovercel.com/jepreto-booth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Jepreto Booth?", "acceptedAnswer": { "@type": "Answer", "text": "Jepreto Booth is a free online photo booth by İdeal Photo inspired by the popular Jepreto photo booth concept. Take stunning photos with professional filters and creative frames." } },
    { "@type": "Question", "name": "Is Jepreto Booth free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Jepreto Booth is completely free. No sign-up or payment required." } },
    { "@type": "Question", "name": "How do I use Jepreto Booth?", "acceptedAnswer": { "@type": "Answer", "text": "Simply visit İdeal Photo, allow camera access, choose your filters and frames, and start capturing photos. Download your creations instantly!" } }
  ]
};

const features = [
  { icon: Focus, title: "Pro Photography", description: "Professional-quality photo capture with smart auto-focus and lighting adjustment." },
  { icon: Palette, title: "Creative Frames", description: "Unique and creative frame designs that make every photo a work of art." },
  { icon: Sparkles, title: "Artistic Filters", description: "Apply artistic and cinematic filters for stunning visual effects." },
  { icon: Image, title: "Multi-Shot Mode", description: "Capture multiple photos in sequence for dynamic photo strips." },
  { icon: Download, title: "Instant Download", description: "Download your Jepreto photos in high quality. No watermarks." },
  { icon: Share2, title: "Quick Sharing", description: "Share your Jepreto creations on social media instantly." },
];

const testimonials = [
  { name: "Okan T.", text: "Jepreto Booth is incredible! The artistic filters make every photo look like a masterpiece.", rating: 5 },
  { name: "Yasemin K.", text: "Best free photo booth I've found! Jepreto Booth has the most creative frames.", rating: 5 },
  { name: "Emre B.", text: "I use Jepreto Booth for all my photos. The quality is amazing and it's so easy to use!", rating: 5 },
  { name: "Aslı D.", text: "The cinematic filters in Jepreto Booth are next level. My photos look professional!", rating: 5 },
  { name: "Kerem S.", text: "Finally a free photo booth with real quality. Jepreto Booth is the best!", rating: 5 },
  { name: "İrem Y.", text: "Jepreto Booth makes creating photo strips so fun and easy. Love the creative frames!", rating: 5 },
];

const faqs = [
  { q: "What is Jepreto Booth?", a: "Jepreto Booth is a free online photo booth by İdeal Photo with professional filters, creative frames, and instant download." },
  { q: "Is Jepreto Booth free?", a: "Yes! Completely free with no sign-up required." },
  { q: "How do I use Jepreto Booth?", a: "Visit İdeal Photo, allow camera access, choose filters and frames, and start capturing photos." },
  { q: "What makes Jepreto Booth unique?", a: "Jepreto Booth combines professional photography quality with creative artistic filters and unique frame designs." },
  { q: "Can I use it on mobile?", a: "Yes! Jepreto Booth works perfectly on phones, tablets, and desktops." },
  { q: "Do I need to download an app?", a: "No! Jepreto Booth runs entirely in your browser." },
];

const JepretoBooth = () => {
  return (
    <>
      <SEOHead
        title="Jepreto Booth | Free Online Jepreto Photo Booth | İdeal Photo"
        description="Jepreto Booth by İdeal Photo — free online Jepreto photo booth with artistic filters, creative frames, and instant download. Capture amazing moments with Jepreto Booth!"
        canonicalPath="/jepreto-booth"
        keywords="jepreto booth, jepreto photo booth, jepreto booth online, jepreto booth free, jepreto photobooth, jepreto booth photo strip, free jepreto booth"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">📷 Free Jepreto Booth</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Jepreto Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Capture Amazing Moments</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">The best free Jepreto photo booth online. Professional artistic filters, creative frames, and instant download. Capture stunning moments!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digibooth"><Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Start Jepreto Booth</Button></Link>
              <Link href="/chinchinbooth"><Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2"><Sparkles className="mr-2 h-5 w-5" /> Try Chinchinbooth</Button></Link>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">What is Jepreto Booth?</h2>
            <p className="text-lg text-gray-600 text-center mb-4">Jepreto Booth is a free online photo booth that combines professional photography quality with creative artistic effects. İdeal Photo's Jepreto Booth lets you capture amazing moments with stunning filters and unique frames.</p>
            <p className="text-lg text-gray-600 text-center">Whether you're with friends or taking solo shots, Jepreto Booth makes every photo special. No download needed — just open your browser and start capturing!</p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Jepreto Booth Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What People Say About Jepreto Booth</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Jepreto Booth — FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Capture Amazing Moments?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Start using Jepreto Booth now. It's free and your photos will look incredible!</p>
            <Link href="/digibooth"><Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Open Jepreto Booth</Button></Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Jepreto Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">Looking for the best Jepreto photo booth online? İdeal Photo's Jepreto Booth offers artistic filters, creative frames, and professional quality — all free.</p>
            <p className="text-gray-600">Try Jepreto Booth now and capture moments that last forever!</p>
          </div>
        </section>
      </PhotoboothLayout>
    </>
  );
};

export default JepretoBooth;
