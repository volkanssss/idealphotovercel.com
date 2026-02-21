'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Smile, Image, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Selfie Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free online selfie booth with beauty filters, frames, and instant download. Take perfect selfies with İdeal Photo.",
  "url": "https://idealphotovercel.com/selfie-booth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Selfie Booth?", "acceptedAnswer": { "@type": "Answer", "text": "Selfie Booth is a free online photo booth by İdeal Photo that lets you take beautiful selfies with professional beauty filters, custom frames, and fun stickers." } },
    { "@type": "Question", "name": "Is Selfie Booth free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Selfie Booth is completely free. Take unlimited selfies, apply filters, and download without any cost or sign-up." } },
    { "@type": "Question", "name": "Can I use Selfie Booth on my phone?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Selfie Booth works perfectly on mobile phones, tablets, and desktops. Just open the website and start taking selfies." } }
  ]
};

const features = [
  { icon: Smile, title: "Beauty Filters", description: "Enhance your selfies with professional beauty filters that smooth skin and brighten your look." },
  { icon: Palette, title: "Custom Frames", description: "Choose from dozens of stylish frames and borders to make your selfies stand out." },
  { icon: Sparkles, title: "Fun Stickers", description: "Add cute stickers, emojis, and overlays to personalize every selfie." },
  { icon: Image, title: "Photo Strip Mode", description: "Take multiple selfies and create beautiful photo strips to share with friends." },
  { icon: Download, title: "Instant Download", description: "Download your selfies in high quality instantly. No watermarks, no sign-up." },
  { icon: Share2, title: "Easy Sharing", description: "Share your selfies directly to social media or send them to friends." },
];

const testimonials = [
  { name: "Ayşe K.", text: "Selfie Booth has the best beauty filters! My selfies look amazing every time.", rating: 5 },
  { name: "Elif M.", text: "I love taking photo strips with my friends using Selfie Booth. So fun and easy!", rating: 5 },
  { name: "Zeynep T.", text: "Finally a free selfie booth that actually works well on my phone. Love it!", rating: 5 },
  { name: "Deniz A.", text: "The frames and stickers make every selfie unique. Best selfie app online!", rating: 5 },
  { name: "Selin P.", text: "I use Selfie Booth every day. The filters are gorgeous and the quality is perfect.", rating: 5 },
  { name: "Ceren S.", text: "No download needed and it's free? Selfie Booth is the best thing ever!", rating: 5 },
];

const faqs = [
  { q: "What is Selfie Booth?", a: "Selfie Booth is a free online photo booth by İdeal Photo that lets you take beautiful selfies with professional beauty filters, custom frames, and fun stickers." },
  { q: "Is Selfie Booth free?", a: "Yes! Selfie Booth is completely free. Take unlimited selfies, apply filters, and download without any cost or sign-up." },
  { q: "Can I use Selfie Booth on my phone?", a: "Absolutely! Selfie Booth works perfectly on mobile phones, tablets, and desktops." },
  { q: "What filters are available?", a: "We offer beauty filters, vintage, black & white, soft glow, warm tone, cool tone, and many more professional-quality filters." },
  { q: "Do I need to create an account?", a: "No account needed! Just open Selfie Booth in your browser and start taking selfies immediately." },
  { q: "Can I take photo strips?", a: "Yes! You can take multiple selfies and arrange them in beautiful photo strip layouts." },
];

const SelfieBooth = () => {
  return (
    <>
      <SEOHead
        title="Selfie Booth | Free Online Selfie Photo Booth | İdeal Photo"
        description="Selfie Booth by İdeal Photo — free online selfie photo booth with beauty filters, custom frames, stickers, and instant download. Take perfect selfies now!"
        canonicalPath="/selfie-booth"
        keywords="selfie booth, selfie photo booth, online selfie booth, free selfie booth, selfie booth online, selfie photo booth online, beauty filter selfie, selfie booth free"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
              📸 Free Selfie Booth
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Selfie Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                Take Perfect Selfies Online
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The best free online selfie booth. Take stunning selfies with beauty filters, custom frames, and stickers. Download and share instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digibooth">
                <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  <Camera className="mr-2 h-5 w-5" /> Start Selfie Booth
                </Button>
              </Link>
              <Link href="/easy4cut-photo-booth">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                  <Sparkles className="mr-2 h-5 w-5" /> Try Easy 4 Cut
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* What is Selfie Booth */}
        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">What is Selfie Booth?</h2>
            <p className="text-lg text-gray-600 text-center mb-4">
              Selfie Booth is a free online photo booth designed for taking beautiful selfies. With professional beauty filters, customizable frames, cute stickers, and instant download — İdeal Photo's Selfie Booth is the ultimate selfie experience.
            </p>
            <p className="text-lg text-gray-600 text-center">
              No app download needed. Just open your browser, allow camera access, and start taking perfect selfies in seconds. Works on mobile, tablet, and desktop.
            </p>
          </motion.div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Selfie Booth Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What People Say About Selfie Booth</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Selfie Booth — FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-rose-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Perfect Selfies?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Start using Selfie Booth now. It's free, fun, and your selfies will look amazing!</p>
            <Link href="/digibooth">
              <Button size="lg" className="bg-white text-rose-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg">
                <Camera className="mr-2 h-5 w-5" /> Open Selfie Booth
              </Button>
            </Link>
          </div>
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selfie Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">Looking for the best free selfie booth online? İdeal Photo's Selfie Booth offers professional beauty filters, custom frames, and fun stickers — all completely free. Take stunning selfies from anywhere.</p>
            <p className="text-gray-600">İdeal Photo is the most popular free selfie booth on the web. Try it now and see why everyone loves our selfie experience!</p>
          </div>
        </section>
      </PhotoboothLayout>
    </>
  );
};

export default SelfieBooth;
