'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, Star, Heart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const PhotoboothSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d361608b-226a-46b1-9c86-864028b3363c.png')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-rose-900">
            Pica Pica Photo Booth | Premium Digital Photo Experience
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-rose-800/90 mb-6 leading-relaxed text-center md:text-lg">
              Transform ordinary moments into extraordinary memories with Pica Pica Photo Booth. 
              Our cutting-edge digital photo experience combines professional-quality photography with 
              playful creativity, offering an unmatched range of customization options, filters, and 
              effects perfect for any occasion - from casual gatherings to milestone celebrations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Camera className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">Professional Quality</h3>
                <p className="text-sm text-rose-700">Studio-grade photo quality with advanced image processing.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Star className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">Creative Freedom</h3>
                <p className="text-sm text-rose-700">Endless customization options with filters and effects.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Heart className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">Instant Sharing</h3>
                <p className="text-sm text-rose-700">Share your memories instantly on any platform.</p>
              </div>
            </div>
            
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className={cn(
                "rounded-xl border border-rose-200 bg-white/90 backdrop-blur-sm transition-all",
                isOpen ? "mt-6" : "mt-2"
              )}
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full flex justify-between items-center py-4 px-6 bg-white/50 hover:bg-rose-50 border-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-rose-900">{isOpen ? "Show less details" : "Learn more about Pica Pica Photo Booth"}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-rose-600" /> : <ChevronDown className="h-5 w-5 text-rose-600" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="p-6 space-y-6 text-rose-800">
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Evolution of Photo Booths: From Analog to Digital</h3>
                <p>
                  Photo booths have come a long way since their invention in the early 20th century. What started as simple black and white strip photos has evolved into a sophisticated digital experience. Pica Pica Booth represents the cutting edge of this evolution, combining advanced camera technology with creative digital elements to produce photo memories that are both high-quality and uniquely personalized.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Pica Pica Booth for Your Event</h3>
                <p>
                  Our digital photobooth solution stands out from traditional options by offering unlimited customization possibilities. Unlike conventional photo booths that are limited by physical constraints, Pica Pica Booth provides a vast library of digital frames, filters, and stickers that can be updated regularly to keep up with trends. This means your event photos will always feel fresh and contemporary.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Features That Make Pica Pica Booth Special</h3>
                <p>
                  What sets Pica Pica Booth apart is our commitment to combining user-friendly technology with creative options. Our intuitive interface makes it easy for guests of all ages to capture perfect photos, while our extensive customization options ensure that each photo strip is unique. From elegant wedding themes to fun party props, our digital elements enhance photos without the mess and limitations of physical props.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Perfect for Every Occasion</h3>
                <p>
                  Pica Pica Booth is versatile enough for any event type. For weddings, our elegant frame designs and high-quality photos create keepsakes that couples and guests will treasure. At corporate events, branded frames and filters reinforce your company identity while providing networking opportunities. Birthday parties become more memorable with themed photo strips that guests can take home as favors. Even casual gatherings are enhanced when friends can capture spontaneous moments together.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Technical Edge</h3>
                <p>
                  Behind the fun experience is serious technology. Pica Pica Booth uses high-resolution cameras capable of capturing professional-quality images. Our proprietary software applies filters and effects in real-time, allowing users to preview their enhanced photos before printing. The digital nature of our booth means we can continuously update and improve the experience, adding new features based on user feedback and emerging trends.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Sharing Made Simple</h3>
                <p>
                  In today's social media-driven world, sharing photos instantly is essential. Pica Pica Booth makes this seamless by allowing users to download their photo strips directly to their devices or share them on social media platforms with a single tap. This instant gratification enhances the user experience while extending the reach of your event beyond those physically present.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Eco-Friendly Photo Memories</h3>
                <p>
                  For environmentally conscious users, our digital photobooth offers a green alternative to traditional photo printing. By emphasizing digital delivery options, we reduce paper waste while still providing lasting memories. Of course, high-quality printing options remain available for those who prefer physical keepsakes, using premium photo paper and ink that ensure your memories won't fade over time.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Psychology of Photo Booths</h3>
                <p>
                  Photo booths have enduring appeal because they tap into fundamental human desires: self-expression, creativity, and connection. The semi-private space of a photo booth creates a psychological environment where people feel free to express themselves, resulting in authentic, often joyful images. Pica Pica Booth enhances this experience by providing creative tools that allow users to express their personalities while creating bonds through shared experiences.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Customization Options for Event Planners</h3>
                <p>
                  Event planners love Pica Pica Booth because it offers unprecedented customization. From matching event color schemes to incorporating specific themes or branding elements, our digital platform can be tailored to complement any event aesthetic. This attention to detail ensures that the photo booth experience feels like an integrated part of the event rather than an add-on attraction.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Looking to the Future</h3>
                <p>
                  As technology continues to evolve, so does Pica Pica Booth. We're continuously exploring innovations like augmented reality filters, AI-powered pose suggestions, and even more creative digital backdrops. By staying at the forefront of photo technology, we ensure that our users always have access to the most engaging and current photo experiences possible.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion: Creating Lasting Memories</h3>
                <p>
                  In the end, what makes Pica Pica Booth special isn't just the technology or the features—it's the memories we help create. In a world where so many experiences are fleeting, our photo booth creates tangible reminders of joy, connection, and celebration. We're proud to play a small part in preserving these precious moments, one photo strip at a time.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoboothSEOSection;
