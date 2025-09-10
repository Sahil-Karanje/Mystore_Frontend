import React, { useState } from 'react'
import './bannerSlider.css'

const BannerImgSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
      <button className="arrow left" onClick={goToPrev}>
        ❮
      </button>
      <button className="arrow right" onClick={goToNext}>
        ❯
      </button>
    </div>
  )
}

export default BannerImgSlider