// /src/components/sections/FeaturesSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrophyIcon,
  UserCircleIcon,
  CalculatorIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Proven Track Record',
    description: 'In just three test iterations we helped 6 students get to the IMO and win 2 Honorable Mentions, a Bronze, and a Silver Medal.',
    icon: (
      <div className="relative">
        <TrophyIcon className="h-12 w-12 text-amber-400" />
        <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
          6
        </div>
      </div>
    ),
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from the Shef himself and other former math competitors. The Shef teaches at least 14 classes in every track.',
    icon: (
      <div className="relative">
        <UserCircleIcon className="h-12 w-12 text-blue-500" />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
          <CalculatorIcon className="h-4 w-4 text-blue-600" />
        </div>
      </div>
    ),
  },
  {
    title: 'Intensive Program',
    description: '27 weeks of focused math training with problem sets designed to challenge you and build competition skills.',
    icon: (
      <div className="relative">
        <BookOpenIcon className="h-10 w-10 text-purple-500" />
        <LightBulbIcon className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 bg-purple-700 rounded-full p-1" />
      </div>
    ),
  },
  {
    title: 'Thriving Community',
    description: 'Connect with like-minded peers, collaborate on problems, and build lifelong friendships with fellow mathletes.',
    icon: (
      <div className="flex space-x-[-8px]">
        <UserGroupIcon className="h-10 w-10 text-green-500 z-10" />
        <UserGroupIcon className="h-10 w-10 text-blue-500 transform scale-90" />
        <UserGroupIcon className="h-10 w-10 text-amber-500 transform scale-80" />
      </div>
    ),
  },
  {
    title: 'Massive Value for $',
    description: 'Premium training at less than $10 per hour - our inaugural program offers unprecedented value.',
    icon: (
      <div className="relative">
        <CurrencyDollarIcon className="h-12 w-12 text-green-500" />
        <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
          30%
        </div>
      </div>
    ),
  },
  {
    title: 'Beyond Competitive Math',
    description: 'Learn how math skills translate to university studies, careers, and real-world problem solving.',
    icon: (
      <div className="relative">
        <RocketLaunchIcon className="h-10 w-10 text-indigo-500" />
        <AcademicCapIcon className="absolute top-2 right-0 h-6 w-6 text-white bg-indigo-700 rounded-full p-1" />
      </div>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Shef Scholars</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make our program the premier choice for competitive math training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;