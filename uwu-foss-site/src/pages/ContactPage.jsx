// src/pages/ContactPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="py-20 md:py-32 bg-gray-800 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Get In Touch
        </motion.h1>
        <motion.p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Have a question, a suggestion, or want to collaborate? We'd love to hear from you.
        </motion.p>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows="4" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-teal-500 focus:border-teal-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-700 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-teal-400">Email Us</h3>
                <p className="text-gray-300">foss.community@uwu.ac.lk</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-400">Our Location</h3>
                <p className="text-gray-300">Uva Wellassa University, Passara Road, Badulla, 90000, Sri Lanka</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-400">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-teal-400">GitHub</a>
                  <a href="#" className="text-gray-400 hover:text-teal-400">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-teal-400">Facebook</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;