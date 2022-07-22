import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import headerImageSlider1 from "../../Assets/Header-images/slider-1.png"
import headerImageSlider2 from "../../Assets/Header-images/slider-2.png"
import headerImageSlider3 from "../../Assets/Header-images/slider-3.png"
function CarouselFade() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerImageSlider1}
          alt="First slide"
          height={"100%"}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerImageSlider2}
          alt="Second slide"
          height={"100%"}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerImageSlider3}
          alt="Third slide"
        />
    
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFade;