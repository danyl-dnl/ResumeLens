"use client";
import { useState } from 'react';
import Navbar from '@/components/NavBar';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection via button
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Drag & Drop Logic
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Upload your Resume (PDF)</h2>
        
        <div 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-100' : 'border-blue-300 bg-blue-50'
          }`}
        >
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange}
            className="hidden" 
            id="fileInput"
          />
          <label 
            htmlFor="fileInput" 
            className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Select PDF
          </label>
          <p className="mt-4 text-gray-500 text-sm">
            {isDragging ? "Release to drop!" : "Or drag and drop PDF here"}
          </p>
        </div>

        {/* Selected file preview */}
        {file && (
          <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex justify-between items-center">
            <span>Selected: <strong>{file.name}</strong></span>
            <button onClick={() => setFile(null)} className="text-sm underline">Remove</button>
          </div>
        )}

        <button 
          disabled={!file}
          className={`w-full mt-6 py-3 rounded-lg font-bold text-white transition
            ${file ? 'bg-blue-600 hover:bg-blue-700 shadow-lg' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Analyze Resume 🚀
        </button>
      </div>
    </div>
  );
}