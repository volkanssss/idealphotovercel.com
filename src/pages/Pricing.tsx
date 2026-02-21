'use client';

import React from 'react';
// SEO metadata is handled by the App Router page.tsx metadata export
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "İdeal Photo Pricing Plans",
  "description": "Affordable pricing plans for İdeal Photo virtual photo booth services. Choose from Basic, Pro, and Enterprise plans for all your photo booth needs.",
  "url": "https://idealphotovercel.com/pricing"
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Perfect for personal use and small gatherings",
      features: [
        "5 photo strips per month",
        "Basic frames and filters",
        "Standard resolution downloads",
        "Email support",
        "Watermark on photos"
      ],
      icon: Star,
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Ideal for content creators and small businesses",
      features: [
        "Unlimited photo strips",
        "Premium frames and filters",
        "High-resolution downloads",
        "Remove watermarks",
        "Priority support",
        "Custom backgrounds",
        "Social media integration"
      ],
      icon: Zap,
      buttonText: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For agencies and large-scale events",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "Advanced analytics",
        "Multi-user accounts",
        "24/7 phone support"
      ],
      icon: Crown,
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your photo booth needs. Start free and upgrade as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'
                      }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                        MOST POPULAR
                      </div>
                    )}

                    <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                      <div className="text-center mb-8">
                        <div className={`inline-flex p-3 rounded-full mb-4 ${plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                          }`}>
                          <IconComponent className={`h-6 w-6 ${plan.popular ? 'text-purple-600' : 'text-gray-600'
                            }`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          {plan.period && <span className="text-gray-500">{plan.period}</span>}
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full py-3 text-lg font-semibold ${plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                          }`}
                        asChild
                      >
                        <Link href="/contact">
                          {plan.buttonText}
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a free trial?</h3>
                  <p className="text-gray-600">Our Basic plan is free forever! You can also try Pro features with a 14-day free trial when you sign up.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h3>
                  <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked!</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
