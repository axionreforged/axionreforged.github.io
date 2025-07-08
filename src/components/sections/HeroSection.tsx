"use client";

import React from 'react';
import Image from 'next/image';
import CountdownTimer from '../ui/CountdownTimer';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
 {/* Background image with overlay - FIXED POSITIONING */}
  <div className="absolute inset-0 z-0"> {/* This has absolute positioning */}
    <Image
      src="/images/hero-bg.jpg"
      alt="Students solving math problems"
      fill
      className="object-cover"
      quality={100}
      priority
    />
 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />
  </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Achievement badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
  <Image 
    src="/images/gold-medal.png" 
    alt="Gold Medal" 
    width={24} 
    height={24} 
  />
  <span className="ml-2 font-bold text-white">Shef Scholars produced</span> 
  <span className="ml-2 font-bold text-amber-400">6 IMO contestants</span>
</div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="text-amber-400">Shef Scholars</span>
            <br />Competitive Math Academy
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Learn how to think when solving math problems. Attend live lectures held by former competitors, 
            do problem sets, learn problem solving techniques, and meet mathletes from around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              className="animate-pulse"
            >
              <a href= "#pricing-section">Apply Now - Limited Spots</a>
            </Button>
            <Button 
              variant="light" 
              size="lg"
            >
               <a href= "#schedule-section">View Program Details</a>
            </Button>
          </div>
          
          {/* Countdown timers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-xl">
                <CountdownTimer 
                  title="Early Bird Discount Ends In:"
                  className="your-class-name"
                  targetDate="2025-07-15T11:59:59Z"
                />
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 shadow-xl">
                <CountdownTimer 
                  title="Application Closes In:"
                  className="your-class-name"
                  targetDate="2025-07-25T11:59:59Z"
                />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;