import React from 'react';
import Button from './Button';

interface PricingCardProps {
  plan: {
    id: string;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    spots: string;
    features: string[];
    cta: string;
    badge: string | null;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl relative
      ${plan.id === 'accountability' ? 'border-2 border-amber-400 transform scale-[1.02]' : ''}
    `}>
      {plan.badge && (
        <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white font-bold text-sm
          ${plan.badge === 'POPULAR' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : ''}
          ${plan.badge === 'BEST VALUE' ? 'bg-gradient-to-r from-purple-600 to-indigo-700' : ''}
        `}>
          {plan.badge}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        
        <div className="mb-6">
          <div className="flex items-end justify-center">
            <span className="text-4xl font-bold text-gray-800">${plan.discountedPrice}</span>
            <span className="text-lg text-gray-500 line-through ml-2">${plan.originalPrice}</span>
          </div>
          <p className="text-center text-gray-600 mt-1">{plan.spots}</p>
        </div>
        
        <ul className="mb-8 space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIbsZZ0TP36ptH1g41Ib51oXk5X6x0P9VvXXdCGZWEGCluSg/viewform">
        <Button 
          variant={plan.id === 'accountability' ? 'secondary' : 'primary'} 
          size="lg"
          className="w-full"
        >
          {plan.cta}
        </Button>
        </a>
      </div>
    </div>
  );
};

export default PricingCard;