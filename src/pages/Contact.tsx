'use client';


import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact İdeal Photo",
  "description": "Get in touch with İdeal Photo team for support, business inquiries, or feedback about our virtual photo booth services.",
  "url": "https://idealphotovercel.com/contact"
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead 
        title="Contact İdeal Photo - Get Support & Business Inquiries" 
        description="Contact İdeal Photo for technical support, business partnerships, feature requests, or general inquiries. We're here to help with all your virtual photo booth needs." 
        canonicalPath="/contact"
        keywords="contact ideal photo, photo booth support, customer service, business inquiries, technical help, virtual photo booth contact"
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Mail className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <p className="text-gray-600">vlkneles1@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <MapPin className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Location</h3>
                            <p className="text-gray-600">Turkey</p>
                            <p className="text-sm text-gray-500 mt-1">Remote-first company</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Clock className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Business Hours</h3>
                            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)</p>
                            <p className="text-sm text-gray-500 mt-1">Weekend support available for urgent issues</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ Quick Links */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Questions</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800">Technical Support</h4>
                          <p className="text-sm text-gray-600">Having issues with the photo booth? Check our FAQ or reach out directly.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Business Partnerships</h4>
                          <p className="text-sm text-gray-600">Interested in partnering with us? We'd love to explore opportunities.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Feature Requests</h4>
                          <p className="text-sm text-gray-600">Have an idea for a new feature? We value user feedback and suggestions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Support Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Get Help</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                    <p className="text-gray-600 text-sm">Browse our comprehensive guides and tutorials</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-4">
                      <Phone className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-gray-600 text-sm">Get instant help during business hours</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                    <p className="text-gray-600 text-sm">Connect with other users and share tips</p>
                  </div>
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

export default Contact;
