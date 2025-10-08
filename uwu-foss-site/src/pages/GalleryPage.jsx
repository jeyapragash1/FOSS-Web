// src/pages/GalleryPage.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/homePageData'; // We will create this in the next step

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'DevCamp', 'GitHub Workshop'];

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-gray-900/95 backdrop-blur-sm">
      <header className="py-16 md:py-28 text-center px-4">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Gallery
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A glimpse into our workshops, events, and community collaborations.
        </motion.p>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition ${
                activeFilter === filter
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover aspect-square sm:aspect-[4/3] md:aspect-square" 
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-center px-2">{image.event}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default GalleryPage;
