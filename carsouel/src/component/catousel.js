import React, { useState } from 'react';
import '../component/catousel.css'; // Import your CSS file for styling

const Carousel = ({ images, fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <ul
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <li className="carousel-slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                onError={(e) => (e.target.src = fallbackImage)}
              />
            </li>
          ))}
        </ul>
      </div>
      <button className="carousel-button carousel-button-left" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-button carousel-button-right" onClick={handleNext}>
        &#10095;
      </button>
      <div className="carousel-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;