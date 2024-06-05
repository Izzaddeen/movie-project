import React, { useState, useEffect } from 'react';


const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg',
    '/images/slide-4.jpg',
    '/images/slide-5.jpg',
    '/images/slide-6.jpg',
    '/images/slide-7.jpg',
    '/images/slide-7.jpg',
    '/images/slide-8.jpg',
    '/images/slide-9.jpg',
    '/images/slide-10.jpg'
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
