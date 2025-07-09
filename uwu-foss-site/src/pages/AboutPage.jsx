// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const teamMembers = [
  { name: 'Sathya Nadella', role: 'President', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Sundar Pichai', role: 'Vice President', img: 'https://i.pravatar.cc/150?img=6' },
  { name: 'Tim Cook', role: 'Secretary', img: 'https://i.pravatar.cc/150?img=7' },
  { name: 'Elon Musk', role: 'Treasurer', img: 'https://i.pravatar.cc/150?img=8' },
  { name: 'Mark Zuckerberg', role: 'Lead, Events', img: 'https://i.pravatar.cc/150?img=9' },
  { name: 'Jeff Bezos', role: 'Lead, Projects', img: 'https://i.pravatar.cc/150?img=10' },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Page Header */}
      <header className="py-20 md:py-32 bg-gray-800 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A community driven by passion, collaboration, and the open-source spirit.
        </motion.p>
      </header>

      {/* Our Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To foster a vibrant and inclusive environment at Uva Wellassa University for students to learn, explore, and contribute to Free and Open Source Software. We aim to bridge the gap between academic learning and real-world software development, empowering students with the skills and confidence to excel in the global tech industry.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1350&q=80" alt="Team collaborating" className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Meet the Executive Committee</h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariant} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 group-hover:border-teal-400 transition" />
                <h3 className="font-bold text-lg text-white">{member.name}</h3>
                <p className="text-teal-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;