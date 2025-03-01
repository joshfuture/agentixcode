import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    console.log('Hero component mounted');
    console.log('Hero section dimensions:', {
      element: document.querySelector('section')?.getBoundingClientRect(),
      containerVisible: !!document.querySelector('.container'),
      textVisible: !!document.querySelector('h1')
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0" />
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Transform Your Business with AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence to automate processes, generate leads, and scale your business with our cutting-edge solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;