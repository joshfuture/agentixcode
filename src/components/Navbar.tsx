import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;