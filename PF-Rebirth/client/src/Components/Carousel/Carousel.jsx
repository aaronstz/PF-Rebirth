import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Header-images/slider-1.png"
          alt="First slide"
          height={"100%"}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Header-images/slider-2.png"
          alt="Second slide"
          height={"100%"}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Header-images/slider-3.png"
          alt="Third slide"
        />
    
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFade;