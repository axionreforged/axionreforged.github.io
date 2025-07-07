"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import ScheduleModal from './ScheduleModal';
import { SCHEDULES } from '@/utils/constants';
import { LessonSchedule } from './ScheduleModal';

interface TrackCardProps {
  track: {
    id: string;
    name: string;
    time: string;
    spots: number;
    level: string;
  };
}

const levelColors: Record<string, string> = {
  beginner: 'from-green-500 to-emerald-600',
  apprentice: 'from-blue-500 to-cyan-600',
  machine: 'from-purple-500 to-indigo-600',
  shef: 'from-amber-500 to-orange-500',
};

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [trackSchedule, setTrackSchedule] = useState<LessonSchedule[]>([]); // Use interface here

  const handleViewSchedule = () => {
    const filteredSchedule = SCHEDULES.filter(
      (lesson) => lesson['Grade Level'] === track.name
    );
    
    setTrackSchedule(filteredSchedule);
    setIsScheduleModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
        <div className={`bg-gradient-to-r ${levelColors[track.level]} p-4`}>
          <div className="flex justify-center">
            <div className="relative w-20 h-20">
              <Image
                src={`/images/tracks/${track.level}.png`}
                alt={track.name}
                fill
                className="object-contain bg-white rounded-full p-2"
              />
            </div>
          </div>
          <h3 className="text-white text-center font-bold text-xl mt-2">{track.name}</h3>
        </div>
        
        <div className="p-6">
          <div className="text-gray-700 mb-4">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">Time:</span>
              <span>{track.time}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold mr-2">Spots:</span>
              <span className={`font-bold ${track.spots < 5 ? 'text-red-500 animate-pulse' : 'text-green-600'}`}>
                {track.spots} left
              </span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3 mt-4">
            <Button 
              variant="primary" 
              size="sm"
              className="w-full hover:scale-105 transition-transform"
              onClick={handleViewSchedule}
            >
              View Schedule
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              className="w-full hover:scale-105 transition-transform"
              onClick={() => {
                document.getElementById('pricing-section')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Reserve Spot
            </Button>
          </div>
        </div>
      </div>
      
      {isScheduleModalOpen && (
        <ScheduleModal 
          schedule={trackSchedule}
          trackName={track.name}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      )}
    </>
  );
};

export default TrackCard;