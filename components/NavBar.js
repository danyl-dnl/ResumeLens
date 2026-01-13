// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-sm">
      <div className="text-xl font-bold text-blue-600">ResumeAI</div>
      <div className="space-x-6 text-gray-600 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/upload" className="hover:text-blue-600">Upload</Link>
      </div>
    </nav>
  );
}