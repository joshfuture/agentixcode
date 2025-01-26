import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

console.log('App component loaded');

const App: React.FC = () => {
  useEffect(() => {
    console.log('App mounted with dimensions:', {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight
    });
  }, []);

  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="relative">
        <Hero />
      </main>
    </div>
  );
};

export default App;