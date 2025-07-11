// src/components/Footer.jsx

import React from 'react';
// CORRECTED IMPORT: We are using Link from 'react-scroll'
import { Link } from 'react-scroll'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 border-t-2 border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg text-white mb-4">UWU FOSS Community</h3>
            <p className="text-sm">
              A student-run community at Uva Wellassa University, dedicated to promoting Free and Open Source Software.
            </p>
          </div>
          
          {/* Column 2: Navigate */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {/* UPDATED to use react-scroll Link */}
              <li><Link to="about-section" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 transition cursor-pointer">About Us</Link></li>
              <li><Link to="events-section" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 transition cursor-pointer">Events</Link></li>
              <li><Link to="blog-section" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 transition cursor-pointer">Blog</Link></li>
              <li><Link to="gallery-section" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 transition cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Engage */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Engage</h3>
            <ul className="space-y-2 text-sm">
              {/* UPDATED to use react-scroll Link */}
              <li><Link to="join-us-section" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 transition cursor-pointer">Become a Member</Link></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Contribute on GitHub</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><p>foss.community@uwu.ac.lk</p></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          <p>© {currentYear} FOSS Community - Uva Wellassa University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;