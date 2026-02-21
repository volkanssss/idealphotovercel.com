'use client';


import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const DigiboothTestimonials = () => {
  const testimonials = [
    {
      quote: "Digibooth was the highlight of our wedding! The photos turned out amazing, and everyone had so much fun with the props. Definitely booking again for future events!",
      author: "Emily R.",
      rating: 5,
      role: "Wedding Client"
    },
    {
      quote: "Super easy setup and great quality prints. Digibooth added a fun and interactive element to our party. Highly recommend it for any celebration!",
      author: "Jason T.",
      rating: 5,
      role: "Event Host"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">User Reviews</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from Digibooth users
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigiboothTestimonials;
