'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Image, Palette, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BeautyPlus Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free online BeautyPlus style photo booth with beauty filters, skin smoothing, and professional retouching effects.",
  "url": "https://idealphotovercel.com/beautyplus-booth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is BeautyPlus Booth?", "acceptedAnswer": { "@type": "Answer", "text": "BeautyPlus Booth is a free online photo booth by İdeal Photo with professional beauty enhancement filters, skin smoothing, and retouching effects." } },
    { "@type": "Question", "name": "Is BeautyPlus Booth free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! BeautyPlus Booth is completely free. Enhance your photos with beauty filters without any cost." } },
    { "@type": "Question", "name": "What beauty effects are available?", "acceptedAnswer": { "@type": "Answer", "text": "BeautyPlus Booth offers skin smoothing, brightness enhancement, soft glow, beauty filters, and many more professional retouching effects." } }
  ]
};

const features = [
  { icon: Wand2, title: "Beauty Enhancement", description: "Professional beauty filters that smooth skin, brighten eyes, and enhance your natural beauty." },
  { icon: Sparkles, title: "Soft Glow Effects", description: "Add a beautiful soft glow effect to make your photos look magazine-quality." },
  { icon: Palette, title: "Color Correction", description: "Auto color correction for perfect skin tones and vibrant photos." },
  { icon: Image, title: "Photo Strip Mode", description: "Create beautiful photo strips with enhanced beauty in every shot." },
  { icon: Download, title: "HD Download", description: "Download your beautified photos in high definition. No watermarks." },
  { icon: Share2, title: "Easy Sharing", description: "Share your beautiful photos on social media with one click." },
];

const testimonials = [
  { name: "Melis A.", text: "BeautyPlus Booth makes my photos look amazing! The beauty filters are so natural.", rating: 5 },
  { name: "Gül Y.", text: "Best beauty photo booth online! My skin looks flawless in every photo.", rating: 5 },
  { name: "Nur S.", text: "I love the soft glow effect. Makes every photo look like it's from a magazine!", rating: 5 },
  { name: "Seda K.", text: "Finally a free beauty booth that actually looks natural. No more over-filtered photos!", rating: 5 },
  { name: "Esra B.", text: "BeautyPlus Booth is my go-to for beautiful selfies. The quality is incredible.", rating: 5 },
  { name: "Derya M.", text: "The beauty enhancement is so subtle and natural. Love it!", rating: 5 },
];

const faqs = [
  { q: "What is BeautyPlus Booth?", a: "BeautyPlus Booth is a free online photo booth by İdeal Photo with professional beauty enhancement filters and retouching effects." },
  { q: "Is BeautyPlus Booth free?", a: "Yes! Completely free with no sign-up required." },
  { q: "What beauty effects are available?", a: "Skin smoothing, brightness enhancement, soft glow, color correction, and many professional retouching effects." },
  { q: "Are the beauty filters natural-looking?", a: "Yes! Our beauty filters enhance your natural look without over-processing. The results look natural and professional." },
  { q: "Can I use it on mobile?", a: "Absolutely! BeautyPlus Booth works on phones, tablets, and desktops." },
  { q: "Do I need to download an app?", a: "No! BeautyPlus Booth runs in your browser. No download needed." },
];

const BeautyPlusBooth = () => {
  return (
    <>
      <SEOHead
        title="BeautyPlus Booth | Free Online Beauty Photo Booth | İdeal Photo"
        description="BeautyPlus Booth by İdeal Photo — free online beauty photo booth with professional beauty filters, skin smoothing, and retouching effects. Look your best in every photo!"
        canonicalPath="/beautyplus-booth"
        keywords="beautyplus booth, beauty plus booth, beautyplus photo booth, beauty photo booth online, free beauty booth, beauty filter photo booth, beautyplus booth online, beautyplus booth free"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">✨ Free BeautyPlus Booth</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BeautyPlus Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Look Your Best in Every Photo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">The best free beauty photo booth online. Professional beauty filters, skin smoothing, and retouching effects. Look amazing in every photo!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digibooth"><Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Start BeautyPlus Booth</Button></Link>
              <Link href="/selfie-booth"><Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2"><Sparkles className="mr-2 h-5 w-5" /> Try Selfie Booth</Button></Link>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">What is BeautyPlus Booth?</h2>
            <p className="text-lg text-gray-600 text-center mb-4">BeautyPlus Booth is a free online photo booth that brings professional beauty enhancement to your photos. With natural-looking beauty filters, skin smoothing, and color correction — every photo looks perfect.</p>
            <p className="text-lg text-gray-600 text-center">No app download needed. Just open your browser and start taking beautiful photos with İdeal Photo's BeautyPlus Booth.</p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">BeautyPlus Booth Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What People Say About BeautyPlus Booth</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">BeautyPlus Booth — FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Look Amazing?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Start using BeautyPlus Booth now. Free beauty filters for perfect photos!</p>
            <Link href="/digibooth"><Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"><Camera className="mr-2 h-5 w-5" /> Open BeautyPlus Booth</Button></Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">BeautyPlus Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">Looking for the best beauty photo booth online? İdeal Photo's BeautyPlus Booth offers professional beauty filters and retouching effects — all free. Look your best in every photo.</p>
            <p className="text-gray-600">Try BeautyPlus Booth now and see the difference!</p>
          </div>
        </section>
      </PhotoboothLayout>
    </>
  );
};

export default BeautyPlusBooth;
