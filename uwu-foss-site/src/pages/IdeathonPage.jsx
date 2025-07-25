// src/pages/IdeathonPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Menu, X, Award, CalendarCheck2, Lightbulb, Users, Trophy, ChevronDown, Rocket, Network, Star } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Reusable Section Component ---
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={cn("py-20 md:py-28 px-6", className)}>
    <div className="container mx-auto">{children}</div>
  </section>
);

// --- Data for the page (FOSS-themed & Detailed) ---
const timelineEvents = [
  { icon: <CalendarCheck2 size={28}/>, title: "Registration Opens", date: "Deadline: August 10, 2024", desc: "Form your teams and register via our official website to receive the full competition brief and guidelines." },
  { icon: <Lightbulb size={28}/>, title: "Proposal Submissions", date: "Deadline: August 20, 2024", desc: "Submit your innovative open-source solution proposal. The top 30 ideas will be selected." },
  { icon: <Users size={28}/>, title: "PitchForge (Semi-Finals)", date: "September 7, 2024", desc: "Top teams will pitch their ideas to industry experts. 12 teams will advance to the Grand Finals." },
  { icon: <Rocket size={28}/>, title: "DevSprint (Mentorship)", date: "Sep 14 - Oct 5, 2024", desc: "An exclusive workshop series for finalists, covering FOSS development, UI/UX, and pitching." },
  { icon: <Trophy size={28}/>, title: "Grand Finals", date: "October 12, 2024", desc: "The final showdown where teams present their refined prototypes to win the grand prize and recognition." },
];
const faqs = [
  { q: "Who can participate?", a: "CodeGenesis '24 is open to all undergraduate students from any university in Sri Lanka. Teams should consist of 3 to 5 members." },
  { q: "What kind of ideas are you looking for?", a: "We are looking for innovative software or hardware solutions that leverage open-source technology to solve real-world problems, especially under our theme of 'AI for Sustainable Futures'." },
  { q: "Is registration free?", a: "Yes, registration is completely free for all participating teams, thanks to our generous partners." },
  { q: "What are the key evaluation criteria?", a: "Proposals will be judged on innovation, technical feasibility, potential impact, and the effective use of open-source tools and technologies." },
];
const teamMembers = [
    { name: 'Kavindu Perera', role: 'Chief Coordinator', img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nethmi Silva', role: 'Chief Coordinator', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Asiri Weerasinghe', role: 'Partnership Coordinator', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fathima Rushdha', role: 'Marketing Coordinator', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Raees Ahamed', role: 'Financial Coordinator', img: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=400&q=80' },
];
const partners = [
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
    { name: 'DigitalOcean', logo: 'https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg' },
    { name: 'WSO2', logo: 'https://wso2.com/images/logo.svg' },
    { name: '99x', logo: 'https://99x.io/images/99x-logo.svg' },
    { name: 'SLASSCOM', logo: 'https://slasscom.lk/wp-content/uploads/2021/04/slasscom-logo.png' },
];

const IdeathonPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const particlesInit = useCallback(async engine => { await loadSlim(engine); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Timeline", "Awards", "Team", "Partners", "FAQs"];

  return (
    <div className="dark-grid-background text-white font-sans">
      {/* --- Ideathon Navbar --- */}
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <NavLink to="/" className="text-sm font-semibold text-gray-300 hover:text-white transition">← Back to FOSS Site</NavLink>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              // CORRECTED: Added activeClass to highlight the current section
              <ScrollLink 
                key={link} 
                to={link.toLowerCase()} 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="text-gray-300 hover:text-teal-400 transition cursor-pointer font-semibold"
                activeClass="text-teal-400 font-bold"
              >
                {link}
              </ScrollLink>
            ))}
          </div>
          <div className="hidden lg:block">
            <a href="#" className="bg-teal-500 text-white font-bold px-5 py-2 rounded-full hover:bg-teal-600 transition">Register Now</a>
          </div>
          <div className="lg:hidden"><button onClick={() => setNavOpen(true)} className="text-white"><Menu size={28} /></button></div>
        </div>
        {isNavOpen && <div className="lg:hidden fixed inset-0 bg-black/40 z-50" onClick={() => setNavOpen(false)}></div>}
        <div className={cn("lg:hidden fixed top-0 right-0 h-full w-72 bg-slate-800 shadow-xl transform transition-transform z-50", isNavOpen ? "translate-x-0" : "translate-x-full")}>
            <button onClick={() => setNavOpen(false)} className="absolute top-6 right-6 text-gray-300"><X size={28} /></button>
            <div className="flex flex-col space-y-4 p-8 mt-12">
              {navLinks.map(link => (
                <ScrollLink 
                  key={link} 
                  to={link.toLowerCase()} 
                  onClick={() => setNavOpen(false)} 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  className="text-gray-300 hover:text-teal-400 transition cursor-pointer text-lg font-semibold"
                  activeClass="text-teal-400 font-bold"
                >
                  {link}
                </ScrollLink>
              ))}
              <a href="#" className="bg-teal-500 text-white font-bold px-5 py-3 rounded-full hover:bg-teal-600 transition text-center mt-4">Register Now</a>
            </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-slate-900">
        <Particles id="tsparticles" init={particlesInit} options={{ background: { color: { value: "transparent" } }, fpsLimit: 60, particles: { color: { value: ["#0d9488", "#2dd4bf", "#ffffff"] }, links: { color: "#0d9488", distance: 150, enable: true, opacity: 0.1, width: 1 }, move: { enable: true, speed: 1 }, number: { density: { enable: true, area: 800 }, value: 80 }, opacity: { value: 0.3 }, shape: { type: "circle" }, size: { value: { min: 1, max: 3 } } } }} />
        <div className="relative z-10 px-6">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>CodeGenesis '24</motion.h1>
          <motion.p className="text-xl md:text-2xl mt-4 text-gray-300 max-w-2xl mx-auto" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}>The FOSS Ideathon on <span className="font-bold text-teal-400">AI for Sustainable Futures</span></motion.p>
          <motion.div className="mt-10" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{type:'spring', delay:0.6}}><a href="#" className="bg-teal-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-teal-600 transition transform hover:scale-105 shadow-lg shadow-teal-500/20">Register Your Team</a></motion.div>
        </div>
      </section>

      {/* --- "Why Participate?" Section --- */}
      <Section id="about" className="bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Why Join CodeGenesis?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center"><Rocket className="mx-auto h-12 w-12 text-teal-400 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Build a Killer Project</h3><p className="text-gray-400 mt-2">Transform your idea into a working prototype and add a high-impact project to your portfolio.</p></div>
          <div className="text-center"><Network className="mx-auto h-12 w-12 text-teal-400 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Network with Industry Pros</h3><p className="text-gray-400 mt-2">Connect with experienced judges, mentors, and partners from leading tech companies in Sri Lanka.</p></div>
          <div className="text-center"><Star className="mx-auto h-12 w-12 text-teal-400 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Win Big & Get Noticed</h3><p className="text-gray-400 mt-2">Compete for a massive prize pool, gain recognition, and get a chance to secure funding for your startup.</p></div>
        </div>
      </Section>

      {/* --- Timeline Section --- */}
      <Section id="timeline">
        <h2 className="text-4xl font-bold text-center text-white mb-20">Event Timeline</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700 translate-x-4"></div>
          {timelineEvents.map((event, i) => (
            <motion.div key={i} className="relative pl-12 mb-12" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.2}}>
              {/* CORRECTED: The icon is now correctly positioned on the line */}
              <div className="absolute left-0 top-1 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center z-10 ring-8 ring-slate-900">{event.icon}</div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="font-bold text-xl text-white">{event.title}</h3>
                <p className="text-teal-400 font-semibold mb-2">{event.date}</p>
                <p className="text-gray-400">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Awards Section --- */}
      <Section id="awards" className="bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Awards & Prizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <motion.div className="bg-slate-800 p-8 rounded-xl text-center" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}><Award className="mx-auto text-gray-400 mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">1st Runner Up</h3><p className="text-4xl font-bold text-gray-300 mt-2">LKR 75,000</p></motion.div>
            <motion.div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-8 rounded-xl text-center shadow-2xl shadow-teal-500/20 transform md:scale-110" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}}><Trophy className="mx-auto mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">Winner</h3><p className="text-4xl font-bold mt-2">LKR 125,000</p></motion.div>
            <motion.div className="bg-slate-800 p-8 rounded-xl text-center" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4}}><Award className="mx-auto text-amber-500 mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">2nd Runner Up</h3><p className="text-4xl font-bold text-gray-300 mt-2">LKR 50,000</p></motion.div>
        </div>
      </Section>

      {/* --- Team Section --- */}
      <Section id="team">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Meet the Organizers</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">The dedicated individuals from the FOSS Community making this event possible.</p>
        <Swiper modules={[Navigation]} navigation slidesPerView={1} spaceBetween={30} breakpoints={{640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }}} className="!pb-10">
            {teamMembers.map(member => (
                <SwiperSlide key={member.name} className="text-center p-4">
                    <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-2 border-gray-700" />
                    <h3 className="font-bold text-lg text-white">{member.name}</h3>
                    <p className="text-teal-400">{member.role}</p>
                </SwiperSlide>
            ))}
        </Swiper>
      </Section>

      {/* --- Partners Section --- */}
      <Section id="partners" className="bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Valued Partners</h2>
        {/* CORRECTED: Removed the filter that was hiding the logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 filter invert">
            {partners.map(p => (<div key={p.name} className="text-center opacity-60 hover:opacity-100 transition"><img src={p.logo} alt={p.name} className="h-10 mx-auto" /></div>))}
        </div>
      </Section>

      {/* --- FAQs Section --- */}
      <Section id="faqs">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-800 rounded-lg border border-gray-700">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 font-semibold text-white text-left"><span className="text-lg">{faq.q}</span><ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-teal-400' : ''}`} /></button>
              {openFaq === i && <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} className="overflow-hidden"><div className="p-6 pt-0 text-gray-400">{faq.a}</div></motion.div>}
            </div>
          ))}
        </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="container mx-auto text-center">
            <h3 className="text-xl font-bold text-white">FOSS Community | Uva Wellassa University</h3>
            <p className="mt-2">Advancing Open Source, One Idea at a Time.</p>
            <div className="mt-4 flex justify-center space-x-6"><a href="#" className="hover:text-white">GitHub</a><a href="#" className="hover:text-white">LinkedIn</a></div>
            <p className="text-sm mt-8">© CodeGenesis '24. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default IdeathonPage;