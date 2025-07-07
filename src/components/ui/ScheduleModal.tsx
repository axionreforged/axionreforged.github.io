"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LessonSchedule {
  "Lesson Title": string;
  "Subject": string;
  "Grade Level": string;
  "Session": string;
  "Date and Time": string;
  "Objectives": string;
  "Lesson Status": string;
  "Teaching Method": string;
  "PDF Link"?: string;
}

interface ScheduleModalProps {
  schedule: LessonSchedule[];
  trackName: string;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ 
  schedule, 
  trackName, 
  onClose 
}) => {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  
  // Track color mapping
  const trackColor = useMemo(() => {
    const level = trackName.toLowerCase();
    if (level.includes('beginner')) return '#10B981'; // Emerald
    if (level.includes('apprentice')) return '#3B82F6'; // Blue
    if (level.includes('machine')) return '#8B5CF6'; // Violet
    if (level.includes('shef')) return '#F59E0B'; // Amber
    return '#2563EB'; // Default blue
  }, [trackName]);

  // Get complementary colors - more subtle and professional
  const complementaryColors = useMemo(() => {
    return {
      light: '#F8FAFC',   // Very light background
      medium: trackColor, // Use track color for accents
      dark: '#1E293B',    // Dark text
      lightBorder: '#E2E8F0' // Subtle borders
    };
  }, [trackColor]);

  // Parse date with better error handling
  const parseDate = (dateString: string): Date | null => {
    if (!dateString) return null;
    try {
      const datePart = dateString.split('→')[0].trim();
      const date = new Date(datePart);
      return isNaN(date.getTime()) ? null : date;
    } catch {
      return null;
    }
  };

  // Filter and sort lessons
  const filteredSchedule = useMemo(() => {
    const now = new Date();
    return schedule
      .map(lesson => ({
        ...lesson,
        parsedDate: parseDate(lesson["Date and Time"])
      }))
      .filter(lesson => {
        if (filter === 'all') return true;
        if (!lesson.parsedDate) return true;
        
        if (filter === 'completed') return lesson.parsedDate < now;
        if (filter === 'upcoming') return lesson.parsedDate > now;
        
        return true;
      })
      .sort((a, b) => {
        if (a.parsedDate && b.parsedDate) {
          return a.parsedDate.getTime() - b.parsedDate.getTime();
        }
        return 0;
      });
  }, [schedule, filter]);

  // Format date display
  const formatDate = (date: Date | null): string => {
    if (!date) return 'Date not specified';
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Professional LaTeX display
  const formatLaTeX = (text: string) => {
    if (!text) return null;
    
    return text.split('\n').map((paragraph, i) => (
      <div key={i} className="mb-3">
        {paragraph.split(/(\$[^$]+\$)/g).map((part, j) => {
          if (part.startsWith('$') && part.endsWith('$')) {
            return (
              <span 
                key={j} 
                className="inline-block font-mono bg-gray-50 px-2 py-1 rounded border border-gray-200 text-gray-700 text-sm mx-1 my-1"
              >
                {part.slice(1, -1)}
              </span>
            );
          }
          return part;
        })}
      </div>
    ));
  };

  // Days until with professional urgency indicators
  const daysUntil = (date: Date | null): {text: string, badgeStyle: string} => {
    if (!date) return {text: '', badgeStyle: ''};
    const diff = date.getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days >= 45) return {
      text: `Starts in ${days} days`,
      badgeStyle: 'bg-blue-50 text-blue-700 border border-blue-200'
    };
    if (days >= 30) return {
      text: `Starts in ${days} days`,
      badgeStyle: 'bg-teal-50 text-teal-700 border border-teal-200'
    };
    if (days >= 14) return {
      text: `Starts in ${days} days`,
      badgeStyle: 'bg-green-50 text-green-700 border border-green-200'
    };
    if (days >= 7) return {
      text: `Starts in ${days} days`,
      badgeStyle: 'bg-amber-50 text-amber-700 border border-amber-200'
    };
    if (days >= 3) return {
      text: `Starts in ${days} days`,
      badgeStyle: 'bg-orange-50 text-orange-700 border border-orange-200'
    };
    if (days === 1) return {
      text: 'Starts tomorrow',
      badgeStyle: 'bg-red-50 text-red-700 border border-red-200 animate-pulse'
    };
    return {
      text: 'Starts today',
      badgeStyle: 'bg-red-50 text-red-700 border border-red-200 animate-pulse'
    };
  };

  // Check if lesson is starting soon
  const isStartingSoon = (date: Date | null): boolean => {
    if (!date) return false;
    const diff = date.getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 && days <= 7;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden z-10 border"
          style={{ borderColor: complementaryColors.lightBorder }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div 
            className="p-6 text-white"
            style={{ backgroundColor: trackColor }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Schedule for {trackName}
                </h2>
                <p className="text-white/90 mt-1">
                  {filteredSchedule.length} classes • {schedule.filter(l => {
                    const date = parseDate(l["Date and Time"]);
                    return date && date < new Date();
                  }).length} completed
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors bg-black/20 rounded-full p-1"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-4">
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full" 
                  style={{ 
                    width: `${(schedule.filter(l => {
                      const date = parseDate(l["Date and Time"]);
                      return date && date < new Date();
                    }).length / schedule.length) * 100}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-white/80 mt-1">
                <span>Started</span>
                <span>Complete your journey</span>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex mt-4 space-x-2">
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-gray-900' : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setFilter('all')}
              >
                All Classes
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === 'upcoming' ? 'bg-white text-gray-900' : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === 'completed' ? 'bg-white text-gray-900' : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
          </div>
          
          {/* Body */}
          <div className="overflow-y-auto max-h-[60vh]">
            {filteredSchedule.length > 0 ? (
              <div className="divide-y" style={{ borderColor: complementaryColors.lightBorder }}>
                {filteredSchedule.map((lesson, index) => {
                  const isCompleted = lesson.parsedDate && lesson.parsedDate < new Date();
                  const isUpcoming = lesson.parsedDate && lesson.parsedDate > new Date();
                  const startsSoon = isUpcoming && isStartingSoon(lesson.parsedDate);
                  const daysInfo = daysUntil(lesson.parsedDate);
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-4 transition-colors cursor-pointer group ${isCompleted ? 'bg-green-50/30' : 'bg-white'}`}
                      onClick={() => setExpandedLesson(expandedLesson === index ? null : index)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-full">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs px-2 py-1 rounded-full ${isCompleted ? 'bg-green-100 text-green-800' : isUpcoming ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                              {isCompleted ? 'Completed' : isUpcoming ? 'Upcoming' : 'Scheduled'}
                            </span>
                            {!isUpcoming && lesson.parsedDate && (
                              <span className="text-xs text-gray-500">
                                {formatDate(lesson.parsedDate)}
                              </span>
                            )}
                            {isUpcoming && lesson.parsedDate && (
                              <span className={`text-xs px-2.5 py-1 rounded-full ${daysInfo.badgeStyle}`}>
                                {startsSoon ? 'Starting soon!' : daysInfo.text}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-lg text-gray-800 mt-1 group-hover:text-blue-600 transition-colors">
                            {lesson["Lesson Title"]}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {lesson.Subject}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {lesson["PDF Link"] && (
                            <a 
                              href={lesson["PDF Link"]} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              title="Download materials"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-5 w-5 transition-transform ${expandedLesson === index ? 'rotate-180' : ''}`} 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {expandedLesson === index && (
                        <motion.div 
                          className="mt-3 pl-3 border-l-2 bg-white p-3 rounded-lg"
                          style={{ borderLeftColor: trackColor }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                            Learning Objectives
                          </h4>
                          <div className="text-gray-600">
                            {formatLaTeX(lesson.Objectives)}
                          </div>
                          
                          <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              Session Details
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">Date & Time</p>
                                <p className="text-gray-600 font-medium">
                                  {lesson["Date and Time"] || 'To be scheduled'}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Subject</p>
                                <p className="text-gray-600 font-medium">{lesson.Subject}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Level</p>
                                <p className="text-gray-600 font-medium">{lesson["Grade Level"]}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Session</p>
                                <p className="text-gray-600 font-medium">{lesson.Session}</p>
                              </div>
                            </div>
                            
                            {/* Urgency Principle */}
                            {isUpcoming && lesson.parsedDate && (
                              <div className={`mt-3 p-3 rounded-lg ${daysInfo.badgeStyle}`}>
                                <p className="font-medium flex items-center gap-2">
                                  <span className="text-lg">⏳</span>
                                  {daysInfo.text} • Don&apos;t miss out!
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-gray-500 mb-4">
                  {filter === 'upcoming' 
                    ? "No upcoming classes scheduled yet - check back soon!" 
                    : "No classes match your current filter"}
                </div>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setFilter('all')}
                >
                  Show All Classes
                </button>
              </div>
            )}
          </div>
          
          {/* Footer with strong CTA */}
          <div className="border-t p-4 bg-gray-50 sticky bottom-0">
            <div className="flex justify-between items-center">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                Close
              </button>
              <button 
                className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg font-medium flex items-center gap-2"
                style={{ 
                  backgroundColor: trackColor,
                  boxShadow: `0 4px 14px 0 ${trackColor}80`
                }}
                onClick={() => {
                  onClose();
                  document.getElementById('pricing-section')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reserve Your Spot Now - Limited Seats!
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleModal;