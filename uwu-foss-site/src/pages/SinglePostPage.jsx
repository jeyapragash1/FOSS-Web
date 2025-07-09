// src/pages/SinglePostPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

// In a real app, you would fetch post data based on the slug from an API.
// For now, we'll use a placeholder.
const SinglePostPage = () => {
  const { slug } = useParams(); // Gets the slug from the URL, e.g., "mastering-git-and-github"

  return (
    <div className="bg-gray-900 text-white">
      {/* Post Header with Background Image */}
      <header 
        className="relative h-96 flex items-center justify-center text-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80)` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <motion.div 
          className="relative z-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Mastering Git & GitHub</h1>
          <p className="text-gray-300 mt-4">By Sathya Nadella on October 1, 2024</p>
        </motion.div>
      </header>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-6 py-24 prose prose-invert prose-lg">
        <p>
          Version control is an essential skill for any developer, and Git is the undisputed king. This guide will walk you through the fundamentals, from installing Git to making your first contribution on GitHub.
        </p>
        <h2>What is Git?</h2>
        <p>
          Git is a distributed version control system, which means every developer's working copy of the code is also a repository that can contain the full history of all changes. It's incredibly fast, efficient, and great for both small and very large projects.
        </p>
        <h2>Core Commands You Should Know</h2>
        <ul>
          <li><strong>git init:</strong> Initializes a new Git repository in your current directory.</li>
          <li><strong>git clone [url]:</strong> Creates a local copy of a remote repository.</li>
          <li><strong>git add [file]:</strong> Stages a file, preparing it to be included in the next commit.</li>
          <li><strong>git commit -m "[message]":</strong> Takes the staged content and saves it into the repository's history with a descriptive message.</li>
          <li><strong>git push:</strong> Sends your committed changes to a remote repository, like GitHub.</li>
          <li><strong>git pull:</strong> Fetches and merges changes from the remote repository to your local copy.</li>
        </ul>
        <p>
          By mastering these basic commands, you have a solid foundation for collaborating on any software project. In our next workshop, we'll dive into more advanced topics like branching, merging, and handling conflicts.
        </p>
        <div className="mt-16 text-center">
            <Link to="/blog" className="text-teal-400 font-semibold hover:text-white transition">
                ← Back to All Posts
            </Link>
        </div>
      </article>
    </div>
  );
};

export default SinglePostPage;