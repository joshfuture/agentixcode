import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Main.tsx is executing');

const container = document.getElementById('root');
console.log('Root element found:', !!container);
console.log('Root element styles:', container?.style);
console.log('Root element dimensions:', container?.getBoundingClientRect());

if (container) {
  const root = ReactDOM.createRoot(container);
  console.log('React root created');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App rendered');
}