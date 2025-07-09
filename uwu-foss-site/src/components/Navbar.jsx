import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
          <NavLink to="/" className="hover:text-blue-700 transition duration-200">
            UWU <span className="text-gray-800">FOSS</span>
          </NavLink>
        </div>

        {/* Primary Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
          <li><NavLink to="/events" className={navLinkClass}>Events</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          <li><NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
        </ul>

        {/* CTA Button */}
        <NavLink
          to="/join"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
        >
          Join Community
        </NavLink>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-600 focus:outline-none transition">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
