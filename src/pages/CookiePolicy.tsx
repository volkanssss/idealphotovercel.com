'use client';


import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const CookiePolicy = () => {
  return (
    <>
      <SEOHead 
        title="Cookie Policy | İdeal Photo - Cookie Usage Information" 
        description="Learn about how İdeal Photo uses cookies and similar technologies to enhance your experience on our virtual photo booth platform." 
        canonicalPath="/cookie-policy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                <p className="text-xl opacity-90">Last updated: January 25, 2025</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">What Are Cookies?</h2>
                  <p className="text-gray-700 mb-6">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">How We Use Cookies</h2>
                  <p className="text-gray-700 mb-6">
                    İdeal Photo uses cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. We are transparent about our cookie usage and respect your privacy choices.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">These cookies are necessary for the website to function properly:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Session management and user authentication</li>
                    <li>Security and fraud prevention</li>
                    <li>Basic website functionality</li>
                    <li>Remembering your preferences during your visit</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Performance and Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">These cookies help us understand how visitors use our website:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Website traffic analysis</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Understanding user behavior and preferences</li>
                    <li>Measuring the effectiveness of our content</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Functional Cookies</h3>
                  <p className="text-gray-700 mb-4">These cookies enhance functionality and personalization:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Remembering your photo booth preferences</li>
                    <li>Saving your customization settings</li>
                    <li>Language and region preferences</li>
                    <li>Theme and layout preferences</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Local Storage and Photo Processing</h2>
                  <p className="text-gray-700 mb-6">
                    Our photo booth application uses local storage to temporarily store:
                  </p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Your photo booth configurations and settings</li>
                    <li>Temporary image data during photo processing</li>
                    <li>Your selected themes, filters, and customizations</li>
                    <li>User interface preferences</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    This data is stored locally on your device and never transmitted to our servers. It is automatically cleared when you close your browser or clear your local storage.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Third-Party Services</h2>
                  <p className="text-gray-700 mb-4">We may use third-party services that set their own cookies:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li><strong>Analytics Services:</strong> For website analytics and user behavior tracking</li>
                    <li><strong>Social Media Platforms:</strong> For sharing functionality</li>
                    <li><strong>Content Delivery Networks (CDNs):</strong> For faster content delivery</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    These third parties have their own privacy policies and cookie practices. Please review their policies for more information about how they use cookies.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-700 mb-4">You have several options to manage cookies:</p>
                  
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Browser Settings</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>View and delete cookies through your browser settings</li>
                    <li>Block all cookies or specific types of cookies</li>
                    <li>Set preferences for cookie acceptance</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Opt-Out Options</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Use privacy-focused browsers or extensions</li>
                    <li>Enable "Do Not Track" in your browser</li>
                    <li>Configure your browser to block third-party cookies</li>
                  </ul>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Cookie Consent</h2>
                  <p className="text-gray-700 mb-6">
                    When you first visit our website, you will be prompted to consent to our use of cookies. You can withdraw your consent at any time by clearing your browser cookies or adjusting your browser settings.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Impact of Disabling Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Disabling cookies may affect your experience on our website:
                  </p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Some features may not work properly</li>
                    <li>Your preferences may not be saved</li>
                    <li>You may need to re-enter information</li>
                    <li>The website may not function optimally</li>
                  </ul>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Updates to This Policy</h2>
                  <p className="text-gray-700 mb-6">
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
                  </p>
                  
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> vlkneles1@gmail.com</p>
                    <p className="text-gray-700 mb-2"><strong>Website:</strong> https://idealphotovercel.com</p>
                    <p className="text-gray-700"><strong>Address:</strong> Turkey</p>
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

export default CookiePolicy;
