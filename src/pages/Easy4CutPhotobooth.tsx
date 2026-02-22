'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Sparkles, Star, Heart, Zap, Image, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RelatedBooths } from '@/components/seo/RelatedBooths';

const easy4cutStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Easy4cut Photo Booth Online Free - Photobooth",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Easy4cut Photo Booth Online Free — Create stunning 4-cut photo strips with filters, frames, and stickers. The best free Easy4cut photobooth experience on the web.",
  "url": "https://idealphotovercel.com/easy4cut-photo-booth-online-free",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Easy4cut Photo Booth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easy4cut Photo Booth is a free online photo booth that lets you take 4 photos in a row and create beautiful photo strips with custom frames, filters, and stickers — just like the popular Korean 4-cut photo booths."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use Easy4cut photo booth online free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply visit İdeal Photo, allow camera access, choose your filters and frames, and take 4 photos. Your Easy4cut photo strip is ready to download and share instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is Easy4cut photo booth free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! İdeal Photo's Easy4cut photo booth is completely free. No sign-up required. Take unlimited photos, customize with frames and filters, and download your photo strips at no cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Easy4cut on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our Easy4cut photo booth works perfectly on mobile phones, tablets, and desktops. Just open the website in your browser and start taking photos."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Easy4cut photo booth different from others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easy4cut photo booths capture exactly 4 photos in sequence, creating the iconic Korean-style photo strip layout. İdeal Photo enhances this with professional filters, custom frames, stickers, and instant sharing."
      }
    }
  ]
};

const features = [
  { icon: Camera, title: "4-Cut Photo Capture", description: "Take 4 consecutive photos with automatic countdown timer, just like real Korean photo booths." },
  { icon: Palette, title: "Custom Frames & Borders", description: "Choose from dozens of frame styles, colors, and themes to personalize your Easy4cut photo strip." },
  { icon: Sparkles, title: "Professional Filters", description: "Apply stunning filters including vintage, soft glow, black & white, and Korean-style beauty filters." },
  { icon: Image, title: "Stickers & Overlays", description: "Add cute stickers, emojis, and decorative overlays to make your photos unique and fun." },
  { icon: Download, title: "Instant Download", description: "Download your Easy4cut photo strip instantly in high quality. No watermarks, no sign-up required." },
  { icon: Share2, title: "Easy Sharing", description: "Share your 4-cut photos directly to social media or send them to friends with one click." },
];

const testimonials = [
  { name: "Sarah K.", text: "I love this Easy4cut photo booth! It's exactly like the ones in Korea but I can use it from home. The filters are amazing!", rating: 5 },
  { name: "Min-ji L.", text: "Best Easy4cut experience online. The photo quality is incredible and I love all the frame options. Use it every week with friends!", rating: 5 },
  { name: "Emma T.", text: "Finally found a good Easy4cut photo booth that works on my phone! The stickers and frames make every photo strip look professional.", rating: 5 },
  { name: "Yuki N.", text: "This is my go-to for 4-cut photos. So much better than other online photo booths. The Korean-style filters are perfect!", rating: 5 },
  { name: "Jessica P.", text: "My friends and I use this Easy4cut booth for every hangout. It's free, easy to use, and the results look amazing!", rating: 5 },
  { name: "Hana S.", text: "I was looking for an Easy4cut experience online and İdeal Photo is the best one. Love the variety of frames and filters!", rating: 5 },
];

const faqs = [
  { q: "What is Easy4cut Photo Booth?", a: "Easy4cut Photo Booth is a free online photo booth that lets you take 4 photos in a row and create beautiful photo strips with custom frames, filters, and stickers — just like the popular Korean 4-cut photo booths." },
  { q: "How do I use Easy4cut photo booth online free?", a: "Simply visit İdeal Photo, allow camera access, choose your filters and frames, and take 4 photos. Your Easy4cut photo strip is ready to download and share instantly." },
  { q: "Is Easy4cut photo booth free?", a: "Yes! İdeal Photo's Easy4cut photo booth is completely free. No sign-up required. Take unlimited photos, customize with frames and filters, and download your photo strips at no cost." },
  { q: "Can I use Easy4cut on my phone?", a: "Absolutely! Our Easy4cut photo booth works perfectly on mobile phones, tablets, and desktops. Just open the website in your browser and start taking photos." },
  { q: "What makes Easy4cut photo booth different from others?", a: "Easy4cut photo booths capture exactly 4 photos in sequence, creating the iconic Korean-style photo strip layout. İdeal Photo enhances this with professional filters, custom frames, stickers, and instant sharing." },
  { q: "Can I customize my Easy4cut photo strip?", a: "Yes! You can customize everything — frame color, border style, filters, stickers, text, and background. Make every Easy4cut photo strip uniquely yours." },
  { q: "Do I need to download an app for Easy4cut?", a: "No app download needed! İdeal Photo's Easy4cut photo booth runs entirely in your web browser. Works on Chrome, Safari, Firefox, and all modern browsers." },
  { q: "How many photos can I take?", a: "You can take unlimited photos! Each Easy4cut session captures 4 photos, but you can retake and create as many photo strips as you want." },
];

const Easy4CutPhotobooth = () => {
  return (
    <>
      <SEOHead
        title="Easy4cut Photo Booth Online Free - Photobooth"
        description="Easy4cut Photo Booth Online Free by İdeal Photo — the best free online Easy4cut photobooth. Create stunning 4-cut photo strips with Korean-style frames, filters, stickers, and effects. Try the Easy4cut experience now!"
        canonicalPath="/easy4cut-photo-booth-online-free"
        keywords="easy4cut, easy 4 cut, easy4cut photo booth, easy 4 cut photo booth, easy4cut online, easy4cut photobooth, 4 cut photo booth, korean photo booth, 4 cut photo strip, easy4cut free, easy 4 cut online, four cut photo booth"
        ogType="website"
        structuredData={[easy4cutStructuredData, faqStructuredData]}
      />

      <PhotoboothLayout bgColor="bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
              ✨ Free Easy 4 Cut Photo Booth
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Easy 4 Cut Photo Booth <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                Create Perfect Photo Strips
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The best free easy4cut photo booth online. Take 4 stunning photos, customize with Korean-style frames, filters, and stickers. Download and share your easy 4 cut photo strips instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pica-pica-booth">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  <Camera className="mr-2 h-5 w-5" /> Start Easy 4 Cut Now
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

        {/* What is Easy 4 Cut */}
        <section className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              What is Easy 4 Cut Photo Booth?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-4">
              Easy 4 cut (easy4cut) is a popular Korean-style photo booth format where you take 4 consecutive photos that are arranged in a vertical strip — perfect for keeping as memories or sharing with friends. İdeal Photo brings this easy4cut experience online, completely free.
            </p>
            <p className="text-lg text-gray-600 text-center">
              Our easy 4 cut photo booth lets you capture the authentic Korean photo booth experience from anywhere in the world. With professional-quality filters, customizable frames, cute stickers, and instant download — it's the ultimate easy4cut photobooth experience online.
            </p>
          </motion.div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Easy 4 Cut Photo Booth Features
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
                <feature.icon className="h-10 w-10 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl my-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How to Use Easy 4 Cut Photo Booth
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Open Photo Booth", desc: "Visit İdeal Photo and click 'Start Easy 4 Cut' to open the photo booth." },
              { step: "2", title: "Allow Camera", desc: "Grant camera permission to start your easy4cut photo session." },
              { step: "3", title: "Take 4 Photos", desc: "Smile and capture 4 amazing photos with automatic countdown." },
              { step: "4", title: "Customize & Download", desc: "Add frames, filters, stickers and download your easy 4 cut strip!" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
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
            What People Say About Our Easy 4 Cut Booth
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
            Easy 4 Cut Photo Booth — Frequently Asked Questions
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
                  <span className="text-violet-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try Easy 4 Cut?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start creating beautiful easy4cut photo strips now. It's free, fun, and takes less than a minute!
            </p>
            <Link href="/pica-pica-booth">
              <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg">
                <Camera className="mr-2 h-5 w-5" /> Start Easy 4 Cut Photo Booth
              </Button>
            </Link>
          </div>
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Easy 4 Cut Photo Booth Online — İdeal Photo</h2>
            <p className="text-gray-600 mb-4">
              Looking for the best easy4cut photo booth online? İdeal Photo offers a premium easy 4 cut experience that brings the beloved Korean photo booth culture to your screen. Whether you're at home, at a party, or hanging out with friends — our easy4cut photobooth delivers professional-quality photo strips every time.
            </p>
            <p className="text-gray-600 mb-4">
              The easy 4 cut photo booth trend started in South Korea and has taken the world by storm. Now you don't need to visit a physical booth — İdeal Photo's easy4cut online booth gives you the same experience with even more customization options. Choose from hundreds of frames, apply beauty filters, add stickers, and create the perfect 4-cut photo strip.
            </p>
            <p className="text-gray-600">
              İdeal Photo is the most popular free easy4cut photo booth on the web. With millions of photo strips created, our easy 4 cut booth is trusted by users worldwide. Try it now and see why everyone loves İdeal Photo's easy4cut experience!
            </p>
          </div>
        </section>

        <RelatedBooths />
      </PhotoboothLayout>
    </>
  );
};

export default Easy4CutPhotobooth;
