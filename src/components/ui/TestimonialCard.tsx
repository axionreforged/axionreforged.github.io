"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    country: string;
    achievement: string;
    quote: string;
    avatar: string;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
         {/* Added relative positioning to container */}
         <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            fill
            className="object-cover bg-gray-200"
          />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.country}</p>
          <p className="text-xs text-blue-600 font-semibold">{testimonial.achievement}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic relative pl-4 border-l-2 border-indigo-500">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;