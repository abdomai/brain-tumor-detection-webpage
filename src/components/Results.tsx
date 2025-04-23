
import React from 'react';
import { motion } from 'framer-motion';

interface ResultsProps {
  results: {
    confidence: number;
    prediction: string;
    status: string;
  } | null;
  onReset: () => void;
}

const Results = ({ results, onReset }: ResultsProps) => {
  if (!results) return null;
  
  const isTumorDetected = results.prediction === "Tumor Detected";
  const confidencePercentage = Math.round(results.confidence * 100);
  
  return (
    <motion.section
      className="w-full py-16 px-6 md:px-12 bg-gradient-to-b from-white to-lovable-blue/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">Analysis Results</h2>
        <p className="text-gray-600 text-center mb-10">
          Your scan has been analyzed with care
        </p>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden card-glow"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`w-full h-2 ${isTumorDetected ? 'bg-amber-500' : 'bg-green-500'}`}></div>
          
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Confidence Circle */}
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#F1F0FB"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={isTumorDetected ? '#FDA4AF' : '#86EFAC'}
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - results.confidence)}`}
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000 ease-out"
                  />
                  <text
                    x="50"
                    y="45"
                    textAnchor="middle"
                    fontSize="18"
                    fill="#1A1F2C"
                    fontWeight="bold"
                  >
                    {confidencePercentage}%
                  </text>
                  <text
                    x="50"
                    y="65"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6B7280"
                  >
                    Confidence
                  </text>
                </svg>
                <div className={`absolute inset-0 rounded-full animate-gentle-pulse opacity-20 ${isTumorDetected ? 'bg-red-200' : 'bg-green-200'}`}></div>
              </div>
              
              {/* Result Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Prediction</p>
                  <h3 className={`text-2xl font-bold ${isTumorDetected ? 'text-amber-600' : 'text-green-600'}`}>
                    {results.prediction}
                  </h3>
                </div>
                
                <p className="text-gray-700">
                  {isTumorDetected 
                    ? "⚠️ Our analysis indicates the presence of an anomaly that may be a tumor. Please consult a specialist for a proper diagnosis and next steps." 
                    : "✅ No tumor detected in the provided scan. Continue regular check-ups as recommended by your healthcare provider."}
                </p>

                <div className="pt-4">
                  <button 
                    onClick={onReset} 
                    className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:shadow-lg transition"
                  >
                    Upload New Scan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            This analysis is provided for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Results;
