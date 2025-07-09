// src/pages/HomePage.jsx

import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants ---
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// --- Data for New Sections ---
const teamMembers = [
  { name: 'Sathya Nadella', role: 'President', img: 'https://i.pravatar.cc/150?img=5', github: '#' },
  { name: 'Sundar Pichai', role: 'Vice President', img: 'https://i.pravatar.cc/150?img=6', github: '#' },
  { name: 'Tim Cook', role: 'Secretary', img: 'https://i.pravatar.cc/150?img=7', github: '#' },
  { name: 'Elon Musk', role: 'Treasurer', img: 'https://i.pravatar.cc/150?img=8', github: '#' },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&w=800&q=60",
];

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">

      {/* 1. HERO SECTION (ENHANCED) */}
      <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
        <div className="absolute inset-0 z-0 animated-gradient" style={{ backgroundImage: 'linear-gradient(to right, #134e4a, #1e3a8a, #4c1d95)' }}></div>
        <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <motion.div className="relative z-20" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4" initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            FOSS Community UWU
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8" initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            Explore the Universe of Open Source. Innovate, Collaborate, and Build the Future, Together.
          </motion.p>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.6 }}>
            <a href="/join" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition transform hover:scale-105 shadow-2xl">
              Start Your Journey
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IMPACT IN NUMBERS SECTION */}
      <motion.section className="py-20 bg-gray-900" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariant} className="p-4"><h3 className="text-5xl font-bold text-teal-400">100+</h3><p className="text-gray-400 mt-2">Community Members</p></motion.div>
            <motion.div variants={itemVariant} className="p-4"><h3 className="text-5xl font-bold text-teal-400">25+</h3><p className="text-gray-400 mt-2">Events & Workshops</p></motion.div>
            <motion.div variants={itemVariant} className="p-4"><h3 className="text-5xl font-bold text-teal-400">15+</h3><p className="text-gray-400 mt-2">Open Source Projects</p></motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. WHAT WE DO SECTION */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Core Activities</motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={itemVariant} className="bg-gray-900 p-8 rounded-lg text-center shadow-lg hover:shadow-teal-400/20 transform hover:-translate-y-2 transition-all duration-300"><div className="flex justify-center mb-4"><svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div><h3 className="text-2xl font-bold mb-2 text-white">Hands-on Workshops</h3><p className="text-gray-400">Learn cutting-edge technologies like Git, Docker, and Cloud Native from industry experts and senior students.</p></motion.div>
            <motion.div variants={itemVariant} className="bg-gray-900 p-8 rounded-lg text-center shadow-lg hover:shadow-teal-400/20 transform hover:-translate-y-2 transition-all duration-300"><div className="flex justify-center mb-4"><svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 6.75l4.5 4.5-4.5 4.5"></path></svg></div><h3 className="text-2xl font-bold mb-2 text-white">Hackathons & Ideathons</h3><p className="text-gray-400">Compete in high-energy events to solve real-world problems, showcase your skills, and build innovative solutions.</p></motion.div>
            <motion.div variants={itemVariant} className="bg-gray-900 p-8 rounded-lg text-center shadow-lg hover:shadow-teal-400/20 transform hover:-translate-y-2 transition-all duration-300"><div className="flex justify-center mb-4"><svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg></div><h3 className="text-2xl font-bold mb-2 text-white">Open Source Projects</h3><p className="text-gray-400">Collaborate on meaningful open source projects, contribute code, and build a portfolio that stands out.</p></motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* === NEW SECTION 1: MEET THE EXECUTIVE COMMITTEE === */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-4 text-white" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}}>Meet the Leadership</motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}} transition={{delay: 0.2}}>
            The passionate individuals guiding our community's vision and activities.
          </motion.p>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariant} className="flex flex-col items-center group">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 group-hover:border-teal-400 transition-all duration-300 transform group-hover:scale-110" />
                <h3 className="font-bold text-xl text-white">{member.name}</h3>
                <p className="text-teal-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="mt-16" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <a href="/about" className="text-teal-400 font-semibold hover:text-white transition">View the Full Team →</a>
          </motion.div>
        </div>
      </section>

      {/* === NEW SECTION 2: FEATURED PROJECT SHOWCASE === */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="text-center md:text-left" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="text-teal-400 font-semibold tracking-wider">FEATURED PROJECT</span>
            <h2 className="text-4xl md:text-5xl font-bold my-4">UniVerse</h2>
            <p className="text-gray-400 mb-6 text-lg">An open-source platform for university students to manage academic resources, track progress, and collaborate. Built by students, for students.</p>
            <div className="flex flex-wrap gap-2 mb-8"><span className="bg-gray-700 text-teal-300 text-sm font-mono px-2 py-1 rounded">React</span><span className="bg-gray-700 text-teal-300 text-sm font-mono px-2 py-1 rounded">Node.js</span><span className="bg-gray-700 text-teal-300 text-sm font-mono px-2 py-1 rounded">MongoDB</span></div>
            <a href="#" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition transform hover:scale-105">View on GitHub</a>
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80" alt="Dashboard analytics" className="rounded-lg shadow-2xl"/>
          </motion.div>
        </div>
      </section>
      
      {/* 4. EVENT SPOTLIGHT SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 md:order-1" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.8}} viewport={{once: true}}><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80" alt="People collaborating at a tech event" className="rounded-lg shadow-2xl"/></motion.div>
          <motion.div className="order-1 md:order-2 text-center md:text-left" initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.8}} viewport={{once: true}}><span className="text-teal-400 font-semibold tracking-wider">UPCOMING EVENT</span><h2 className="text-4xl md:text-5xl font-bold my-4">Cloud Native Day '24</h2><p className="text-gray-400 mb-6 text-lg">Dive into the world of Kubernetes, Docker, and cloud technologies with a full day of talks and hands-on labs.</p><div className="text-3xl font-mono text-white mb-8"><span>24d : 18h : 05m</span></div><a href="/events/cloud-native-day-24" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition transform hover:scale-105">Event Details</a></motion.div>
        </div>
      </section>

      {/* 5. LATEST BLOG POSTS SECTION */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-white" initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}}>From Our Knowledge Base</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}}><img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1470&q=80" alt="Git and GitHub" className="w-full h-56 object-cover" /><div className="p-6"><h3 className="font-bold text-xl mb-2 text-white">Mastering Git & GitHub</h3><p className="text-gray-400 text-base mb-4">A beginner's guide to version control that every developer needs.</p><a href="#" className="font-semibold text-teal-400 hover:text-teal-300">Read More →</a></div></motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}} viewport={{once: true, amount: 0.5}}><img src="https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=1470&q=80" alt="Linux Terminal" className="w-full h-56 object-cover" /><div className="p-6"><h3 className="font-bold text-xl mb-2 text-white">Why You Should Learn Linux</h3><p className="text-gray-400 text-base mb-4">Unlock the power of the command line and understand the backbone of the internet.</p><a href="#" className="font-semibold text-teal-400 hover:text-teal-300">Read More →</a></div></motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4}} viewport={{once: true, amount: 0.5}}><img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1470&q=80" alt="React code" className="w-full h-56 object-cover" /><div className="p-6"><h3 className="font-bold text-xl mb-2 text-white">Intro to Modern Web Dev</h3><p className="text-gray-400 text-base mb-4">A look into the React ecosystem and how to build modern web applications.</p><a href="#" className="font-semibold text-teal-400 hover:text-teal-300">Read More →</a></div></motion.div>
          </div>
        </div>
      </section>

      {/* === NEW SECTION 3: GLIMPSE OF OUR GALLERY === */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <motion.h2 className="text-4xl font-bold mb-16 text-white" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}}>Community Moments</motion.h2>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>
                {galleryImages.map((src, index) => (
                    <motion.div key={index} variants={itemVariant} className="overflow-hidden rounded-lg">
                        <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 6. PARTNERS & SUPPORTERS SECTION */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold text-white mb-12" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>Proudly Supported By</motion.h2>
          <motion.div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>
            <motion.div variants={itemVariant} className="text-gray-400 text-xl font-semibold grayscale hover:grayscale-0 transition-all">University of Uva Wellassa</motion.div>
            <motion.div variants={itemVariant} className="text-gray-400 text-xl font-semibold grayscale hover:grayscale-0 transition-all">Dept. of Computer Science</motion.div>
            <motion.div variants={itemVariant} className="text-gray-400 text-xl font-semibold grayscale hover:grayscale-0 transition-all">GitHub</motion.div>
            <motion.div variants={itemVariant} className="text-gray-400 text-xl font-semibold grayscale hover:grayscale-0 transition-all">DigitalOcean</motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION SECTION */}
      <section className="bg-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h2 className="text-4xl font-bold text-white mb-4" initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>Ready to Build the Future?</motion.h2>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>Join a network of passionate developers and creators. Your next big idea starts here. There's no cost to join, only opportunities to grow.</motion.p>
          <motion.div initial={{scale: 0.8, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}}>
            <a href="/join" className="bg-teal-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-teal-600 transition transform hover:scale-105 shadow-lg">Become a Member</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;