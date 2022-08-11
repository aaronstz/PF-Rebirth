import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import { TESTIMONIALS } from "../../Tools/userTestimonials.js";
import { showStar } from "../../Tools/functions";
import { getTestimonials } from '../../Redux/Actions/index'

export default function Testimonials() {
  const testimonials = useSelector(state => state.testimonials)
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch])

  return (
    <div className="carousel2">
      <Carousel className="containerItems">
        {testimonials.data?.map(
          (e) => {
            return (
              <Carousel.Item className="testimonial-item" key={Math.random()}>
                <div className="testimonial-photo">
                  <img
                    className="testimonial-profile"
                    src={e.imageOfPet}
                  />
                </div>
                <Carousel.Caption className="infoTestimonial">
                  <div>
                    <h3>{e.nameOfPet}</h3>
                    <p className="paragraph">{e.testimonio}</p>
                  </div>
                  <div>
                    <img src={showStar(e.rating)} alt="star" />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          },
          0
        )}
      </Carousel>
    </div>
  );
}
