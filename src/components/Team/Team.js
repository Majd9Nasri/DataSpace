import React, { useEffect } from 'react';
import './Team.css';
import profileImg from '../../img/m.jpg';

function Team() {
  useEffect(() => {
    const teamTitle = document.querySelector('.animated-title');
    const profiles = document.querySelectorAll('.animated-profile');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(teamTitle);
    profiles.forEach((profile) => {
      observer.observe(profile);
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
            <h1 className="animated-titl">Team</h1>
          </div>
        </div>
        <div className="profiles">
          <div className="profile animated-profile">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <h3 className="user-name">Majd Nasri</h3>
            <h5>director</h5>
          </div>
          <div className="profile animated-profile">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <h3 className="user-name">Roman Dietenmeier</h3>
            <h5>director</h5>
          </div>
          <div className="profile animated-profile">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <h3 className="user-name">Ahmed Al-ammari</h3>
            <h5>director</h5>
          </div>
          {/* ... Repeat the other profile items */}
        </div>
      </div>
    </section>
  );
}

export default Team;
