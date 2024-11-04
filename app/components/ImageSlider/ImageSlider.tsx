"use client";

import { useState } from 'react';

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: '100%' }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bouton gauche */}
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#9664;
      </button>

      {/* Bouton droit */}
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;