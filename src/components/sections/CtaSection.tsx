"use client";

import React from 'react';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Main CTA content */}
      <section className="flex-grow py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Shef Scholars Competitive Math Academy?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Don&apos;t miss this opportunity to accelerate your math skills and join a community of exceptional young mathematicians.
            </p>
            
            <div className="flex justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIbsZZ0TP36ptH1g41Ib51oXk5X6x0P9VvXXdCGZWEGCluSg/viewform">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="animate-pulse"
                >
                  Apply Now - Limited Spots
                </Button>
              </a>
            </div>
            
            <div className="mt-12 bg-blue-800/80 rounded-xl p-6 inline-block border-2 border-blue-300">
              <p className="text-white font-medium">
                <span className="font-bold text-amber-300">Early Bird Discount:</span> Save ${700-480} when you apply before the deadline!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2025 Shef Scholars. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.shefscholars.com/terms.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="https://www.shefscholars.com/privacy_policy.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CtaSection;