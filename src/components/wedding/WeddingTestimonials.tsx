'use client';


import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import { Heart } from 'lucide-react';

const WeddingTestimonials = () => {
  const testimonials = [
    {
      quote: "Our guests couldn't stop talking about the wedding photobooth! It was such a hit and gave everyone a special keepsake to remember our day.",
      author: "Sarah & Michael",
      rating: 5,
      style: "vintage" as const,
      date: "June 2023"
    },
    {
      quote: "The elegant design matched our wedding theme perfectly. The photos were high quality and the whole process was seamless. Highly recommended!",
      author: "Jessica & David",
      rating: 5,
      style: "vintage" as const,
      date: "August 2023"
    },
    {
      quote: "Working with KPop Photobooth for our wedding was one of the best decisions we made. The custom templates looked amazing with our wedding colors.",
      author: "Emily & Thomas",
      rating: 4,
      style: "vintage" as const,
      date: "October 2023"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-gray-800">What Couples Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from couples who used our Wedding Photobooth for their special day
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                style={testimonial.style}
              />
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-pink-500" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingTestimonials;
