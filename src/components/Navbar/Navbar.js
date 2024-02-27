import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../img/logo.png';

function Navbar() {
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    setNavOpen(false);

    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="brand-name">
            <img className="logo" src={logo} alt="Logo" />
            <a className="text" href="#home">
              Data Space
            </a>
          </div>
          <div className="nav-toggle" onClick={handleNavToggle}>
            <span></span>
          </div>
          <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="#home" onClick={handleNavLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleNavLinkClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#works" onClick={handleNavLinkClick}>
                  Works
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleNavLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;