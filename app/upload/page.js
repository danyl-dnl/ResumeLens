// app/upload/page.js
"use client"; // Required for buttons and interactivity

export default function UploadPage() {
  const handleUploadClick = () => {
    alert("Upload button clicked! (Logic coming Day 2)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Upload Your Resume</h1>
      <div className="border-2 border-dashed border-gray-400 p-12 rounded-lg text-center">
        <p className="mb-4 text-gray-600">Drag and drop your PDF here</p>
        <button 
          onClick={handleUploadClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Select File
        </button>
      </div>
    </div>
  );
}