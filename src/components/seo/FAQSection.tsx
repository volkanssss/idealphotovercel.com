'use client';

import React, { useState } from 'react';

const faqData = [
    {
        question: "Is İdeal Photo Vercel App free to use?",
        answer: "Yes, İdeal Photo Vercel App is 100% free. You can create, customize, and download your 4-cut photo strips without any subscription or payment."
    },
    {
        question: "How is it different from Easy4Cut and Memorify?",
        answer: "We offer all the premium features of Easy4Cut and Memorify for free, with additional K-pop style frames, romantic filters, and better high-quality downloads."
    },
    {
        question: "Can I use it on my mobile phone?",
        answer: "Absolutely! Our app is progressive and responsive, meaning it works perfectly on iPhone, Android, and tablets right in your browser."
    },
    {
        question: "How can I download my photo strips?",
        answer: "After capturing your photos and applying your favorite filters, simply click the 'Download' button to save your high-resolution photostrip directly to your device."
    },
    {
        question: "Are there K-pop themed frames?",
        answer: "Yes! We specialize in K-pop style photo booths. You can find frames inspired by popular idols and groups in our K-pop photobooth section."
    }
];

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
                    Frequently Asked Questions (SSS)
                </h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-800 focus:outline-none"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
