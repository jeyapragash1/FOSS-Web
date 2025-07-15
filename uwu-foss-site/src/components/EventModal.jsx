// src/components/EventModal.jsx

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const modalBackdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContent = {
  hidden: { y: "-50px", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
};

const EventModal = ({ event, onClose }) => {
  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 border border-gray-700 shadow-2xl"
          variants={modalContent}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition"><X size={28} /></button>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h2>
          <p className="text-teal-400 font-semibold mb-6">{event.date}</p>

          <p className="text-gray-300 leading-relaxed mb-8">{event.details}</p>

          <h3 className="text-2xl font-bold text-white mb-6">Event Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.gallery.map((imgSrc, i) => (
              <motion.div key={i} className="rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                <img src={imgSrc} alt={`${event.title} gallery image ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;