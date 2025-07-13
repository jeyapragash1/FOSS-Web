// src/components/TestimonialSlider.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This logic remains the same
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

  useEffect(() => {
    const slideInterval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  return (
    // NEW: Added the textured background and changed padding
    <section className="py-24 bg-gray-900 subtle-dots-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-white" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          What Our Members Say
        </motion.h2>

        {/* NEW: Wrapper for the glass card effect */}
        <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8 md:p-12">
          <div className="relative h-80">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="px-4 md:px-12 flex flex-col items-center justify-center h-full" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.4 }}
              >
                {/* NEW: Large decorative quote icon */}
                <Quote className="w-16 h-16 text-teal-500/30 absolute top-0 left-0 -translate-x-4 -translate-y-4" strokeWidth={1}/>
                
                <img 
                  src={testimonials[currentIndex].img}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-gray-700 object-cover"
                />
                
                <p className="text-xl italic text-gray-300 mb-6 max-w-2xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <p className="font-bold text-white text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NEW: Styled Slider Controls */}
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-teal-500 transition-colors focus:outline-none" aria-label="Previous testimonial"><ChevronLeft/></button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-teal-500 transition-colors focus:outline-none" aria-label="Next testimonial"><ChevronRight/></button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-teal-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;