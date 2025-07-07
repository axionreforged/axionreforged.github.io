"use client";

import React from 'react';
import TrackCard from '../ui/TrackCard';
import { TRACKS } from '@/utils/constants';

const TracksSection: React.FC = () => {
  return (
    <section id="schedule-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Track</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Groups A and B are the same classes at different times of the day. 
            Select the schedule that works best for you.
          </p>
          
          {/* Added reference problems explanation */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4 max-w-3xl mx-auto border border-blue-100">
            <p className="text-gray-700">
              <span className="font-bold text-blue-700">Unsure which level to apply for?</span>{' '}
              Review our{' '}
              <a 
                href="http://www.shefscholars.com/reference_problems.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
              >
                level reference problems
              </a>{' '}
              to find the right track for your skills.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            <span className="font-bold">Difficulty levels:</span> 
            <span className="text-green-600 mx-2">Beginner</span> → 
            <span className="text-blue-500 mx-2">Apprentice</span> → 
            <span className="text-purple-600 mx-2">Machine</span> → 
            <span className="text-amber-500 mx-2">Shef</span>
          </p>
          <p className="text-sm text-gray-500">
            (Shef being the most advanced level)
          </p>
          
          {/* Added link at the bottom for better visibility */}
          <div className="mt-6">
            <a 
              href="http://www.shefscholars.com/reference_problems.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>Download Reference Problems PDF</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;