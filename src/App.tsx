import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

console.log('App component loaded');

const App: React.FC = () => {
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