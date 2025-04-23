
import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { analyzeImage } from '../services/api';

interface UploadSectionProps {
  onResultsReceived: (results: any) => void;
}

const UploadSection = ({ onResultsReceived }: UploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  }, [isDragging]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  }, []);

  const handleFileSelected = (selectedFile: File) => {
    // Check if file is an image
    if (!selectedFile.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    
    // Check if file size is less than 5MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      return;
    }

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelected(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    try {
      const results = await analyzeImage(file);
      onResultsReceived(results);
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <section id="upload" className="w-full py-16 px-6 md:px-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-2">Upload Your MRI Scan</h2>
        <p className="text-gray-600 text-center mb-10">
          We'll analyze your scan with care and provide insights quickly
        </p>

        {!file ? (
          <div
            className={`upload-zone ${isDragging ? 'upload-zone-active' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={triggerFileInput}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/*"
              className="hidden"
            />
            
            <div className="w-16 h-16 mb-4 bg-lovable-blue rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lovable-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            
            <h3 className="text-xl font-medium text-gray-700 mb-2">Drop your scan here — we'll handle it with care</h3>
            <p className="text-gray-500 mb-4">Or click to browse your files</p>
            
            <p className="text-sm text-gray-400">
              Supports: JPG, PNG, JPEG • Max size: 5MB
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
              {previewUrl && (
                <img src={previewUrl} alt="Brain MRI preview" className="w-full h-auto" />
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {isAnalyzing ? (
                <div className="px-6 py-3 bg-lovable-gray rounded-lg flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-lovable-teal border-t-transparent animate-spin"></div>
                  <span>We're analyzing your scan with utmost care...</span>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handleAnalyze} 
                    className="px-6 py-3 bg-lovable-teal text-white rounded-lg hover:shadow-lg transition"
                  >
                    Analyze Scan
                  </button>
                  <button 
                    onClick={resetUpload}
                    className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:shadow-lg transition"
                  >
                    Choose Different Image
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default UploadSection;
