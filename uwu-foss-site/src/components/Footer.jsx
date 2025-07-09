// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-gray-300">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
{/* About Section */}
<div>
<h3 className="font-extrabold text-xl text-white mb-3">UWU FOSS Community</h3>
 <p className="text-sm leading-relaxed text-gray-400">
 A passionate community of students at Uva Wellassa University dedicated to exploring, creating, and contributing to the world of Free and Open Source Software.
</p>
</div>

      {/* Quick Links */}
      <div>
        <h3 className="font-extrabold text-xl text-white mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/about" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
          <li><a href="/events" className="hover:text-blue-400 transition-colors duration-200">Events</a></li>
          <li><a href="/blog" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
          <li><a href="/join" className="hover:text-blue-400 transition-colors duration-200">Join Us</a></li>
        </ul>
      </div>

      {/* Contact & Socials */}
      <div>
        <h3 className="font-extrabold text-xl text-white mb-3">Get in Touch</h3>
        <p className="text-sm mb-4 text-gray-400">foss.community@uwu.ac.lk</p>
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-pink-400 transition duration-200" aria-label="GitHub">GitHub</a>
          <a href="#" className="hover:text-blue-500 transition duration-200" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition duration-200" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
      <p>© {currentYear} FOSS Community - Uva Wellassa University. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;