import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white bg-opacity-80 backdrop-blur-sm sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-purple-400 rounded-lg"></div>
        <h1 className="text-xl font-semibold text-gray-800">Brain Insight</h1>
      </div>
      
      <div className="hidden md:flex gap-8">
        <a href="#upload" className="text-gray-600 hover:text-lovable-teal transition-colors">Upload Scan</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-lovable-teal transition-colors">How It Works</a>
        <a href="#about" className="text-gray-600 hover:text-lovable-teal transition-colors">About</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
