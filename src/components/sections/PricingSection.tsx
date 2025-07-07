import React from 'react';
import PricingCard from '../ui/PricingCard';
import { PRICING_PLANS } from '@/utils/constants';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the package that best fits your learning goals and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Bonus Lectures/Talks & 14-Day Money Back Guarantee</h3>
          <p className="text-gray-700 mb-4">
            14-Day Satisfaction Guarantee: If you withdraw on or before 15 August 2025 (23:59 CEST), 
            have attended all scheduled sessions for your track during the first 14 days, and have submitted 
            your work for all required problem sets before each class, 100% of the Program Fee will be refunded.
          </p>
          <p className="text-gray-700">
            *Bonus Lectures/Talks: The exact number of bonus lectures/talks will be at least 1. 
            There is no guarantee that there will be more than 1 bonus lecture/talk. If more are held, 
            they will be announced at least 48 hours in advance, open to all the tracks, recorded and 
            made available to all students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;