import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;