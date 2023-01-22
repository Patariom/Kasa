//Import tools
import React from 'react'
import { useState } from 'react'

//Import images
import Arrow from '../../assets/forward_arrow.svg'

//Component
function Carousel({ slides }) {
  const pics = slides
  const length = slides.length

  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div className="carousel">
      <div
        className="carousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {pics.map((slide, index) => (
          <img
            className="carousel__slider__pictures"
            key={index}
            src={slide}
            alt=""
          ></img>
        ))}
      </div>
      {length > 1 && (
        <div className="carousel__commands">
          <div className="carousel__commands__arrows">
            <button
              className="carousel__commands__arrows__arrow carousel__commands__arrows__arrow--backward"
              onClick={previousSlide}
            >
              <img src={Arrow} alt="Précédent"></img>
            </button>
            <button
              className="carousel__commands__arrows__arrow"
              onClick={nextSlide}
            >
              <img src={Arrow} alt="Suivant"></img>
            </button>
          </div>
          <p className="carousel__commands__photocount">
            {currentSlide + 1}/{pics.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default Carousel
