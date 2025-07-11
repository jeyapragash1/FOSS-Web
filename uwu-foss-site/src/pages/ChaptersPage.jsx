// src/pages/ChaptersPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  { name: 'Web & Cloud Chapter', description: 'Exploring modern web frameworks, cloud deployment, and DevOps practices.', icon: '☁️' },
  { name: 'AI & Machine Learning Chapter', description: 'Diving into data science, neural networks, and the practical applications of AI.', icon: '🤖' },
  { name: 'Cybersecurity Chapter', description: 'Focusing on ethical hacking, network security, and defensive strategies.', icon: '🛡️' },
  { name: 'Competitive Programming Chapter', description: 'Honing algorithmic and problem-solving skills for coding competitions.', icon: '🏆' },
];

const ChaptersPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 bg-gray-800 text-center">
        <h1 className="text-4xl font-bold">Our Technology Chapters</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">We organize our activities into Special Interest Groups (SIGs) or "Chapters" to focus on specific domains in technology.</p>
      </header>
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div key={chapter.name} className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{chapter.icon}</span>
                <h2 className="text-2xl font-bold text-teal-400">{chapter.name}</h2>
              </div>
              <p className="text-gray-300">{chapter.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChaptersPage;