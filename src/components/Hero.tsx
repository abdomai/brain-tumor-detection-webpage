
import React from 'react';
import { motion } from 'framer-motion';
import Brain3D from './Brain3D';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lovable-blue/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <motion.div 
        className="z-10 max-w-lg space-y-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="gradient-text">AI-Powered</span> Brain Tumor Detection
        </h1>
        <p className="text-lg text-gray-700">
          A compassionate, cutting-edge approach to brain tumor detection. 
          Upload your MRI scan and receive insights with care and precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#upload" 
            className="px-6 py-3 bg-lovable-teal text-white rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Upload Scan
          </a>
          <a 
            href="#how-it-works" 
            className="px-6 py-3 bg-white border border-gray-200 text-lovable-dark rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Learn How It Works
          </a>
        </div>
      </motion.div>
      
      {/* 3D Brain */}
      <motion.div
        className="z-10 w-full md:w-1/2 h-[400px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Brain3D />
      </motion.div>
    </div>
  );
};

export default Hero;
