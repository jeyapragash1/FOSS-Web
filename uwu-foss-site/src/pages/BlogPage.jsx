// src/pages/BlogPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const mockPosts = [
  { slug: 'mastering-git-and-github', title: 'Mastering Git & GitHub', excerpt: "A beginner's guide to version control that every developer needs.", author: 'Sathya Nadella', date: 'October 1, 2024', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=60' },
  { slug: 'why-you-should-learn-linux', title: 'Why You Should Learn Linux', excerpt: 'Unlock the power of the command line and understand the backbone of the internet.', author: 'Sundar Pichai', date: 'September 22, 2024', img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=60' },
  { slug: 'intro-to-modern-web-dev', title: 'Intro to Modern Web Dev', excerpt: 'A look into the React ecosystem and how to build modern web applications.', author: 'Tim Cook', date: 'September 15, 2024', img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=60' },
  { slug: 'getting-started-with-docker', title: 'Getting Started with Docker', excerpt: 'Containerize your applications and streamline your development workflow.', author: 'Elon Musk', date: 'September 5, 2024', img: 'https://images.unsplash.com/photo-1634942537034-15a4b7a73a38?auto=format&fit=crop&w=800&q=60' },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 md:py-32 bg-gray-800 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          From Our Knowledge Base
        </motion.h1>
        <motion.p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Tutorials, event recaps, and insights from the FOSS UWU community.
        </motion.p>
      </header>

      <main className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post, index) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-2xl mb-2 text-white">{post.title}</h3>
                  <p className="text-gray-400 text-base mb-4 flex-grow">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-500">{post.author} · {post.date}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;