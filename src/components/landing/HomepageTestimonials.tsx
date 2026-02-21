'use client';

import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const HomepageTestimonials = () => {
  const testimonials = [
    {
      quote: "İdeal Photo is the best virtual photo booth I've ever used! The K-pop themes are incredible and I love how easy it is to create photo strips with my bias. Way better than easy4cut alternatives!",
      author: "Hannah C.",
      rating: 5,
      role: "K-pop Fan",
      style: "kpop" as const
    },
    {
      quote: "We used İdeal Photo vercel app for our wedding and it was absolutely perfect! Guests loved the photo booth experience and the instant sharing feature. Highly recommend İdeal Photo for any event.",
      author: "Sarah & James",
      rating: 5,
      role: "Wedding Couple",
      style: "default" as const
    },
    {
      quote: "İdeal Photo vercel app is my go-to kpop photo booth online! I use idealphoto to create amazing photocards with my favorite idols. The quality is unmatched and it's completely free.",
      author: "Emily K.",
      rating: 5,
      role: "ARMY & BLINK Fan",
      style: "kpop" as const
    },
    {
      quote: "As an event organizer, I've tried many photo booth apps but İdeal Photo stands out. The vintage and digibooth themes are stunning. Our corporate team had a blast using the İdeal Photo booth!",
      author: "Michael B.",
      rating: 5,
      role: "Event Organizer",
      style: "vintage" as const
    },
    {
      quote: "I discovered idealphoto through a friend and now I'm obsessed! The pica pica photobooth style is so cute. İdeal Photo vercel app works perfectly on my phone and tablet.",
      author: "Jessica Y.",
      rating: 5,
      role: "Content Creator",
      style: "default" as const
    },
    {
      quote: "İdeal Photo is the perfect memorify photobooth alternative! I switched from other photo booth apps and the quality difference is amazing. Love the kpop photobooth features!",
      author: "David L.",
      rating: 5,
      role: "Photography Enthusiast",
      style: "kpop" as const
    }
  ];
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">İdeal Photo User Reviews & Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See why thousands of users choose İdeal Photo as their favorite virtual photo booth app
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join our global community and create unforgettable photo memories with İdeal Photo. Try the İdeal Photo vercel app today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
