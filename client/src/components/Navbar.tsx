import React from 'react';
import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm shadow-gray-400 mb-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Blog Platform
          </Link>
          <Link
            to="/posts/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <PenSquare className="w-4 h-4 mr-2" />
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
}