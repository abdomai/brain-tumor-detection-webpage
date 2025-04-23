
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: "📷",
    title: "MRI Scan",
    description: "Start with an MRI scan from your healthcare provider."
  },
  {
    icon: "📤",
    title: "Upload",
    description: "Upload your scan to our secure platform."
  },
  {
    icon: "🧠",
    title: "AI Analysis",
    description: "Our AI carefully analyzes the scan for signs of tumors."
  },
  {
    icon: "📊",
    title: "Results",
    description: "Receive a clear analysis with confidence levels and next steps."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-16 px-6 md:px-12 bg-lovable-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">How It Works</h2>
        <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
          Our process combines advanced AI technology with a compassionate approach to help you understand your brain scans
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-lovable-teal"></div>
              
              <div className="text-4xl mb-4">{step.icon}</div>
              
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-lovable-teal opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-lovable-teal group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
