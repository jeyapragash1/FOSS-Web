// src/components/TestimonialSlider.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // useEffect hook for automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(nextTestimonial, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [testimonials.length]); // Dependency array ensures it only runs if the testimonials list changes

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-white" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          What Our Members Say
        </motion.h2>

        <div className="relative h-80">
          {/* AnimatePresence handles the exit and enter animations */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex} // The key tells React to re-render when the index changes
              className="px-12 flex flex-col items-center justify-center h-full" 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }} 
              transition={{ duration: 0.5 }}
            >
              {/* Member Image */}
              <img 
                src={testimonials[currentIndex].img}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-teal-500/50 object-cover shadow-lg"
              />

              {/* Quote */}
              <p className="text-xl italic text-gray-300 mb-6 max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Name and Role */}
              <div>
                <p className="font-bold text-white text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls (Optional Manual Override) */}
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-teal-500 transition-colors focus:outline-none" aria-label="Previous testimonial"><ChevronLeft/></button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-teal-500 transition-colors focus:outline-none" aria-label="Next testimonial"><ChevronRight/></button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-teal-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;