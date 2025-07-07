"use client";

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  title: string;
  className?: string;
  targetDate: string; // ISO string for the target date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  title, 
  className,
  targetDate: targetDateString 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false
  });

  useEffect(() => {
    setIsClient(true);
    
    const targetDate = new Date(targetDateString);
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { 
          days: 0, 
          hours: 0, 
          minutes: 0, 
          seconds: 0, 
          completed: true 
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        completed: false
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  // Don't render anything on the server
  if (!isClient) {
    return (
      <div className={`${className} text-center`}>
        <div className="text-white font-bold text-lg mb-2">{title}</div>
        <div className="flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center mx-1">
              <div className="bg-gray-300 animate-pulse rounded-xl w-16 h-16"></div>
              <span className="text-white text-xs mt-1">Loading...</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (timeLeft.completed) {
    return (
      <div className="text-center">
        <div className="text-white font-bold text-lg">{title}</div>
        <div className="text-red-400 font-bold text-xl">OFFER EXPIRED!</div>
      </div>
    );
  }
  
  return (
    <div className={`${className} text-center`}>
      <div className="text-white font-bold text-lg mb-2">{title}</div>
      <div className="flex justify-center space-x-2">
        <div className="flex flex-col items-center mx-1">
         <div className="bg-white/20 backdrop-blur-lg rounded-xl w-16 h-16 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-xs mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center mx-1">
         <div className="bg-white/20 backdrop-blur-lg rounded-xl w-16 h-16 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-xs mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center mx-1">
         <div className="bg-white/20 backdrop-blur-lg rounded-xl w-16 h-16 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-xs mt-1">Minutes</span>
        </div>
        <div className="flex flex-col items-center mx-1">
         <div className="bg-white/20 backdrop-blur-lg rounded-xl w-16 h-16 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-xs mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;