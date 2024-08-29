import React from 'react';
import './Carousel.css'; // Import the custom CSS file

const slides = [
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/400x200"
];

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
