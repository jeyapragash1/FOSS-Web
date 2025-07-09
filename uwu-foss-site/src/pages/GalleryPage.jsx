// src/pages/GalleryPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1556761175-b413da4b248b?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1587825140708-df876c12b4ce?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=60",
];

const GalleryPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 md:py-32 bg-gray-800 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Community Moments
        </motion.h1>
        <motion.p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          A glimpse into our workshops, events, and collaborations.
        </motion.p>
      </header>

      <main className="container mx-auto px-6 py-24">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
              />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default GalleryPage;