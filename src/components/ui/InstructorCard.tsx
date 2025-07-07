"use client";

import React from 'react';
import Image from 'next/image';

interface Instructor {
  id: string;
  name: string;
  credentials: string;
  bio: string;
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="h-full bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6 h-full flex flex-col"> {/* Added flex container */}
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
            <Image 
              src={`/images/instructors/${instructor.id}.jpg`} 
              alt={instructor.name}
              fill
              className="object-cover bg-gray-200"
            />
          </div>
        </div>
        
        <div className="text-center flex flex-col flex-grow"> {/* Added flex grow */}
          <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
          <p className="text-sm text-blue-600 font-semibold mt-1">{instructor.credentials}</p>
          <p className="text-gray-700 mt-3 flex-grow">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;