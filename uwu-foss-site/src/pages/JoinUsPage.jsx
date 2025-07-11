// src/pages/JoinUsPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const JoinUsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 bg-gray-800 text-center">
        <h1 className="text-4xl font-bold">Join Our Community</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Become a part of the FOSS movement at UWU. All students with a passion for technology are welcome.</p>
      </header>
      <section className="container mx-auto px-6 py-20 max-w-2xl">
        <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-center mb-6 text-teal-400">Membership Registration</h2>
          <form className="space-y-6">
            <div><label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label><input type="text" name="name" id="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:ring-teal-500 focus:border-teal-500" /></div>
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-300">University Email</label><input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:ring-teal-500 focus:border-teal-500" /></div>
            <div><label htmlFor="studentId" className="block text-sm font-medium text-gray-300">Student ID</label><input type="text" name="studentId" id="studentId" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:ring-teal-500 focus:border-teal-500" /></div>
            <div className="text-center">
              <button type="submit" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-md hover:bg-teal-600 transition">Submit Application</button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default JoinUsPage;