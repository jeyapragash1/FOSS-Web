// src/pages/HomePage.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import EventModal from'../components/EventModal';
import GalleryPage from'./GalleryPage';
// CORRECTED & CONSOLIDATED IMPORT for all icons used on this page
import { 
  ChevronLeft, ChevronRight, Quote, Calendar, Clock, MapPin, 
  Target, Eye, Award, Code, Users, BookOpen, ShieldCheck, 
  Sparkles, Key, Camera 
} from 'lucide-react';

// --- DATA IMPORTS (from your data file) ---
import {
  executiveCommittee,
  juniorTechnicalTeam,
  juniorMarketingTeam,
  juniorEventCoordinatorTeam,
  juniorSecretaryTeam,
  juniorDesignTeam,
  wifCoreTeam,
  testimonials,
  updates,
  events,
  blogPosts,
  focusAreas,
  galleryImages
} from '../data/homePageData';

import heroVideo from '../assets/videos/v3.mp4';

// Animation variants for framer-motion grids and items
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Helper component to display a grid of team members
const TeamGrid = ({ teamData }) => (
  <motion.div
    key={JSON.stringify(teamData)}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="flex flex-wrap justify-center gap-x-8 gap-y-12"
  >
    {teamData.map((member, i) => (
      <div key={i} className="text-center flex flex-col items-center group">
        <motion.div
          whileHover={{ scale: 1.1, y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative w-28 h-28 md:w-32 md:h-32 mb-4"
        >
          <div className="absolute inset-0 bg-teal-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <img
            src={member.img}
            alt={member.name}
            className="relative w-full h-full rounded-full object-cover border-4 border-gray-700 group-hover:border-teal-400 transition-colors duration-300"
          />
        </motion.div>
        <h4 className="font-semibold text-white">{member.name}</h4>
      </div>
    ))}
  </motion.div>
);

const HomePage = () => {
 const [activeJuniorTab, setActiveJuniorTab] = useState('Technical');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);
  return (
    <div className="digital-lines-background text-white">
   {/* === 1. HERO SECTION (Corrected with Call to Action) === */}
<section id="hero-section" className="relative flex items-center justify-center h-screen text-center overflow-hidden">
  
  {/* The Video Background Layer */}
  <video 
    src={heroVideo} 
    autoPlay 
    loop 
    muted 
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    Your browser does not support the video tag.
  </video>

  {/* The Darkening Overlay for Text Readability */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  {/* The Content Layer */}
  <motion.div 
    className="relative z-20" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <motion.p 
      className="text-lg md:text-xl text-teal-300 tracking-widest uppercase" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 0.5 }}
    >
      Welcome To
    </motion.p>
    
    <TypeAnimation 
      sequence={[1000, 'FOSS Uva Wellassa University']} 
      wrapper="h1" 
      speed={50} 
      cursor={true} 
      className="text-5xl md:text-7xl font-extrabold text-white my-4" 
    />
    
    <motion.p 
      className="text-lg md:text-xl text-gray-200" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 3.5 }}
    >
      The Free And Open Source Software Community
    </motion.p>

    {/* --- THIS IS THE MISSING CALL TO ACTION BUTTON --- */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 150, delay: 4 }} // Animates in last
    >
      <a 
        href="https://forms.gle/your_google_form_link" // Remember to put your real form link here
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-8 inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition transform hover:scale-105 shadow-2xl"
      >
        Start Your Journey
      </a>
    </motion.div>
    
  </motion.div>
  
</section>

      {/* ABOUT SECTION */}
      <section id="about-section" className="py-24 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold text-teal-400 tracking-widest uppercase">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-white">
              A Community Driven by Open Collaboration
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
              We are a dynamic community of developers, designers, and tech enthusiasts committed to professional development, technical excellence, and making a positive impact through open source.
            </p>
          </motion.div>
          {/* Three-Card Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1: Our Mission */}
            <motion.div 
              variants={itemVariant}
              whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center shadow-lg cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-gray-800 p-4 rounded-full mb-6 shadow-inner">
                <Target className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                A Free and Open Source Software (FOSS) community's mission is to promote, develop, and diversify the use of FOSS.
              </p>
            </motion.div>
            {/* Card 2: Our Vision */}
            <motion.div 
              variants={itemVariant}
              whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500/50 text-center flex flex-col items-center shadow-2xl cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-sky-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 p-8 rounded-xl h-full flex flex-col items-center">
                <div className="bg-gray-800 p-4 rounded-full mb-6 shadow-inner">
                  <Eye className="w-8 h-8 text-teal-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  A Free and Open Source Software (FOSS) community's vision is typically centered around software freedom, innovation, and collaboration, while its mission focuses on promoting, educating, and enabling the use and development of FOSS.
                </p>
              </div>
            </motion.div>
            {/* Card 3: Our Values */}
            <motion.div 
              variants={itemVariant} 
              whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center shadow-lg cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-gray-800 p-4 rounded-full mb-6 shadow-inner">
                <Award className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Our Values</h3>
              <p className="text-gray-400 leading-relaxed">
                We build open, inclusive technology together. Our community welcomes everyone, values teamwork, and encourages learning and growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS SECTION */}
      <section id="focus-areas-section" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-white" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
          >
            Our Focus Areas
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-16" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
          >
            We are dedicated to several core principles that guide our activities and contributions to the open-source world.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {focusAreas.map((area, i) => (
              <motion.div 
                key={i} 
                variants={itemVariant}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg text-left border border-gray-700/50"
              >
                <div className="text-teal-400 mb-4">
                  {area.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{area.name}</h3>
                <p className="text-gray-400">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team-section" className="py-24 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          {/* Executive Committee */}
          <div className="mb-24">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Executive Committee
            </motion.h2>
            <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1, delay: 0.2 }} viewport={{ once: true }}>
              The passionate individuals who drive our community forward with dedication and innovation.
            </motion.p>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 justify-center" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {executiveCommittee.map((member, i) => (
                <motion.div key={i} variants={itemVariant} className="text-center flex flex-col items-center group">
                  <motion.div whileHover={{ scale: 1.1, y: -10 }} transition={{ type: 'spring', stiffness: 300 }} className="relative w-32 h-32 md:w-36 md:h-36 mb-4">
                    <div className="absolute inset-0 bg-teal-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img src={member.img} alt={member.name} className="relative w-full h-full rounded-full object-cover border-4 border-gray-700 group-hover:border-teal-400 transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-bold text-lg md:text-xl text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Junior Committee */}
          <div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Junior Committee
            </motion.h2>
            <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1, delay: 0.2 }} viewport={{ once: true }}>
              The rising stars and dedicated members powering our community's core activities.
            </motion.p>
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              <button onClick={() => setActiveJuniorTab('Technical')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'Technical' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Technical</button>
              <button onClick={() => setActiveJuniorTab('Design')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'Design' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Design</button>
              <button onClick={() => setActiveJuniorTab('Marketing')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'Marketing' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Marketing</button>
              <button onClick={() => setActiveJuniorTab('Events')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'Events' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Event Coordinator</button>
              <button onClick={() => setActiveJuniorTab('Secretary')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'Secretary' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Secretary</button>
              <button onClick={() => setActiveJuniorTab('WIF')} className={`px-4 py-2 rounded-md font-semibold transition ${activeJuniorTab === 'WIF' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>WIF</button>
            </div>
            {/* Team Display Area */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeJuniorTab === 'Technical' && <TeamGrid key="technical" teamData={juniorTechnicalTeam} />}
                {activeJuniorTab === 'Design' && <TeamGrid key="design" teamData={juniorDesignTeam} />}
                {activeJuniorTab === 'Marketing' && <TeamGrid key="marketing" teamData={juniorMarketingTeam} />}
                {activeJuniorTab === 'Events' && <TeamGrid key="events" teamData={juniorEventCoordinatorTeam} />}
                {activeJuniorTab === 'Secretary' && <TeamGrid key="secretary" teamData={juniorSecretaryTeam} />}
                {activeJuniorTab === 'WIF' && <TeamGrid key="wif" teamData={wifCoreTeam} />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials-section">
        <TestimonialSlider testimonials={testimonials} />
      </section>


{/* === RECENT UPDATES SECTION (Interactive & Centered) === */}
<section id='events-section' className="py-24 bg-gray-900/95 backdrop-blur-sm">
  <div className="container mx-auto px-6">
    <motion.h2 
      className="text-4xl font-bold text-center mb-16 text-white" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
    >
      Recent Updates
    </motion.h2>

    {/* Flex container to center the items */}
    <motion.div 
      className="flex flex-wrap justify-center gap-8"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {updates.map((update, i) => (
        <motion.div 
          key={i} 
          variants={itemVariant}
          whileHover={{ y: -8 }}
          className="bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden group border border-gray-700/50 w-full md:w-1/3 lg:w-1/4" // Adjust width as needed
        >
          <div className="overflow-hidden">
            <img src={update.coverImage} alt={update.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div>
              <p className="text-sm text-gray-400 mb-1">{update.date}</p>
              <h3 className="font-bold text-xl text-white mb-2">{update.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{update.desc}</p>
            </div>
            <div className="mt-auto pt-6">
              <button
                onClick={() => openModal(update)}
                className="bg-teal-500/10 text-teal-300 border border-teal-500/30 font-bold py-2 px-4 rounded-md hover:bg-teal-500 hover:text-white transition w-full block text-center"
              >
                {update.buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<AnimatePresence>
  {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
</AnimatePresence>

      {/* UPCOMING EVENTS SECTION */}
      <section id="upcoming-events-section" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event, i) => (
              <motion.div 
                key={i} 
                variants={itemVariant} 
                className="bg-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden group border border-gray-700"
              >
                <div className="overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-gray-700 p-3 text-gray-300 text-xs flex flex-wrap gap-x-4 gap-y-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 p-3 text-gray-300 text-xs flex items-center gap-1.5 border-t border-gray-600/50">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{event.desc}</p>
                  <a 
                    href="#" 
                    className="mt-auto bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition w-full block text-center"
                  >
                    Event Details
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog-section" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>From Our Knowledge Base</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <a href="#">
                  <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-white">{post.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* === 9. GALLERY SECTION (Corrected Link) === */}
<section id="gallery-section" className="py-24 bg-gray-900/95 backdrop-blur-sm">
  <div className="container mx-auto px-6 text-center">
    <motion.h2 
      className="text-4xl font-bold mb-16 text-white" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
    >
      Community in Action
    </motion.h2>
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[600px] md:grid-rows-2"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {galleryImages.map((image, i) => (
        <motion.div 
          key={i} 
          variants={itemVariant} 
          className={`relative rounded-xl overflow-hidden shadow-lg group ${image.layout || ''}`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Camera className="w-8 h-8 text-white mb-2" />
            <p className="text-white font-bold text-lg">{image.event}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <motion.div 
      className="text-center mt-16" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
    >
      {/* THIS IS THE CORRECTED LINK, USING THE ROUTER LINK */}
     <RouterLink to="/gallery" className="text-teal-400 font-semibold text-lg hover:text-white transition">
      Explore the Full Gallery →
  </RouterLink>
    </motion.div>
  </div>
</section>

      {/* JOIN US CTA */}
      <section
        id="join-us-section"
        className="relative py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Become a member and unlock opportunities to grow, learn, and connect with professionals across all our specialized chapters.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://forms.gle/your_google_form_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition"
            >
              Join Now - It's Free
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;