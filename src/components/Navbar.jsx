import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-yellow-400 text-black px-2 py-1 rounded font-bold text-lg">
              IMDb
            </div>
          </Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-white hover:text-yellow-400 transition-colors">
              Movies
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 pb-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="block text-white hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
