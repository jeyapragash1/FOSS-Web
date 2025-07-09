// src/pages/EventsPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const upcomingEvents = [
  { title: "Cloud Native Day '24", date: 'October 26, 2024', description: 'A full day of talks and hands-on labs on Kubernetes, Docker, and cloud technologies.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60' },
  { title: 'Intro to Git & GitHub Workshop', date: 'November 15, 2024', description: 'Learn the essentials of version control. Perfect for beginners!', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=60' },
];

const pastEvents = [
  { title: "UWU CodeSprint '24", date: 'March 10, 2024', description: 'A 24-hour competitive programming marathon.', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=60' },
  { title: 'Linux Command Line Basics', date: 'February 05, 2024', description: 'An introductory session to the power of the Linux terminal.', img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=60' },
];

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const eventsToShow = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 md:py-32 bg-gray-800 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Our Events
        </motion.h1>
        <motion.p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          From workshops and talks to hackathons and competitions.
        </motion.p>
      </header>

      <main className="container mx-auto px-6 py-24">
        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-700">
          <button onClick={() => setActiveTab('upcoming')} className={`px-6 py-3 font-semibold ${activeTab === 'upcoming' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400'}`}>
            Upcoming
          </button>
          <button onClick={() => setActiveTab('past')} className={`px-6 py-3 font-semibold ${activeTab === 'past' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400'}`}>
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <motion.div 
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {eventsToShow.map((event, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-sm text-teal-400 mb-1">{event.date}</p>
                <h3 className="font-bold text-2xl mb-2 text-white">{event.title}</h3>
                <p className="text-gray-400 text-base mb-4">{event.description}</p>
                <a href="#" className="font-bold text-white hover:text-teal-300">View Details →</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default EventsPage;