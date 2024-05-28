import React, { useState } from 'react';

const ClientCarousel = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(currentIndex === 0 ? components.length - 1 : currentIndex - 1);
  };

  const goToNextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(currentIndex === components.length - 1 ? 0 : currentIndex + 1);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      goToPrevSlide(); // Left arrow key
    } else if (e.keyCode === 39) {
      goToNextSlide(); // Right arrow key
    }
  };

  return (
    <div className="relative ">
      <div className="absolute  flex items-center">
        <button onClick={goToPrevSlide} className="px-4 z-50 py-2 bg-black text-white">Prev</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center ">
        <button onClick={goToNextSlide} className="px-4 z-50 py-2 bg-black">Next</button>
      </div>
      <div className="flex justify-start">
        {components.map((component, index) => (
          <div key={index} className={` transition-transform transform gap-10 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
