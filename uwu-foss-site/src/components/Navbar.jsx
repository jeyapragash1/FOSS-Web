// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
// Both Link types are needed now
import { Link as ScrollLink } from 'react-scroll'; 
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

import fossLogo from '../assets/images/Icon/l2.jpg'; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // CORRECTED: We add a flag to tell the code which link type to use
  const navigation = [
    { name: "Home", to: "hero-section", isPageLink: false },
    { name: "InnovateOSS '24", to: "/ideathon", isPageLink: true }, // This is a page link
    { name: "About", to: "about-section", isPageLink: false },
    { name: "Team", to: "team-section", isPageLink: false },
    { name: "Events", to: "events-section", isPageLink: false },
    { name: "Gallery", to: "gallery-section", isPageLink: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer";
  const activeLinkClass = "bg-teal-500 text-white";

  return (
    <nav className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-gray-800/80 backdrop-blur-md shadow-lg" : "bg-transparent")}>
      <div className="container mx-auto px-6">
        <div className="relative flex h-20 items-center justify-between">
          
          <ScrollLink to="hero-section" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center cursor-pointer group">
            <motion.div whileHover={{ y: -5, scale: 1.1, rotateX: 10, rotateY: -5 }} transition={{ type: "spring", stiffness: 300 }} style={{ transformStyle: "preserve-3d" }}>
              <img className="h-12 w-12 rounded-full object-cover border-2 border-gray-600 group-hover:border-teal-400 transition-all duration-300 shadow-lg" src={fossLogo} alt="FOSS UWU Logo" />
            </motion.div>
            <span className="ml-3 text-xl font-bold text-white hidden sm:block">FOSS UWU</span>
          </ScrollLink>
          
          {/* CORRECTED: Desktop Navigation with conditional logic */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-1">
            {navigation.map((item) => (
              item.isPageLink ? (
                // If it's a page link, use NavLink from react-router-dom
                <NavLink key={item.name} to={item.to} className={({ isActive }) => cn(linkClass, isActive && activeLinkClass)}>
                  {item.name}
                </NavLink>
              ) : (
                // Otherwise, use ScrollLink from react-scroll
                <ScrollLink key={item.name} to={item.to} spy={true} smooth={true} offset={-70} duration={500} activeClass={activeLinkClass} className={linkClass}>
                  {item.name}
                </ScrollLink>
              )
            ))}
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <ScrollLink to="join-us-section" spy={true} smooth={true} offset={-70} duration={500} className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors cursor-pointer">
              Join Us
            </ScrollLink>
          </div>

          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-400 hover:text-white focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* CORRECTED: Mobile Menu with conditional logic */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute w-full bg-gray-800 shadow-lg">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              item.isPageLink ? (
                <NavLink key={item.name} to={item.to} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => cn("block rounded-md px-3 py-2 text-base font-medium", isActive ? "bg-teal-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")}>
                  {item.name}
                </NavLink>
              ) : (
                <ScrollLink key={item.name} to={item.to} spy={true} smooth={true} offset={-70} duration={500} activeClass={activeLinkClass} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </ScrollLink>
              )
            ))}
            <ScrollLink to="join-us-section" spy={true} smooth={true} offset={-70} duration={500} className="block w-full text-left rounded-md mt-4 px-3 py-2 text-base font-medium bg-teal-500 text-white hover:bg-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
              Join Us
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}