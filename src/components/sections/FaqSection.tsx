import React from 'react';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { FAQS } from '@/utils/constants';

const FaqSection: React.FC = () => {
  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about the Shef Scholars program.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <FaqAccordion 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;