import React from 'react';
import { motion } from 'framer-motion';

const JoinPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full rounded-xl backdrop-blur-md bg-white/5 p-8 shadow-2xl border border-white/10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl font-bold text-white tracking-tight">
            🚀 Join the FOSS UWU Movement
          </h2>
          <p className="mt-3 text-center text-sm text-gray-400">
            Be part of a community shaping the future of open source. Fill in your details and let's build together.
          </p>
        </motion.div>

        <motion.form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="Full Name"
            />
            <input
              name="studentId"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="Student ID (e.g., UWU/CST/20/001)"
            />
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="University Email Address"
            />
            <input
              name="github"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="GitHub Profile URL (Optional)"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] transition-all shadow-lg"
            >
              Submit Membership
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default JoinPage;
