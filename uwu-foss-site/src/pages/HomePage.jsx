// src/pages/HomePage.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ChevronLeft, ChevronRight, Quote, Calendar, Clock, MapPin } from 'lucide-react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
// Add this import at the top of your HomePage.jsx file
import heroVideo from '../assets/videos/video1.mp4';
// Add 'Camera' to your lucide-react import at the top of HomePage.jsx
import {  Camera } from 'lucide-react';

// filepath: g:\GitHub\FOSS-Web\uwu-foss-site\src\pages\HomePage.jsx
import { Target, Eye, Award } from 'lucide-react';
// --- Animation Variants ---
const containerVariant = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariant = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

// --- Data for All Sections ---
// --- UPDATE THIS DATA ARRAY IN HomePage.jsx ---

const updates = [
    { 
        date: 'March 15, 2024', 
        title: 'Open Source AI Workshop', 
        img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=60',
        buttonText: 'Register Now',
        buttonLink: '#' // Add your registration link here
    },
    { 
        date: 'March 10, 2024', 
        title: 'New Project: "Agri-Bot"', 
        img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=60',
        buttonText: 'Learn More',
        buttonLink: '#' // Add your GitHub project link here
    },
    { 
        date: 'March 5, 2024', 
        title: 'Industry Speaker Series', 
        img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=60',
        buttonText: 'Learn More',
        buttonLink: '#' // Add a link to more details
    },
];
// --- UPDATE THIS DATA ARRAY IN HomePage.jsx ---

const events = [
    { 
        title: 'FOSSYCon 2024', 
        date: 'November 15, 2023', 
        time: '10:00 AM - 5:00 PM', 
        location: 'Main Auditorium',
        desc: 'Join us for our annual flagship conference where industry leaders share insights on the future of open source.',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    { 
        title: 'Open AI Summit', 
        date: 'December 1, 2023', 
        time: '9:00 AM - 4:00 PM',
        location: 'Innovation Center',
        desc: 'Explore the latest advancements in open-source AI, from large language models to computer vision.',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    { 
        title: 'React Hands-on Workshop', 
        date: 'December 10, 2023', 
        time: '1:00 PM - 3:00 PM',
        location: 'Computer Lab 01',
        desc: 'A hands-on workshop for aspiring web developers. Build a complete app from scratch with React.',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
];

const leadershipTeam = [
     { name: 'Imasha Vithanage', role: 'Lead UI/UX Designer', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Praveen Jayasuriya', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },

  ];
const coordinatingTeam = [
    { name: 'Imasha Vithanage', role: 'Lead UI/UX Designer', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Praveen Jayasuriya', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },

  ];
const technicalTeam = [
    { name: 'Imasha Vithanage', role: 'Lead UI/UX Designer', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Praveen Jayasuriya', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },

  ];
const designTeam = [
    { name: 'Imasha Vithanage', role: 'Lead UI/UX Designer', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Praveen Jayasuriya', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Event Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavindu Perera', role: 'Partnerships Lead', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Social Media Manager', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },


  ];

// --- UPDATE THIS DATA ARRAY IN HomePage.jsx ---

const testimonials = [
    { 
        quote: "Joining FOSS was the best decision of my university life. I learned Git and contributed to a real project in my first semester.", 
        name: 'Nimali Perera', 
        role: '3rd Year, Computer Science', 
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' 
    },
    { 
        quote: "The workshops are top-notch. The Docker session clarified so many complex concepts. The community is incredibly supportive.", 
        name: 'Sahan Rathnayake', 
        role: '2nd Year, Engineering Tech', 
        img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' 
    },
    { 
        quote: "I met my hackathon team and future project partners through FOSS. It's more than a club; it's a network that pushes you.", 
        name: 'Fathima Rizwan', 
        role: '4th Year, Computer Science', 
        img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80' 
    },
];

const chapters = [
    { name: 'Web & Cloud', icon: '☁️', desc: 'Exploring modern web frameworks, cloud deployment, and CI/CD pipelines.' },
    { name: 'AI & Data Science', icon: '🤖', desc: 'Diving into data science, neural networks, and open-source AI.' },
    { name: 'Cybersecurity & Privacy', icon: '🛡️', desc: 'Focusing on ethical hacking, network security, and digital privacy tools.' },
    { name: 'Systems & DevOps', icon: '🐧', desc: 'Working with Linux, shell scripting, containerization, and automation.' },
];

// --- UPDATE THIS DATA ARRAY IN HomePage.jsx ---

const blogPosts = [
    { 
        slug: 'mastering-git-and-github', 
        title: 'Mastering Git & GitHub', 
        img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=60',
        category: 'Tutorial',
        excerpt: 'A beginner\'s guide to version control that every developer needs. Learn the fundamentals of Git and how to collaborate on GitHub.',
        authorName: 'Asiri Weerasinghe',
        authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80'
    },
    { 
        slug: 'why-you-should-learn-linux', 
        title: 'Why You Should Learn Linux', 
        img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=60',
        category: 'DevOps',
        excerpt: 'Unlock the power of the command line and understand the backbone of the internet and cloud infrastructure.',
        authorName: 'Chandima Jayawardana',
        authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'
    },
    { 
        slug: 'intro-to-modern-web-dev', 
        title: 'Intro to Modern Web Dev', 
        img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=60',
        category: 'Community',
        excerpt: 'A look into the React ecosystem and a recap of our latest workshop on building modern web applications.',
        authorName: 'Raees Ahamed',
        authorImg: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=100&q=80'
    },
];

// --- UPDATE THIS DATA ARRAY IN HomePage.jsx ---

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80', alt: 'Speaker at a conference', event: 'FOSSYCon 2024', layout: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=60', alt: 'Students in a workshop', event: 'React Workshop' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=60', alt: 'Group discussion at an event', event: 'AI Summit' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60', alt: 'Team collaborating on laptops', event: 'Hackathon' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60', alt: 'Students networking', event: 'Community Meetup' },
];

const TeamGrid = ({ teamData }) => (
    <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {teamData.map((member, i) => (
            <motion.div key={i} variants={itemVariant} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 object-cover" />
                <h3 className="font-bold text-xl text-white">{member.name}</h3>
                <p className="text-teal-400">{member.role}</p>
            </motion.div>
        ))}
    </motion.div>
);

const HomePage = () => {
  const [activeTeamTab, setActiveTeamTab] = useState('Leadership');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="bg-gray-900 text-white">
    {/* === 1. HERO SECTION (with Video Background) === */}
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
      className="text-3xl md:text-5xl text-teal-300 tracking-widest uppercase" 
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
      className="text-lg md:text-3xl text-gray-200" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 3.5 }}
    >
      The Free And Open Source Software Community
    </motion.p>
  </motion.div>
  
</section>

{/* === WHO WE ARE SECTION (Ultimate FOSS Style) === */}
<section id="about-section" className="py-24 bg-gray-900 overflow-hidden">
  <div className="container mx-auto px-6">
    
    {/* Section Header */}
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
            To foster technological innovation and professional growth by championing the core open-source principles of collaboration, transparency, and community-driven development.
        </p>
      </motion.div>

      {/* Card 2: Our Vision (Highlighted) */}
      <motion.div 
        variants={itemVariant}
        whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500/50 text-center flex flex-col items-center shadow-2xl cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-sky-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-gray-900/80 p-8 rounded-xl h-full flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full mb-6 shadow-inner">
                <Eye className="w-8 h-8 text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
                To be the leading student organization that bridges the gap between academic learning and real-world industry practice, preparing students for successful careers in technology.
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
            We believe in the power of community, the importance of transparency, and the freedom to innovate and share knowledge openly with everyone.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

   {/* 7. TECHNOLOGY CHAPTERS SECTION */}
      <section id="chapters-section" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-4 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Technology Chapters</motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Explore our specialized chapters that focus on different areas of technology.</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {chapters.map((chapter, i) => (<motion.div key={i} className="bg-gray-800 p-8 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-5xl mb-4">{chapter.icon}</div><h3 className="font-bold text-xl text-white mb-2">{chapter.name}</h3><p className="text-sm text-gray-400">{chapter.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      




      {/* 6. NEW MEET OUR TEAMS SECTION */}
      <section id ="about-section" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-4 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Meet Our Core Teams</motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>The passionate individuals who drive our community forward with dedication and innovation.</motion.p>
          <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
            <button onClick={() => setActiveTeamTab('Leadership')} className={`px-4 py-2 rounded-md font-semibold transition ${activeTeamTab === 'Leadership' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}>Leadership</button>
            <button onClick={() => setActiveTeamTab('Coordinating')} className={`px-4 py-2 rounded-md font-semibold transition ${activeTeamTab === 'Coordinating' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}>Coordinating</button>
            <button onClick={() => setActiveTeamTab('Technical')} className={`px-4 py-2 rounded-md font-semibold transition ${activeTeamTab === 'Technical' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}>Technical</button>
            <button onClick={() => setActiveTeamTab('Design')} className={`px-4 py-2 rounded-md font-semibold transition ${activeTeamTab === 'Design' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}>Design</button>
          </div>
          <div>
            {activeTeamTab === 'Leadership' && <TeamGrid teamData={leadershipTeam} />}
            {activeTeamTab === 'Coordinating' && <TeamGrid teamData={coordinatingTeam} />}
            {activeTeamTab === 'Technical' && <TeamGrid teamData={technicalTeam} />}
            {activeTeamTab === 'Design' && <TeamGrid teamData={designTeam} />}
          </div>
        </div>
      </section>

{/* 5. NEW TESTIMONIALS SLIDER SECTION */}
<TestimonialSlider testimonials={testimonials} />
 {/* === RECENT UPDATES SECTION (with Action Buttons) === */}
<section id='events-section' className="py-24 bg-gray-900">
  <div className="container mx-auto px-6">
    <motion.h2 
      className="text-4xl font-bold text-center mb-16 text-white" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
    >
      Recent Updates
    </motion.h2>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          className="bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden group border border-gray-700/50"
        >
          {/* Image Container */}
          <div className="overflow-hidden">
            <img 
              src={update.img} 
              alt={update.title} 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content Area */}
          <div className="p-6 flex flex-col flex-grow">
            <div>
              <p className="text-sm text-gray-400 mb-1">{update.date}</p>
              <h3 className="font-bold text-xl text-white">{update.title}</h3>
            </div>
            
            {/* Button pushed to the bottom */}
            <div className="mt-auto pt-6">
              <a 
                href={update.buttonLink}
                className="bg-teal-500/10 text-teal-300 border border-teal-500/30 font-bold py-2 px-4 rounded-md hover:bg-teal-500 hover:text-white transition w-full block text-center"
              >
                {update.buttonText}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

 
    {/* === UPCOMING EVENTS SECTION (IEEE Style) === */}
<section id="events-section" className="py-24 bg-gray-900">
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
                    {/* Event Image */}
                    <div className="overflow-hidden">
                        <img 
                            src={event.img} 
                            alt={event.title} 
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Info Bar */}
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

                    {/* Content Area */}
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
      


   
      {/* 8. BLOG SECTION */}
      <section id="blog-section" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>From Our Knowledge Base</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (<motion.div key={post.slug} whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}><a href="#"><img src={post.img} alt={post.title} className="w-full h-56 object-cover" /><div className="p-6"><h3 className="font-bold text-xl mb-2 text-white">{post.title}</h3></div></a></motion.div>))}
          </div>
        </div>
      </section>

  {/* === GALLERY SECTION (New FOSS Style) === */}
<section id="gallery-section" className="py-24 bg-gray-900">
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
          {/* Hover Overlay */}
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
        <a href="#" className="text-teal-400 font-semibold text-lg hover:text-white transition">
            Explore the Full Gallery →
        </a>
    </motion.div>
  </div>
</section>
      
      {/* 10. JOIN US CTA */}
      <section id="join-us-section" className="relative py-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold text-white mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Ready to Join Our Community?</motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Become a member and unlock opportunities to grow, learn, and connect with professionals across all our specialized chapters.</motion.p>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <a href="https://forms.gle/your_google_form_link" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition">Join Now - It's Free</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;