'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Image, Palette, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RelatedBooths } from '@/components/seo/RelatedBooths';

const memorifyStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Memorify Photo Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Memorify Photo Booth online — Create beautiful photo memories with custom frames, filters, and effects. The best free memorify photobooth experience.",
  "url": "https://idealphotovercel.com/memorify-photo-booth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Memorify Photo Booth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Memorify Photo Booth is a free online photo booth platform that helps you create beautiful photo memories with custom frames, filters, and effects. İdeal Photo provides the best memorify photobooth experience online."
      }
    },
    {
      "@type": "Question",
      "name": "How does memorify photobooth work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open İdeal Photo's memorify photo booth in your browser, allow camera access, choose your preferred style and filters, take photos, and download your customized photo strip instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is memorify photo booth free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! İdeal Photo's memorify photo booth is completely free. Take unlimited photos, apply filters and frames, and download all your photo strips at no cost."
      }
    }
  ]
};

const features = [
  { icon: Camera, title: "HD Photo Capture", description: "Take crystal-clear photos with your webcam. Our memorify booth uses advanced processing for the best quality." },
  { icon: Palette, title: "Beautiful Frames", description: "Choose from a wide collection of frames and borders to make your memorify photo strip stand out." },
  { icon: Sparkles, title: "Smart Filters", description: "Apply AI-enhanced filters including beauty mode, vintage, warm glow, and many more styles." },
  { icon: Image, title: "Creative Stickers", description: "Decorate your photos with hundreds of cute stickers, text overlays, and decorative elements." },
  { icon: Users, title: "Group Photos", description: "Perfect for group sessions! Capture memories with friends, family, or colleagues in your memorify booth." },
  { icon: Clock, title: "Countdown Timer", description: "Adjustable countdown timer gives you time to pose perfectly for every shot." },
];

const testimonials = [
  { name: "Alex M.", text: "Memorify photo booth is amazing! I use İdeal Photo every time I want to create fun photo strips. The quality is unmatched!", rating: 5 },
  { name: "Sophie W.", text: "Best memorify photobooth experience online! The frames and filters are gorgeous. I've tried many photo booths but this is the one I keep coming back to.", rating: 5 },
  { name: "David L.", text: "We used this memorify booth for our office party and everyone loved it! So easy to use and the results look professional.", rating: 5 },
  { name: "Mia C.", text: "I was searching for a good memorify photo booth and found İdeal Photo. It's free and the quality is better than paid options!", rating: 5 },
  { name: "James R.", text: "The memorify photobooth on İdeal Photo is fantastic. My kids love taking photos and decorating them with stickers!", rating: 5 },
  { name: "Lisa K.", text: "Perfect memorify booth for creating memories! I use it for birthdays, holidays, and just fun photo sessions with friends.", rating: 5 },
];

const faqs = [
  { q: "What is Memorify Photo Booth?", a: "Memorify Photo Booth is a free online photo booth platform that helps you create beautiful photo memories with custom frames, filters, and effects. İdeal Photo provides the best memorify photobooth experience online." },
  { q: "How does memorify photobooth work?", a: "Simply open İdeal Photo's memorify photo booth in your browser, allow camera access, choose your preferred style and filters, take photos, and download your customized photo strip instantly." },
  { q: "Is memorify photo booth free to use?", a: "Yes! İdeal Photo's memorify photo booth is completely free. Take unlimited photos, apply filters and frames, and download all your photo strips at no cost." },
  { q: "Can I use memorify photobooth on mobile?", a: "Yes! Our memorify photo booth is fully responsive and works perfectly on smartphones, tablets, and desktop computers." },
  { q: "What types of photo strips can I create with memorify?", a: "You can create classic vertical strips, modern grid layouts, diagonal strips, and more. Each layout can be customized with different frames, colors, and sticker combinations." },
  { q: "Do I need to create an account for memorify photobooth?", a: "No account needed! İdeal Photo's memorify photo booth is instant — just open the page and start capturing memories." },
  { q: "Can I share my memorify photos on social media?", a: "Absolutely! Download your photo strip and share it anywhere, or use our built-in share feature to post directly to your favorite social media platforms." },
  { q: "What makes İdeal Photo's memorify booth special?", a: "İdeal Photo offers the most comprehensive memorify photobooth experience with professional filters, extensive frame collection, creative stickers, multiple layout options, and the best image quality — all completely free." },
];

const MemorifyPhotobooth = () => {
  return (
    <>
      <SEOHead
        title="Memorify Photo Booth | Free Online Memorify Photobooth | İdeal Photo"
        description="Memorify Photo Booth by İdeal Photo — the best free online memorify photobooth. Create stunning photo memories with custom frames, filters, stickers, and effects. Try the memorify photo booth experience now!"
        canonicalPath="/memorify-photo-booth"
        keywords="memorify, memorify photo booth, memorify photobooth, memorify online, memorify photo strip, photo booth online, free photo booth, photo memories, memorify free, memorify booth, photo strip maker"
        ogType="website"
        structuredData={[memorifyStructuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              📸 Free Memorify Photo Booth
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Memorify Photo Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Capture Beautiful Memories
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The best free memorify photo booth online. Create stunning photo strips with professional frames, filters, and stickers. Download and share your memorify photos instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pica-pica-booth">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  <Camera className="mr-2 h-5 w-5" /> Start Memorify Booth Now
                </Button>
              </Link>
              <Link href="/digibooth">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                  <Sparkles className="mr-2 h-5 w-5" /> Try Digibooth
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* What is Memorify */}
        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              What is Memorify Photo Booth?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-4">
              Memorify photo booth is a modern online photo booth that focuses on creating lasting photo memories. Whether it's a birthday, wedding, party, or casual hangout — the memorify photobooth experience helps you capture and preserve those special moments beautifully.
            </p>
            <p className="text-lg text-gray-600 text-center">
              İdeal Photo's memorify booth combines cutting-edge camera technology with creative customization tools. Take photos, apply professional filters, choose from dozens of frame styles, add cute stickers, and download your finished memorify photo strip — all in seconds, all for free.
            </p>
          </motion.div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Memorify Photo Booth Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl my-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How to Use Memorify Photo Booth
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Open Memorify Booth", desc: "Visit İdeal Photo and click 'Start Memorify Booth' to begin." },
              { step: "2", title: "Allow Camera", desc: "Grant camera permission to start your memorify photo session." },
              { step: "3", title: "Capture Memories", desc: "Take photos with the countdown timer and pose with friends." },
              { step: "4", title: "Customize & Share", desc: "Add frames, filters, stickers and share your memorify photos!" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What People Say About Memorify Photo Booth
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Memorify Photo Booth — Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Memorify Experience</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Create beautiful photo memories with the best memorify photo booth online. Free, fast, and fun!
            </p>
            <Link href="/pica-pica-booth">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg">
                <Camera className="mr-2 h-5 w-5" /> Start Memorify Photo Booth
              </Button>
            </Link>
          </div>
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Memorify Photo Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">
              Looking for the best memorify photo booth experience? İdeal Photo delivers a premium memorify photobooth that makes creating photo memories effortless. Our platform combines professional-grade camera technology with creative tools that let you design stunning photo strips in seconds.
            </p>
            <p className="text-gray-600 mb-4">
              The memorify photo booth concept is all about preserving memories in a fun, creative way. İdeal Photo takes this to the next level with advanced filters, beautiful frame collections, and hundreds of stickers. Whether you're creating memorify photos for a special occasion or just for fun — our booth delivers every time.
            </p>
            <p className="text-gray-600">
              Join millions of happy users who trust İdeal Photo for their memorify photobooth needs. Our free online memorify photo booth is available 24/7, works on any device, and produces the highest quality photo strips. Try the memorify experience today!
            </p>
          </div>
        </section>

        <RelatedBooths />
      </PhotoboothLayout>
    </>
  );
};

export default MemorifyPhotobooth;
