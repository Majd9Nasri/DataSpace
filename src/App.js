import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Client from './components/Client/Client';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const [scrollWidth, setScrollWidth] = useState('0%');

  useEffect(() => {
    // Simulate loading of the page for 100 milliseconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Wait for an additional 1 second and then show the content of the app
    const contentTimer = setTimeout(() => {
      setIsContentReady(true);
    }, 1100);

    // Calculate scroll width based on scroll position
    const updateScrollWidth = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      setScrollWidth(`${(scrollTop / height) * 100}%`);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollWidth);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
      window.removeEventListener('scroll', updateScrollWidth);
    };
  }, []);

  return (
    <div className={`App ${isLoading ? 'loading' : ''}`}>
      {/* Loading screen */}
      <div className={`loading-container ${isLoading ? '' : 'loaded'}`}>
        <div className="loading-spinner"></div>
      </div>

      {/* Inhalt der Seite */}
      {isContentReady && (
        <>
          <div className="scroller" style={{ width: scrollWidth }}></div>
          <Navbar />
          <Home />
          <Service />
          <Team/>
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;