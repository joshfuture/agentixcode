import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  useEffect(() => {
    console.log('Navbar component mounted');
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 py-4 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-pulse"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AgentixCode
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden p-3 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">Menu</span>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden fixed left-0 right-0 top-[73px] transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-gray-900 shadow-lg border-t border-gray-800">
            <div className="container mx-auto py-4 px-4">
              <div className="flex flex-col space-y-2">
                <a 
                  href="#services" 
                  className="text-lg font-medium px-6 py-4 hover:bg-gray-800 rounded-lg transition-all hover:pl-8"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="text-lg font-medium px-6 py-4 hover:bg-gray-800 rounded-lg transition-all hover:pl-8"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a 
                  href="#portfolio" 
                  className="text-lg font-medium px-6 py-4 hover:bg-gray-800 rounded-lg transition-all hover:pl-8"
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium px-6 py-4 hover:bg-gray-800 rounded-lg transition-all hover:pl-8"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;