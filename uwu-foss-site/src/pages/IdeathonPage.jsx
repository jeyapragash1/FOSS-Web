// src/pages/IdeathonPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
// motion is used as JSX namespace (e.g. <motion.div/>) — ESLint sometimes flags it as unused
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Menu, X, Award, CalendarCheck2, Lightbulb, Users, Trophy, ChevronDown, Rocket, Network, Star, Mail, Phone, Facebook, Linkedin, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';
// Import organizers data (images + names) for Meet the Organizers
import { executiveCommittee } from '../data/homePageData';

// --- Reusable Section Component ---
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={cn("py-20 md:py-28 px-6", className)}>
    <div className="container mx-auto">{children}</div>
  </section>
);

// Small timeline data (keeps user-provided ordering and text)
const timelineSteps = [
  'Team Registration',
  'Introduction Session',
  'Proposal Submission',
  'Semi-Finalist Announcement',
  'Workshop 01 (online)',
  'Mentorship Program',
  'Workshop 02 (online)',
  'Semi-Final Pitching Day',
  'Finalist Announcement',
  'Final Round Orientation',
  'Grand Finale'
];

// (timelineEvents removed — content inlined per user request)
const faqs = [
  { q: "Who can participate?", a: "CodeGenesis '24 is open to all undergraduate students from any university in Sri Lanka. Teams should consist of 3 to 5 members." },
  { q: "What kind of ideas are you looking for?", a: "We are looking for innovative software or hardware solutions that leverage open-source technology to solve real-world problems, especially under our theme of 'AI for Sustainable Futures'." },
  { q: "Is registration free?", a: "Yes, registration is completely free for all participating teams, thanks to our generous partners." },
  { q: "What are the key evaluation criteria?", a: "Proposals will be judged on innovation, technical feasibility, potential impact, and the effective use of open-source tools and technologies." },
];
// (teamMembers removed — organizer contacts are rendered inline as requested)

// (partners/animation constants removed; page now uses inline motion wrappers and fixed content per user request)

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
  // Icons to pair with timeline steps (cycled if fewer than steps)
  const icons = [CalendarCheck2, Lightbulb, Rocket, Users, Trophy, Network, Star, Award, CalendarCheck2, Rocket, Trophy];

  // Explicit list of organizers to show (preserves exact contact details)
  const desiredOrganizers = [
    { name: 'Sachindu Kavishka', role: 'Club Lead (FOSS)', email: 'sachindu38@gmail.com', phone: '0764314505' },
    { name: 'Wasana Nilakshi', role: 'Secretary (FOSS)', email: 'nilakshiwasana@gmail.com', phone: '0767128842' },
    { name: 'Kasun Janith Bandara', role: 'Event Coordinator (FOSS)', email: 'kasunbandara1999@gmail.com', phone: '0772600914' },
    { name: 'Raes Ahamed', role: 'Treasurer (FOSS)', email: 'raeesahmedh116@gmail.com', phone: '0764953014' },
    { name: 'Nipuni Nawanjana', role: 'Club Lead (WIF)', email: 'nipuneenawanjana@gmail.com', phone: '0772448547' },
  ];

  // Attach available images from executiveCommittee if present.
  // Use a forgiving token-match to handle small spelling differences (e.g., 'Raes' vs 'Raees').
  const displayOrganizers = desiredOrganizers.map(d => {
    const target = d.name.trim().toLowerCase();
    const tokens = target.split(/\s+/).filter(Boolean);
    // try exact first
    let found = executiveCommittee.find(e => e.name && e.name.trim().toLowerCase() === target);
    if (!found) {
      // try token inclusion: require that at least one token is present in the candidate name
      found = executiveCommittee.find(e => {
        if (!e.name) return false;
        const candidate = e.name.trim().toLowerCase();
        // count how many tokens match
        const matches = tokens.filter(t => candidate.includes(t));
        return matches.length >= 1; // lenient: at least one token matches
      });
    }
    return { ...d, img: found && found.img ? found.img : null };
  });

  return (
    <div className="dark-grid-background text-white font-sans">
      {/* --- Ideathon Navbar --- */}
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <NavLink to="/" className="text-sm font-semibold text-gray-300 hover:text-white transition">← Back to FOSS UWU</NavLink>
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
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>DevX Challenge '2025</motion.h1>
          <motion.p className="text-xl md:text-2xl mt-4 text-gray-300 max-w-2xl mx-auto" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}>The FOSS Ideathon on <span className="font-bold text-teal-400">AI for Sustainable Futures</span></motion.p>
          <motion.div className="mt-10" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{type:'spring', delay:0.6}}><a href="#" className="bg-teal-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-teal-600 transition transform hover:scale-105 shadow-lg shadow-teal-500/20">Register Your Team</a></motion.div>
        </div>
      </section>

      {/* --- "Why Participate?" Section (user content + animations) --- */}
      <Section id="about" className="bg-gray-900/80 backdrop-blur-sm">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: hero + CTA + stats */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-sm font-medium text-teal-300">Official Event</span>
              </div>
              <h2 className="text-4xl font-extrabold text-white">Why Join CodeGenesis?</h2>
              <p className="text-gray-300 leading-relaxed">DevX Challenge 1.0 is a national-level Ideathon organized by UWU FOSS Community and Women In FOSS (WIF) in collaboration. It serves as a dynamic platform for young innovators and tech enthusiasts to showcase groundbreaking ideas that solve real-world problems.</p>
              <p className="text-gray-300 leading-relaxed">Unlike traditional hackathons that focus on building full software prototypes, DevX Challenge 1.0 emphasizes idea innovation, creativity, and practical problem-solving. Participants are encouraged to explore emerging technologies particularly in fields like Artificial Intelligence (AI) to propose solutions that are not only novel but also feasible and impactful.</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <motion.a whileHover={{scale:1.03}} href="#" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg">Register Your Team</motion.a>
                <motion.a whileHover={{scale:1.03}} href="#timeline" className="inline-flex items-center gap-2 border border-gray-700 text-teal-400 font-semibold px-5 py-3 rounded-full hover:bg-gray-800">View Timeline</motion.a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-gray-800 p-3 rounded-lg text-center border border-gray-700">
                  <div className="text-xl font-bold text-white">120K</div>
                  <div className="text-sm text-gray-300">Prize Pool (Rs.)</div>
                </motion.div>
                <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.05}} className="bg-gray-800 p-3 rounded-lg text-center border border-gray-700">
                  <div className="text-xl font-bold text-white">10</div>
                  <div className="text-sm text-gray-300">Finalists</div>
                </motion.div>
                <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="bg-gray-800 p-3 rounded-lg text-center border border-gray-700">
                  <div className="text-xl font-bold text-white">3</div>
                  <div className="text-sm text-gray-300">Special Awards</div>
                </motion.div>
              </div>
            </div>

            {/* Right: animated feature/card stack */}
            <div className="space-y-4">
              {[{
                icon:<Lightbulb size={24} />,
                title:'Idea-first Approach',
                desc:'Focus on innovation, feasibility and social impact. You don\'t need a full prototype to shine.'
              },{
                icon:<Rocket size={24} />,
                title:'Mentorship & Workshops',
                desc:'Attend curated workshops and mentorship sessions to refine your idea and pitch.'
              },{
                icon:<Network size={24} />,
                title:'Industry Exposure',
                desc:'Present to academics and industry professionals; get noticed by partners and sponsors.'
              }].map((card, i) => (
                <motion.div key={card.title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:i*0.08}} whileHover={{scale:1.02}} className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-5 rounded-xl border border-gray-700 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-teal-400 mt-1">{card.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold">{card.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* --- Timeline Section: Modern Roadmap (alternating) --- */}
      <Section id="timeline">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Event Timeline — Roadmap</h2>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {timelineSteps.map((step, i) => {
              const Left = i % 2 === 0;
              const Icon = icons[i % icons.length];
              return (
                <motion.div key={step} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:i*0.04}} className="md:flex md:items-start md:gap-6">
                  {/* side icon & badge */}
                  <div className={`${Left ? 'md:order-1 md:w-1/5 md:text-right' : 'md:order-2 md:w-1/5 md:text-left'} flex md:block items-center gap-4`}> 
                    <div className="flex items-center md:justify-end">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-teal-500 flex items-center justify-center text-white text-lg font-bold shadow-xl">
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>

                  {/* card */}
                  <div className={`${Left ? 'md:order-2 md:w-4/5' : 'md:order-1 md:w-4/5'} w-full`}>
                    <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl transition">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold text-lg">{step}</h4>
                        <div className="text-sm text-gray-300">Stage {i+1}</div>
                      </div>
                      <p className="text-gray-400 text-sm mt-3">{/* add concise description here if needed */}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile fallback: stacked */}
          <div className="md:hidden mt-6 space-y-4">
            {timelineSteps.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div key={`m-${step}`} initial={{opacity:0, x:-8}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.03}} className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-lg border border-gray-700 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold"><Icon size={18} /></div>
                  <div>
                    <h4 className="text-white font-semibold">{step}</h4>
                    <div className="text-sm text-gray-300">Stage {i+1}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* --- Awards Section (redesigned) --- */}
      <Section id="awards" className="bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Awards & Prizes</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Champion feature */}
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="md:col-span-2 bg-gradient-to-br from-teal-600/20 to-slate-800/40 p-8 rounded-2xl border border-teal-500/10 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">1</div>
              <div>
                <h3 className="text-3xl font-bold text-white">Champion — Rs. 120,000</h3>
                <p className="text-gray-300 mt-2">Awarded to the top team for overall innovation, feasibility, and impact. Includes a trophy, certificate, and prize money.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-slate-800/60 px-3 py-2 rounded-full border border-gray-700"><Trophy size={16} /><span className="text-sm text-gray-200">Trophy</span></div>
                  <div className="inline-flex items-center gap-2 bg-slate-800/60 px-3 py-2 rounded-full border border-gray-700"><Award size={16} /><span className="text-sm text-gray-200">Certificate</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Runners-up */}
          <div className="space-y-6">
            {[{title:'1st Runner Up', amount:'Rs. 60,000'}, {title:'2nd Runner Up', amount:'Rs. 40,000'}].map((p, idx) => (
              <motion.div key={p.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:idx*0.06}} className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{p.title}</h4>
                    <p className="text-gray-300 mt-1">{p.amount}</p>
                  </div>
                  <div className="text-teal-400 font-bold text-lg">{p.amount}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.15}} className="max-w-6xl mx-auto mt-8 text-gray-300">
          {/* <h4 className="text-xl font-semibold text-white mb-3">Special Prizes</h4> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-lg border border-gray-700 text-center">
              <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={22} /></div>
              <h5 className="font-semibold text-white">Most Popular Team</h5>
              <p className="text-gray-300 text-sm mt-1">Rs. 10,000 — based on promotional video reach on FOSS social channels.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-lg border border-gray-700 text-center">
              <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={22} /></div>
              <h5 className="font-semibold text-white">Best UI/UX Design</h5>
              <p className="text-gray-300 text-sm mt-1">Rs. 10,000 — awarded for design excellence.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-lg border border-gray-700 text-center">
              <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={22} /></div>
              <h5 className="font-semibold text-white">AI Mastery Award</h5>
              <p className="text-gray-300 text-sm mt-1">Rs. 10,000 — outstanding use of AI.</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* --- Team Section (Meet the Organizers: contact cards) --- */}
      <Section id="team">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Meet the Organizers</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">The dedicated individuals from the FOSS Community making this event possible.</p>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {displayOrganizers.map((member, idx) => (
              <div key={member.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm">
                <motion.div whileHover={{ y:-6, scale:1.02 }} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45, delay:idx*0.04 }} className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-lg overflow-hidden flex flex-col items-center text-center justify-between h-full min-h-[22rem]">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-700 bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center mx-auto">
                    {member.img ? <img src={member.img} alt={member.name} className="w-full h-full object-cover block" /> : <div className="text-white font-bold text-2xl">{member.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-white font-bold">{member.name}</h4>
                    <div className="text-sm text-gray-300 mt-1 font-medium">{member.role}</div>
                    <div className="mt-4 space-y-2">
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="flex items-center justify-center gap-2 text-gray-200 hover:text-white">
                        <Mail size={16} />
                        <span className="text-sm break-all">{member.email}</span>
                      </a>
                      <a href={`tel:${member.phone}`} aria-label={`Call ${member.name}`} className="flex items-center justify-center gap-2 text-gray-200 hover:text-white">
                        <Phone size={16} />
                        <span className="text-sm">{member.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- Participants Section (user-provided) --- */}
      <Section id="participants" className="bg-gray-900/80">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Who Can Participate</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-500/10 text-teal-300"><Users size={22} /></div>
              <div>
                <h3 className="text-white font-semibold">Eligibility</h3>
                <p className="text-gray-300 mt-2">Open to all undergraduate students from recognised universities in Sri Lanka. Teams may be from the same or different universities.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-500/10 text-teal-300"><Users size={22} /></div>
              <div>
                <h3 className="text-white font-semibold">Team Rules</h3>
                <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1">
                  <li>Team size: 3 to 5 members.</li>
                  <li>A participant may register with only one team.</li>
                  <li>Teams may be single-gender or mixed.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-500/10 text-teal-300"><Lightbulb size={22} /></div>
              <div>
                <h3 className="text-white font-semibold">What to Prepare</h3>
                <p className="text-gray-300 mt-2">A clear proposal describing the problem, solution approach, technical feasibility, and expected impact. Prototype is optional.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Structure Section (user-provided) --- */}
      <Section id="structure" className="bg-gray-800/70">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Structure of DevX</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Registration & Proposal</h3>
            <p className="text-gray-300 mt-2">Register online and submit a concise proposal describing problem, solution, and team members. Follow submission guidelines shared after registration.</p>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Screening & Semi-Finals</h3>
            <p className="text-gray-300 mt-2">Top proposals are shortlisted for online semi-finals. Selected teams attend workshops and mentorship sessions to refine their pitches.</p>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Finals Orientation</h3>
            <p className="text-gray-300 mt-2">Finalists receive orientation materials and guidelines ahead of the Grand Finale.</p>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Grand Finale</h3>
            <p className="text-gray-300 mt-2">Live event in Colombo where finalists present to a judging panel. Prizes awarded to Champion, 1st Runner-Up, and 2nd Runner-Up. All finalists receive participation certificates.</p>
          </div>
        </div>
      </Section>

      {/* --- Special Prizes (expanded) --- */}
      <Section id="special-prizes" className="bg-gray-900/80">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Special Prizes</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-xl border border-gray-700 text-center">
            <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={26} /></div>
            <h5 className="font-semibold text-white">Most Popular Team</h5>
            <p className="text-gray-300 text-sm mt-2">Prize for the team with the highest promotional reach across FOSS channels.</p>
            <div className="mt-4 text-teal-300 font-semibold">Rs. 10,000</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-xl border border-gray-700 text-center">
            <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={26} /></div>
            <h5 className="font-semibold text-white">Best UI/UX Design</h5>
            <p className="text-gray-300 text-sm mt-2">Awarded for outstanding design, clarity, and user experience.</p>
            <div className="mt-4 text-teal-300 font-semibold">Rs. 10,000</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 p-6 rounded-xl border border-gray-700 text-center">
            <div className="flex items-center justify-center mb-3 text-teal-400"><Star size={26} /></div>
            <h5 className="font-semibold text-white">AI Master Award</h5>
            <p className="text-gray-300 text-sm mt-2">For exemplary and effective use of AI techniques in the solution.</p>
            <div className="mt-4 text-teal-300 font-semibold">Rs. 10,000</div>
          </div>
        </div>
      </Section>

      {/* --- Sponsors & Partnership categories (user-provided) --- */}
      <Section id="sponsors" className="bg-gray-800/70">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sponsors & Partnership Opportunities</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Sponsor Tiers</h3>
            <ul className="text-gray-300 mt-3 list-disc list-inside">
              <li>Title Sponsor — exclusive naming and top visibility</li>
              <li>Platinum — keynote slot and premium placement</li>
              <li>Gold / Silver — branding and booth options</li>
            </ul>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-white font-semibold">Partnership Categories</h3>
            <p className="text-gray-300 mt-2">We accept partners for Venue, Mentorship, Food & Beverage, Media, Technical support, and Printing. Contact the team for a sponsorship prospectus and tailored benefits.</p>
          </div>
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
          <p className="mt-2 text-gray-300">Advancing Open Source, One Idea at a Time.</p>

          <div className="mt-6 flex items-center justify-center gap-6">
            {/* FOSS group */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/FOSSUWU" className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-gray-200" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
                <span className="hidden sm:inline">FOSS</span>
              </a>
              <a href="https://www.linkedin.com/company/fossuwu/" className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-gray-200" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@fossuwu2593" className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-gray-200" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
                <span className="hidden sm:inline">YouTube</span>
              </a>
            </div>

            <div className="w-px h-6 bg-slate-700" />

            {/* WIF group */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/16yPuuKu5c/" className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-gray-200" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
                <span className="hidden sm:inline">WIF</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/20 text-gray-500 cursor-not-allowed" aria-disabled>
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-400">Contact the event team for sponsorship and partnership details.</div>
          <div className="mt-4 text-sm text-gray-500">© CodeGenesis '24. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default IdeathonPage;
 