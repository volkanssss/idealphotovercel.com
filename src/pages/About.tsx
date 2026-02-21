'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Camera, Users, Heart, Zap } from 'lucide-react';

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "İdeal Photo",
  "url": "https://idealphotovercel.com",
  "description": "Leading virtual photo booth platform providing high-quality photo experiences for events, businesses, and personal use.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "vlkneles1@gmail.com",
    "contactType": "Customer Service"
  }
};

const About = () => {
  return (
    <>
      <SEOHead 
        title="About İdeal Photo - Leading Virtual Photo Booth Platform" 
        description="Learn about İdeal Photo's mission to provide the best virtual photo booth experience. Discover our story, values, and commitment to creating memorable moments through innovative technology." 
        canonicalPath="/about"
        keywords="about ideal photo, virtual photo booth company, photo booth platform, digital photo solutions, innovative photo technology"
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About İdeal Photo
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Creating unforgettable memories through innovative virtual photo booth technology
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-xl leading-relaxed mb-8">
                    İdeal Photo was born from a simple idea: everyone deserves to capture and share their special moments in a fun, creative, and accessible way. We recognized that traditional photo booths, while beloved, had limitations in terms of accessibility, customization, and sharing capabilities.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    Our team of passionate developers, designers, and photo enthusiasts came together to create something revolutionary - a virtual photo booth platform that combines the joy of traditional photo booths with modern technology's endless possibilities.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Today, İdeal Photo serves thousands of users worldwide, from individual K-pop fans creating memorable moments with their favorite idols to wedding planners adding that special touch to ceremonies, and businesses looking to engage their audiences in creative ways.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    These core values guide everything we do at İdeal Photo
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
                      <Camera className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                    <p className="text-gray-600">
                      We continuously push the boundaries of what's possible in virtual photo experiences, always staying ahead of technology trends.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-6">
                      <Users className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                    <p className="text-gray-600">
                      We believe in building strong communities where people can share their creativity and connect through shared experiences.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
                      <Heart className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Passion</h3>
                    <p className="text-gray-600">
                      Every feature we build is crafted with love and attention to detail, ensuring the best possible user experience.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-6">
                      <Zap className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                    <p className="text-gray-600">
                      We strive for excellence in everything we do, from code quality to customer support and user experience design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  To democratize creative photo experiences by providing accessible, innovative, and fun virtual photo booth solutions that help people capture and share their most precious moments.
                </p>
                <p className="text-lg text-gray-600">
                  We envision a world where anyone, anywhere, can create professional-quality, personalized photo memories without barriers or limitations.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Commitment</h2>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At İdeal Photo, we are committed to providing exceptional service and continuously improving our platform based on user feedback. We believe that great products are built through close collaboration with our community.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you're a casual user creating fun memories or a business looking for professional photo solutions, we're here to support your creative journey every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
