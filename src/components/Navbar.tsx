import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
            <span className="text-xl font-bold">AgentixCode</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-lg px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-lg px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-lg px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-lg px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;