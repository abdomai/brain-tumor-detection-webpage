
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UploadSection from '../components/UploadSection';
import Results from '../components/Results';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index = () => {
  const [results, setResults] = useState<any>(null);
  
  const handleResultsReceived = (data: any) => {
    setResults(data);
    // Scroll to results section
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('results')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  
  const handleReset = () => {
    setResults(null);
    // Scroll to upload section
    window.scrollTo({
      top: document.getElementById('upload')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <UploadSection onResultsReceived={handleResultsReceived} />
      <div id="results">
        <Results results={results} onReset={handleReset} />
      </div>
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
