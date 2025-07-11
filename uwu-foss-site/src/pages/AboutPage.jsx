// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Sathya Nadella', role: 'President', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Sundar Pichai', role: 'Vice President', img: 'https://i.pravatar.cc/150?img=6' },
  { name: 'Tim Cook', role: 'Secretary', img: 'https://i.pravatar.cc/150?img=7' },
  { name: 'Elon Musk', role: 'Treasurer', img: 'https://i.pravatar.cc/150?img=8' },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="py-20 bg-gray-800 text-center"><h1 className="text-4xl font-bold">About Our Community</h1></header>
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">To foster a vibrant culture of open-source development at Uva Wellassa University. We provide a platform for students to learn, collaborate on projects, and connect with the global FOSS movement, preparing them for successful careers in technology.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-teal-400">What is FOSS?</h2>
            <p className="text-gray-300 leading-relaxed">Free and Open Source Software (FOSS) is software that gives users the freedom to run, copy, distribute, study, change, and improve it. This philosophy powers much of the modern web and offers incredible opportunities for learning and innovation.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Executive Committee 2024</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name}><img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-700" /><h3 className="font-bold">{member.name}</h3><p className="text-teal-400">{member.role}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;