// /src/components/sections/TestimonialsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaMedal, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'videos' | 'written'>('videos');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videoTestimonials = [
    {
      id: 'mingdao',
      name: 'Mingdao Zou Zhong',
      country: 'Sweden',
      achievement: 'International Mathematical Olympiad Honourable Mention',
      quote: 'The program helped me prepare intensely in just two weeks after failing the Team Selection Test. The focused training made all the difference.',
      videoId: 'X87b58ianOg',
      thumbnail: `https://img.youtube.com/vi/X87b58ianOg/hqdefault.jpg`,
    },
    {
      id: 'besnik',
      name: 'Besnik Haziri',
      country: 'Kosovo',
      achievement: 'IMO 2025 Team Member',
      quote: 'Shef Scholars provided the structured training I needed to make the national team. The personalized feedback was invaluable.',
      videoId: 'JAE8-zNl1gk',
      thumbnail: `https://img.youtube.com/vi/JAE8-zNl1gk/hqdefault.jpg`,
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: 'Ismayil Ismayilzade',
      country: 'Azerbaijan',
      achievement: 'Selected for IMO Summer Camp',
      quote: 'I learned a lot of tricks and tips in combinatorics. Taking lessons from an IMO champion is just different. We learned from each other\'s mistakes in a group of IMO-level students.',
    },
    {
      id: 2,
      name: 'Arleth Karolina',
      country: 'El Salvador',
      achievement: 'Iberoamerican Math Olympiad competitor',
      quote: 'Shef Scholars gave me the chance to connect with people on the same path. Thanks to the program, I qualified for IMO and obtained an Honorable Mention on APMO 2024.',
    },
    {
      id: 3,
      name: 'Luka Sebbag',
      country: 'Belgium',
      achievement: 'IMO Honorable Mention',
      quote: 'Shef is a fantastic teacher who gives just the right amount of help. What I improved most was endurance - wanting to solve problems rather than solving them quickly.',
    }
  ];

  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === writtenTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? writtenTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-6 py-2 mb-4">
            <FaMedal className="mr-2" />
            <span className="font-bold">Student Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-indigo-600">Students</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our scholars about their transformative experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'videos' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-inner' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('videos')}
              aria-pressed={activeTab === 'videos'}
            >
              Video Testimonials
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'written' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-inner' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('written')}
              aria-pressed={activeTab === 'written'}
            >
              Written Reviews
            </button>
          </div>
        </div>

        {/* Fixed Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div 
              className="relative w-full max-w-4xl mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h2 id="video-modal-title" className="sr-only">Student Testimonial Video</h2>
              <button 
                className="absolute -top-10 right-0 text-white text-2xl hover:text-indigo-300 transition-colors z-20"
                onClick={closeVideo}
                aria-label="Close video"
              >
                <FaTimes />
              </button>
              
              {/* Fixed aspect ratio container */}
              <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Video Testimonials */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl"
              >
                {/* Video Thumbnail with Play Button */}
                <div 
                  className="relative h-64 cursor-pointer group"
                  onClick={() => openVideo(testimonial.videoId)}
                  role="img"
                  aria-label={`${testimonial.name} testimonial thumbnail`}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial thumbnail`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaPlay className="text-indigo-600 text-xl ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="text-white font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-blue-100 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaQuoteLeft className="text-indigo-500 text-2xl mr-3" />
                    <div>
                      <p className="text-gray-900 font-bold">{testimonial.achievement}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic pl-2 border-l-2 border-indigo-500">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  
                  <div className="mt-6">
                    <button 
                      onClick={() => openVideo(testimonial.videoId)}
                      className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                    >
                      <FaPlay className="mr-2" />
                      Watch full testimonial
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Written Testimonials - Updated without stars */}
        {activeTab === 'written' && (
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex flex-col items-center text-center">
                {/* Centered quote icon with elegant styling */}
                <div className="mb-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaQuoteLeft className="text-indigo-500 text-3xl" />
                </div>
                
                <blockquote className="text-xl text-gray-700 italic max-w-2xl mb-8 px-4 relative">
                  <div className="absolute top-0 left-0 text-6xl text-indigo-100 -mt-4 -ml-2">&quot;</div>
                  <p className="relative z-10">&quot;{writtenTestimonials[currentIndex].quote}&quot;</p>
                  <footer className="sr-only">- {writtenTestimonials[currentIndex].name}</footer>
                </blockquote>
                
                <div className="mb-4 px-4">
                  <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">{writtenTestimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{writtenTestimonials[currentIndex].country}</p>
                  <p className="text-blue-600 font-semibold mt-2">{writtenTestimonials[currentIndex].achievement}</p>
                </div>
                
                <div className="flex mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 mr-4 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft className="text-gray-700" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight className="text-gray-700" />
                  </button>
                </div>
                
                <div className="flex mt-6">
                  {writtenTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === currentIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;