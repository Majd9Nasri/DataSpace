import React from 'react';
import facebookIcon from '../../img/icons/facebook.svg';
import twitterIcon from '../../img/icons/twitter.svg';
import linkedinIcon from '../../img/icons/linkedin.svg';
import instagramIcon from '../../img/icons/instagram.svg';
import './Contact.css';
const Contact = () => {
  return (
    <>
    <section className="contact-section" id="contact">
      <div className="container">
      <div className="row">
			<div className="contact-img">
				<div className="img-box">
					<div className="section-title">
						<h1>Contact Me</h1>
					</div>
				</div>
			</div>
		</div>
        <div className="row">
          <div className="contact-info">
            <div className="row">
              {/* Address */}
              <div className="info-item">
                <h5>Address</h5>
                <p>Germany, Kiel</p>
              </div>
              {/* Phone */}
              <div className="info-item">
                <h5>Phone</h5>
                <p>+99999999999999</p>
              </div>
              {/* Email */}
              <div className="info-item">
                <h5>Email</h5>
                <p>info@.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="social-links">
            <a href="#" title="facebook">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="#" title="twitter">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="#" title="linkedin">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/feras.nasri/" title="instagram">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
     
    </section>
     <p className="copyright">&copy; 2024 DataSpace</p>
     </>
  );
};

export default Contact;


