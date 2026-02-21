'use client';


import React from 'react';
import { Card } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

interface PhotoboothTestimonialsProps {
  type?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, avatarUrl }) => {
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card className="p-6 h-full bg-white border border-gray-200 shadow-sm flex flex-col">
      <div className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="36"
          viewBox="0 0 45 36"
          className="mb-4 text-indigo-100 fill-indigo-300"
        >
          <path d="M13.415.043c-6.775 0-12.043 5.268-12.043 12.043s5.268 12.043 12.043 12.043S25.458 18.9 25.458 12.128 20.19.043 13.415.043zm0 22.271c-5.603 0-10.229-4.626-10.229-10.229S7.812 1.814 13.415 1.814s10.229 4.652 10.229 10.229-4.626 10.271-10.229 10.271z" />
        </svg>
        <p className="mb-4 text-gray-700">{quote}</p>
      </div>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={author} />
          ) : (
            <AvatarFallback className="bg-indigo-500 text-white">{initials}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </Card>
  );
};

const PhotoboothTestimonials: React.FC<PhotoboothTestimonialsProps> = ({ type = 'default' }) => {
  // Testimonials data
  const testimonials = [
    {
      quote: "The photo booth was the highlight of our event! Everyone loved taking pictures and the quality was amazing.",
      author: "Jamie Smith",
      role: "Wedding Planner"
    },
    {
      quote: "Super easy to use and the photos came out great. Definitely a crowd pleaser at our corporate party.",
      author: "Michael Johnson",
      role: "Event Coordinator"
    },
    {
      quote: "This digital photo booth solution saved us so much hassle. The customization options are fantastic!",
      author: "Sarah Williams",
      role: "Birthday Celebrant"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Hear from people who've used our photo booth</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoboothTestimonials;
