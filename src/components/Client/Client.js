import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Client.css'; // Importieren Sie Ihre CSS-Datei für den Slider
import serviceImg1 from '../../img/kam2.jpg';

const logoData = [
  serviceImg1,
  serviceImg1,
  serviceImg1,
  serviceImg1,
  serviceImg1,
  serviceImg1,
  // Fügen Sie hier weitere Logo-URLs hinzu
];

function Client() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setSlideIndex(index);
  };

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1 className="animated-title">Service</h1>
          </div>
        </div>
        <section className="client-section">
          <SwipeableViews
            index={slideIndex}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents // Aktiviert das Ziehen per Maus
          >
            {logoData.map((imageUrl, index) => (
              <div key={index} className="client-slide">
                <img src={imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </SwipeableViews>
        </section>
      </div>
    </section>
  );
}

export default Client;
