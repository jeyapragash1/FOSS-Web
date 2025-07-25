// src/data/homePageData.js

import React from 'react'; // THIS IS THE CRITICAL FIX: Allows JSX to be used in this file.
import { Key, Users, Code, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

// --- IMAGE IMPORTS (Corrected, Organized, and No Duplicates) ---

// Executive Committee
import sachinduKavishka from '../assets/images/xcom/Club le/Sachindu Kavishka.jpg';
import wasanaNilakshi from '../assets/images/xcom/Sec/Wasana Nilakshi.jpg';
import rashmiRuwanthika from '../assets/images/xcom/Sec/Rashmi Ruwanthika Athukorala.jpg';
import hasiniVimandya from '../assets/images/xcom/Des-WIF/Hasini Sarathchandra.jpeg'; 
import kasunJahith from '../assets/images/xcom/Ev-Co/kasun bandara.jpeg'; 
import kishoJeyapragash from '../assets/images/xcom/Tech/jp-tech-lead.PNG';
import kavindaChamod from '../assets/images/xcom/Mem-Rec/Kavinda Chandrasiri.jpg';
import chamodyaPerera from '../assets/images/xcom/Mem-Rec/Chamodya Perera.jpg';
import isuriManodya from '../assets/images/xcom/P-R-L/PANAMALDENIYE R.I.M..jpg'; 
import thinujaHettiarachchi from '../assets/images/xcom/Tech/Thinuja hettiarachchi.jpeg';
import misalRanasinghe from '../assets/images/xcom/Des/Nisal Ranasinghe.jpeg';
import raeesAhamed from '../assets/images/xcom/Tresu/Raees Ahamed.jpg';
import tharinduDevinda from '../assets/images/xcom/Tresu/Tharindu devinda.jpg';
import nilakshanRaveendran from '../assets/images/xcom/Des/NILAKSHAN R..jpg';
import bhagyaLakshan from '../assets/images/xcom/Mar/MADHUSHANKA R.M.B.L..jpg';

// Junior Committee
import kavisanaKanthavanesan from '../assets/images/jxcom/Design/KANTHAVANESAN K.jpeg';
import sajithNuski from '../assets/images/jxcom/Design/M.N.M.S. Nuski.jpg';
import fathimaNuha from '../assets/images/jxcom/Design/NUHA M.N.F.jpg';
import quintusJonath from '../assets/images/jxcom/Design/Q. Jonath.jpg';
import sasinduSandeepa from '../assets/images/jxcom/Design/sasindu sandeepa.jpeg';
import sanduniAyeshika from '../assets/images/jxcom/Ev-Co-T/A.M.S.A. Jayawardhana.jpg';
import chathuriDhananjana from '../assets/images/jxcom/Ev-Co-T/Chathuri Paththamperuma.jpg';
import rameshaDeshan from '../assets/images/jxcom/Ev-Co-T/DESHAN K.M.V.R.jpg';
import inukaKavinda from '../assets/images/jxcom/Ev-Co-T/KAVINDA K.G.I.jpg';
import thanarajanVidhushika from '../assets/images/jxcom/Ev-Co-T/T.VIDUSHIKA.jpg';
import kirushikaThavanesan from '../assets/images/jxcom/Market/K. Thavanesan.jpg';
import binushiNayanathara from '../assets/images/jxcom/Market/M.B. Nayanathara.jpg';
import ajmalKhanAfrin from '../assets/images/jxcom/Sec/JEEHAN A.K.A.jpg';
import sureshkumarNogini from '../assets/images/jxcom/Sec/S. Nogini.jpg';
import nimmaniWickramarathna from '../assets/images/jxcom/Sec/WICKRAMARATHNA H.K.N..jpeg';
import jayasundara from '../assets/images/jxcom/Technical/JAYASUNDARA J.A.D.T.D.W.jpeg';
import probathSanjeewa from '../assets/images/jxcom/Technical/LIYANAGE P.S.jpg';
import sayuruMalshan from '../assets/images/jxcom/Technical/MALSHAN K.K.S.jpg';
import nayanaNeranjana from '../assets/images/jxcom/Technical/Nayana JAYAWICKRAMA.jpg';
import theekshanaPeiris from '../assets/images/jxcom/Technical/nilesh theekshana.jpg';
import chirathChalana from '../assets/images/jxcom/Technical/PIYUMIKA W.C.C.jpg';
import makiliniThelvarasa from '../assets/images/jxcom/Technical/T. Makilini.jpg';
import ashaJaneshwari from '../assets/images/jxcom/WIF/Asha Janeshwari.jpg';
import balasooriyaAvindi from '../assets/images/jxcom/WIF/B.L.A.R. Balasooriya.jpg';
import geekiyanageDevindi from '../assets/images/jxcom/WIF/JAYAWEERA G.D.U.jpeg';
import kanishkaRatnakumar from '../assets/images/jxcom/WIF/K. Ratnakumar.jpg';
import galabodageThakshila from '../assets/images/jxcom/WIF/Nawodya Galabodage.jpg';
import himaliThennakoon from '../assets/images/jxcom/WIF/THENNAKOON T.M.T.G.H.M..jpeg';

// Event Images
import devCampImg1 from '../assets/images/Events/E1-1.jpg';
import devCampImg2 from '../assets/images/Events/E1-2.jpg';
import devCampImg3 from '../assets/images/Events/E1-3.jpg';
import devCampImg4 from '../assets/images/Events/E1-4.jpg';
import devCampImg5 from '../assets/images/Events/E1-5.jpg';
import githubWorkshopImg1 from '../assets/images/Events/E2-1.jpg';
import githubWorkshopImg2 from '../assets/images/Events/E2-2.jpg';
import githubWorkshopImg3 from '../assets/images/Events/E2-3.jpg';
import githubWorkshopImg4 from '../assets/images/Events/E2-4.jpg';
import githubWorkshopImg5 from '../assets/images/Events/E2-5.jpg';


// --- DATA ARRAYS (with `export` keyword and corrected variables) ---

export const executiveCommittee = [
  { name: 'Sachindu Kavishka', role: 'Club Lead', img: sachinduKavishka },
  { name: 'Wasana Nilakshi', role: 'Secretary', img: wasanaNilakshi },
  { name: 'Rashmi Ruwanthika', role: 'Assistant Secretary', img: rashmiRuwanthika },
  { name: 'Raees Ahamed', role: 'Treasurer', img: raeesAhamed },
  { name: 'Tharindu Devinda', role: 'Assistant Treasurer', img: tharinduDevinda },
  { name: 'Isuri Manodya', role: 'Public Relations Lead', img: isuriManodya },
  { name: 'Bhagya Lakshan', role: 'Marketing & Publicity Lead', img: bhagyaLakshan },
  { name: 'Kasun Janith Bandara', role: 'Event Coordinator', img: kasunJahith },
  { name: 'Kavinda Chamod', role: 'Membership & Recruit Lead', img: kavindaChamod },
  { name: 'Chamodya Perera', role: 'Membership & Recruit Lead', img: chamodyaPerera },
  { name: 'Kisho Jeyapragash', role: 'Technical Manager', img: kishoJeyapragash },
  { name: 'Thinuja Hettiarachchi', role: 'Technical Manager', img: thinujaHettiarachchi },
  { name: 'Misal Ranasinghe', role: 'Design Lead', img: misalRanasinghe },
  { name: 'Nilakshan Raveendran', role: 'Design Lead', img: nilakshanRaveendran },
  { name: 'Hasini Vimandya', role: 'Design Lead - WIF', img: hasiniVimandya },
];

export const juniorTechnicalTeam = [
    { name: 'Makilini Thelvarasa', img: makiliniThelvarasa },
    { name: 'Sayuru Malshan', img: sayuruMalshan },
    { name: 'J.A.D.T.D.W Jayasundara', img: jayasundara },
    { name: 'Nilesh Theekshana Peiris', img: theekshanaPeiris },
    { name: 'Probath Sanjeewa Liyanage', img: probathSanjeewa },
    { name: 'Neranjana Jayawickrama', img: nayanaNeranjana },
    { name: 'Chirath Chalana Piyumika', img: chirathChalana },
];

export const juniorMarketingTeam = [
    { name: 'Kirushika Thavanesan', img: kirushikaThavanesan },
    { name: 'Binushi Nayanathara', img: binushiNayanathara },
];

export const juniorEventCoordinatorTeam = [
    { name: 'Inuka Kavinda', img: inukaKavinda },
    { name: 'Ayeshika Jayawardhana', img: sanduniAyeshika },
    { name: 'Ramesha Deshan', img: rameshaDeshan },
    { name: 'Chathuri Dhananjana', img: chathuriDhananjana },
    { name: 'Thanarajan Vidhushika', img: thanarajanVidhushika },
];

export const juniorSecretaryTeam = [
    { name: 'Nimmani Wickramarathna', img: nimmaniWickramarathna },
    { name: 'Sureshkumar Nogini', img: sureshkumarNogini },
    { name: 'Ajmal Khan Afrin Jeehan', img: ajmalKhanAfrin },
];

export const juniorDesignTeam = [
    { name: 'Mohamed Sajith Nuski', img: sajithNuski },
    { name: 'Sasindu Sandeepa', img: sasinduSandeepa },
    { name: 'Fathima Nuha Nazardeen', img: fathimaNuha },
    { name: 'Kavisana Kanthavanesan', img: kavisanaKanthavanesan },
    { name: 'Quintus Jonath', img: quintusJonath },
];

export const wifCoreTeam = [
    { name: 'Rashara Balasooriya', img: balasooriyaAvindi },
    { name: 'Uthpala Jayaweera', img: geekiyanageDevindi },
    { name: 'Kanishka Ratnakumar', img: kanishkaRatnakumar },
    { name: 'Nawodya Galabodage', img: galabodageThakshila },
    { name: 'Maheshika Thennakoon', img: himaliThennakoon },
    { name: 'Asha Janeshwari', img: ashaJaneshwari },
];

export const testimonials = [
    { quote: "In the FOSS community, I found more than skills. I found support, purpose, and people who truly care.", name: 'Sachindu Kavishka', role: '3rd Year, Computer Science', img: sachinduKavishka },
    { quote: "The FOSS community is where freedom meets code, and strangers become collaborators. It’s not just about software. it’s about shaping the future, together.", name: 'Kisho Jeyapragash', role: '3rd Year, IIT', img: kishoJeyapragash },
    { quote: "I think the FOSS community feels like a global team with a shared dream open, accessible technology for all.", name: 'Rashmi Ruwanthika', role: '3rd Year, Computer Science', img: rashmiRuwanthika },
];

export const updates = [
    { 
        date: 'October 26, 2024', 
        title: 'DevCamp Coding Bootcamp', 
        desc: 'Students engaged in workshops, coding challenges, and team projects to strengthen their development skills.',
        coverImage: devCampImg1,
        buttonText: 'Explore DevCamp',
        details: "The FOSS Community at Uva Wellassa University recently hosted DevCamp, an event designed to help students strengthen their coding skills through practical experience and collaboration.\n\nThroughout the camp, students engaged in interactive workshops, coding challenges, and team-based projects. They explored real-world development practices and learned how to work effectively in groups.\n\nDevCamp was a great chance for students to discover new tools, learn from mentors, and build confidence in software development. We appreciate everyone who participated and contributed to the success of this event. Stay connected with FOSS UWU for more learning opportunities ahead!",
        gallery: [devCampImg1, devCampImg2, devCampImg3, devCampImg4, devCampImg5]
    },
    { 
        date: 'October 15, 2024', 
        title: 'GitHub Essentials Workshop', 
        desc: 'A beginner-friendly session covering Git, repositories, commits, and pull requests for open-source collaboration.',
        coverImage: githubWorkshopImg1,
        buttonText: 'Workshop Details',
        details: "The FOSS Community of Uva Wellassa University recently organized a GitHub Essentials Workshop to help students understand the basics of version control and open-source collaboration.\n\nThis beginner-friendly session covered important topics such as Git, GitHub, creating repositories, making commits, and working with pull requests. A live demo helped participants follow along and try things themselves.\n\nThe workshop was a great starting point for students who are new to GitHub. Everyone gained valuable knowledge and confidence to begin their open-source journey.",
        gallery: [githubWorkshopImg1, githubWorkshopImg2, githubWorkshopImg3, githubWorkshopImg4, githubWorkshopImg5]
    },
];

export const events = [
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
        img: 'https://images.unsplash.com/photo-1678453147378-b5454555b6a7?auto=format&fit=crop&w=800&q=80'
    },
    { 
        title: 'React Hands-on Workshop', 
        date: 'December 10, 2023', 
        time: '1:00 PM - 3:00 PM',
        location: 'Computer Lab 01',
        desc: 'A hands-on workshop for aspiring web developers using React.',
        img: 'https://images.unsplash.com/photo-1555066931-4365d1469cbe?auto=format&fit=crop&w=800&q=80'
    },
];

export const blogPosts = [
    { slug: 'mastering-git-and-github', title: 'Mastering Git & GitHub', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=60', category: 'Tutorial', excerpt: 'A beginner\'s guide to version control that every developer needs.', authorName: 'Asiri Weerasinghe', authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80' },
    { slug: 'why-you-should-learn-linux', title: 'Why You Should Learn Linux', img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=60', category: 'DevOps', excerpt: 'Unlock the power of the command line and understand the backbone of the internet.', authorName: 'Chandima Jayawardana', authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80' },
    { slug: 'intro-to-modern-web-dev', title: 'Intro to Modern Web Dev', img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=60', category: 'Community', excerpt: 'A look into the React ecosystem and a recap of our latest workshop.', authorName: 'Raees Ahamed', authorImg: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=100&q=80' },
];

export const focusAreas = [
    { name: 'Software Freedom', icon: 'key', desc: 'Promoting the use and development of software that respects user freedom.' },
    { name: 'Community Collaboration', icon: 'users', desc: 'Building a strong, inclusive community where members can collaborate and grow together.' },
    { name: 'Open Source Development', icon: 'code', desc: 'Actively contributing to and maintaining impactful open source projects.' },
    { name: 'Knowledge Sharing', icon: 'bookOpen', desc: 'Organizing workshops, talks, and mentorship to share expertise and skills.' },
    { name: 'Security & Privacy', icon: 'shieldCheck', desc: 'Advocating for secure coding practices and the use of privacy-respecting software.' },
    { name: 'Innovation & Experimentation', icon: 'sparkles', desc: 'Providing a playground for members to experiment with new ideas and cutting-edge technologies.' },
];

// --- ADD THIS NEW BLOCK AT THE BOTTOM of homePageData.js ---

// For the dedicated Gallery Page
export const galleryImages = [
  { src: devCampImg1, alt: 'Mentor helping students at DevCamp', event: 'DevCamp 2024', category: 'DevCamp' },
  { src: devCampImg2, alt: 'Students working at DevCamp', event: 'DevCamp 2024', category: 'DevCamp' },
  { src: devCampImg3, alt: 'A team collaborating at DevCamp', event: 'DevCamp 2024', category: 'DevCamp' },
  { src: devCampImg4, alt: 'A student presenting at DevCamp', event: 'DevCamp 2024', category: 'DevCamp' },
  { src: devCampImg5, alt: 'Networking at DevCamp', event: 'DevCamp 2024', category: 'DevCamp' },
  { src: githubWorkshopImg1, alt: 'Students listening at GitHub workshop', event: 'GitHub Workshop', category: 'GitHub Workshop' },
  { src: githubWorkshopImg2, alt: 'Close up of code at GitHub workshop', event: 'GitHub Workshop', category: 'GitHub Workshop' },
  { src: githubWorkshopImg3, alt: 'Group photo at GitHub workshop', event: 'GitHub Workshop', category: 'GitHub Workshop' },
  { src: githubWorkshopImg4, alt: 'Q&A session at GitHub workshop', event: 'GitHub Workshop', category: 'GitHub Workshop' },
  { src: githubWorkshopImg5, alt: 'Hands-on practice at GitHub workshop', event: 'GitHub Workshop', category: 'GitHub Workshop' },
];