"use client";

import React from 'react';
import { motion } from 'framer-motion';
import InstructorCard from '@/components/ui/InstructorCard';
import { INSTRUCTORS } from '@/utils/constants';

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from world-class mathematicians and former competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
             style={{ gridAutoRows: '1fr' }}>
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full" // Added to ensure consistent height
            >
              <InstructorCard instructor={instructor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;