import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-purple-400 rounded-lg"></div>
          <h3 className="text-xl font-semibold">Brain Insight</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-purple-400 rounded-lg"></div>
              <h3 className="text-xl font-semibold">Brain Insight</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Using AI to support brain tumor detection with care and precision.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#upload" className="text-gray-300 hover:text-teal-500 transition-colors">Upload Scan</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-teal-500 transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-500 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">Brain Health Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">Education Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">Research Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Medical Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              This tool supports research and awareness. Always consult a licensed medical professional for diagnosis.
              Results should be confirmed by qualified healthcare providers.
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Brain Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
