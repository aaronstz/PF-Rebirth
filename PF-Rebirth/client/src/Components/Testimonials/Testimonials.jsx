import React from 'react';
import './Testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import star from '../../Assets/Testimoniales/Star.png';
import { TESTIMONIALS } from './constants';

export default function Testimonials() {

  return (
    <div className='carousel2'>
    <Carousel className='containerItems'>
      {
        TESTIMONIALS.map(({imgProfile, fullName, comments, stars}, index) => {
          return(
              <Carousel.Item className='testimonial-item' key={Math.random()}>
                <div className='testimonial-photo'>
                  <img
                    className="testimonial-profile"
                    src={imgProfile}
                    alt={index + " slide"}
                  />
                </div>
                <Carousel.Caption className='infoTestimonial'>
                <div>
                  <h3>{fullName}</h3>
                  <p className='paragraph'>{comments}</p>
                </div>
                <div>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                </div>
                </Carousel.Caption>
              </Carousel.Item>
          )
        }, 0)
      }
    </Carousel>
    </div>
  );
}