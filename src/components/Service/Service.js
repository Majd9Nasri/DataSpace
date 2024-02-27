import React, { useEffect } from 'react';
import './Service.css';
import serviceImg1 from '../../img/kam2.jpg';

function Service() {
  useEffect(() => {
    const serviceTitle = document.querySelector('.animated-title');
    const serviceItems = document.querySelectorAll('.animated-service-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    observer.observe(serviceTitle);
    serviceItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="service-section" id="services">
       
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1 className="animated-title">Service</h1>
          </div>
        </div>
        <div className="row">
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner animated-service-item">
              <img src={serviceImg1} alt="service" />
              <div className="overlay">
                <h4>Machine Learning</h4>
              </div>
            </div>
          </div>
         

          {/* ... Repeat the other service items */}
        </div>
      </div>
    </section>
  );
}

export default Service;
