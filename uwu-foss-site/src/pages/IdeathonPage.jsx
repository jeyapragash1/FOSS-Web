// src/pages/IdeathonPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom'; // For the "Back to FOSS Site" button
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Menu, X, Award, CalendarCheck2, Lightbulb, Users, Trophy, ChevronDown, Rocket, Network, Star } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming you have this from previous steps

// --- Reusable Section Component ---
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={cn("py-20 md:py-28 px-6", className)}>
    <div className="container mx-auto">{children}</div>
  </section>
);

// --- Data for the page (FOSS-themed & Detailed) ---
const timelineEvents = [
  { icon: <CalendarCheck2 size={28}/>, title: "Registration Opens", date: "Deadline: August 10, 2024", desc: "Form your teams of 3-5 members and register via our official website to receive the full competition brief and guidelines." },
  { icon: <Lightbulb size={28}/>, title: "Proposal Submissions", date: "Deadline: August 20, 2024", desc: "Submit your innovative open-source solution proposal. The top 30 ideas will be selected for the next round." },
  { icon: <Users size={28}/>, title: "PitchForge (Semi-Finals)", date: "September 7, 2024", desc: "The top teams will pitch their ideas to a panel of industry experts. 12 teams will advance to the Grand Finals." },
  { icon: <Rocket size={28}/>, title: "DevSprint (Mentorship)", date: "Sep 14 - Oct 5, 2024", desc: "An exclusive workshop series for finalists, covering FOSS development, UI/UX, and pitching with industry mentors." },
  { icon: <Trophy size={28}/>, title: "Grand Finals", date: "October 12, 2024", desc: "The final showdown where the best teams present their refined prototypes to win the grand prize and recognition." },
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
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'DigitalOcean', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
    { name: 'WSO2', logo: 'https://wso2.com/images/logo.svg' },
    { name: '99x', logo: 'https://99x.io/images/99x-logo.svg' },
    { name: 'SLASSCOM', logo: 'https://slasscom.lk/wp-content/uploads/2021/04/slasscom-logo.png' },
];

const IdeathonPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Timeline", "Awards", "Team", "Partners", "FAQs"];

  return (
    <div className="light-grid-background text-slate-800 font-sans">
      {/* --- Ideathon Navbar --- */}
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <NavLink to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">← Back to FOSS Site</NavLink>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <ScrollLink key={link} to={link.toLowerCase()} spy={true} smooth={true} offset={-80} duration={500} className="text-slate-600 hover:text-blue-600 transition cursor-pointer font-semibold">{link}</ScrollLink>
            ))}
          </div>
          <div className="hidden lg:block">
            <a href="#" className="bg-blue-600 text-white font-bold px-5 py-2 rounded-full hover:bg-blue-700 transition">Register Now</a>
          </div>
          <div className="lg:hidden"><button onClick={() => setNavOpen(true)} className="text-slate-800"><Menu size={28} /></button></div>
        </div>
        {isNavOpen && <div className="lg:hidden fixed inset-0 bg-black/40 z-50" onClick={() => setNavOpen(false)}></div>}
        <div className={cn("lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform z-50", isNavOpen ? "translate-x-0" : "translate-x-full")}>
            <button onClick={() => setNavOpen(false)} className="absolute top-6 right-6 text-slate-600"><X size={28} /></button>
            <div className="flex flex-col space-y-4 p-8 mt-12">
              {navLinks.map(link => (<ScrollLink key={link} to={link.toLowerCase()} onClick={() => setNavOpen(false)} spy={true} smooth={true} offset={-80} duration={500} className="text-slate-700 hover:text-blue-600 transition cursor-pointer text-lg font-semibold">{link}</ScrollLink>))}
              <a href="#" className="bg-blue-600 text-white font-bold px-5 py-3 rounded-full hover:bg-blue-700 transition text-center mt-4">Register Now</a>
            </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-slate-50">
        <Particles id="tsparticles" init={particlesInit} options={{ background: { color: { value: "transparent" } }, fpsLimit: 60, particles: { color: { value: "#0ea5e9" }, links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.1 }, move: { enable: true, speed: 1 }, number: { density: { enable: true, area: 800 }, value: 80 }, opacity: { value: 0.3 }, shape: { type: "circle" }, size: { value: { min: 1, max: 3 } } } }} />
        <div className="relative z-10 px-6">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>CodeGenesis '24</motion.h1>
          <motion.p className="text-xl md:text-2xl mt-4 text-slate-600 max-w-2xl mx-auto" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}>The FOSS Ideathon on <span className="font-bold text-blue-600">AI for Sustainable Futures</span></motion.p>
          <motion.div className="mt-10" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{type:'spring', delay:0.6}}><a href="#" className="bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">Register Your Team</a></motion.div>
        </div>
      </section>

      {/* --- "Why Participate?" Section --- */}
      <Section id="about" className="bg-white">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Why Join CodeGenesis?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center"><Rocket className="mx-auto h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Build a Killer Project</h3><p className="text-slate-600 mt-2">Transform your idea into a working prototype and add a high-impact project to your portfolio.</p></div>
          <div className="text-center"><Network className="mx-auto h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Network with Industry Pros</h3><p className="text-slate-600 mt-2">Connect with experienced judges, mentors, and partners from leading tech companies in Sri Lanka.</p></div>
          <div className="text-center"><Star className="mx-auto h-12 w-12 text-blue-600 mb-4" strokeWidth={1.5}/><h3 className="text-xl font-bold">Win Big & Get Noticed</h3><p className="text-slate-600 mt-2">Compete for a massive prize pool, gain recognition, and get a chance to secure funding for your startup.</p></div>
        </div>
      </Section>

      {/* --- Timeline Section --- */}
      <Section id="timeline" className="bg-slate-50">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-20">Event Timeline</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-slate-200"></div>
          {timelineEvents.map((event, i) => (
            <motion.div key={i} className="relative mb-12 flex items-center" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5}}>
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <motion.div className="bg-white p-6 rounded-lg shadow-md border border-slate-200" initial={{x: i % 2 === 0 ? -30 : 30}} whileInView={{x:0}} viewport={{once:true}}>
                  <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center z-10">{event.icon}</div>
                  <h3 className="font-bold text-xl text-slate-800 mt-8 md:mt-0">{event.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{event.date}</p>
                  <p className="text-slate-600">{event.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Awards Section --- */}
      <Section id="awards" className="bg-white">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Awards & Prizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <motion.div className="bg-slate-100 p-8 rounded-xl text-center" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}><Award className="mx-auto text-slate-400 mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">1st Runner Up</h3><p className="text-4xl font-bold text-slate-700 mt-2">LKR 75,000</p></motion.div>
            <motion.div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white p-8 rounded-xl text-center shadow-2xl transform md:scale-110" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}}><Trophy className="mx-auto mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">Winner</h3><p className="text-4xl font-bold mt-2">LKR 125,000</p></motion.div>
            <motion.div className="bg-slate-100 p-8 rounded-xl text-center" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4}}><Award className="mx-auto text-amber-500 mb-4 h-12 w-12"/><h3 className="text-2xl font-bold">2nd Runner Up</h3><p className="text-4xl font-bold text-slate-700 mt-2">LKR 50,000</p></motion.div>
        </div>
      </Section>

      {/* --- Team Section --- */}
      <Section id="team" className="bg-slate-50">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Meet the Organizers</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">The dedicated individuals from the FOSS Community making this event possible.</p>
        <Swiper modules={[Navigation]} navigation slidesPerView={1} spaceBetween={30} breakpoints={{640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }}} className="!pb-10">
            {teamMembers.map(member => (
                <SwiperSlide key={member.name} className="text-center p-4">
                    <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                    <h3 className="font-bold text-lg text-slate-800">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                </SwiperSlide>
            ))}
        </Swiper>
      </Section>

      {/* --- Partners Section --- */}
      <Section id="partners" className="bg-white">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Valued Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {partners.map(p => (<div key={p.name} className="text-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"><img src={p.logo} alt={p.name} className="h-10 mx-auto" /></div>))}
        </div>
      </Section>

      {/* --- FAQs Section --- */}
      <Section id="faqs" className="bg-slate-50">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-200">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 font-semibold text-slate-800 text-left"><span className="text-lg">{faq.q}</span><ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-blue-600' : ''}`} /></button>
              {openFaq === i && <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} className="overflow-hidden"><div className="p-6 pt-0 text-slate-600">{faq.a}</div></motion.div>}
            </div>
          ))}
        </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-slate-800 text-slate-400 py-12 px-6">
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