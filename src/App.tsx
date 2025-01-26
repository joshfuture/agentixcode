import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  useEffect(() => {
    console.log('App component mounted');
    console.log('Rendering App with:', { Navbar: !!Navbar, Hero: !!Hero });
  }, []);

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