import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    direction: 'ltr',
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="content renovation">
            <h2>No.1 Platform for Practising for COding </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Nisi sint porro minima autem eius quis deserunt odio quisquam ex d
              oloribus dolore ratione vel, quasi, unde distinctio! Molestias eos max
              ime nobis.</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="content photography">
            <h2>Photography</h2>
          
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
