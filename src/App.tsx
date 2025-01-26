import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <main className="relative">
      <Hero />
    </main>
  </div>
);

export default App;