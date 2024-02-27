import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Home.css';
import Img1 from '../../img/kam.webp';
import Img2 from '../../img/kam2.jpg';

function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
}

function Home() {
  const images = [
    Img1,
    Img2
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="home-section" id="home" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="shape-01"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="home-content">
            <h1 className="animated-heading">Data Space bla bla</h1>
          </div>
        </div>
      </div>
      <Link to="services" smooth={true} className="scroll-down" onClick={() => smoothScroll('#services')}>
        <span className="scroll-down-image"></span>
      </Link>
    </section>

  );
}

export default Home;


