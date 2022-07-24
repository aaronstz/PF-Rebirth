import React from 'react';
import usuarioAvatar from '../../Assets/Testimoniales/usuarioAvatar.png';
import usuarioAvatar2 from '../../Assets/Testimoniales/usuarioAvatar2.png';
import './Testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import star from '../../Assets/Testimoniales/Star.png';
import profile2 from '../../Assets/Testimoniales/profile2.webp';

function IndividualIntervalsExample() {
  return (
    <div className='carousel2'>
    <Carousel className='containerItems'>
      <Carousel.Item className='testimonial-item'>
        <div className='testimonial-photo'>
          <img
            className="testimonial-profile"
            src={usuarioAvatar}
            alt="First slide"
           />
        </div>
        <Carousel.Caption className='infoTestimonial'>
         <div>
          <h3>Federico Guzman Lopez</h3>
          <p className='paragraph'>El proceso de adopción de mi mascota con Rebirth fue super sencillo, Lolita es justo como la mostraban en las imagenes y la comunicación con el dueño anterior fue bastante agil. El diseño de la página es muy funcional, los menús superiores e inferiores tienen la información presisca para localizar perfectamente lo que está buscando y el poder elegir desde un inicio entre perro o gato hace muy amigable la página.</p>
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
      <Carousel.Item className='testimonial-item' >
        <div className='testimonial-photo'>
        <img
          className="testimonial-profile"
          src={profile2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption className='infoTestimonial'>
        <div>
          <h3>Fatima Moreira de Melo</h3>
          <p className='paragraph'>Realmente Rebirth es una plataforma que ayuda muchisimo al momento de escoger la mascota que queria adoptar, si fuese por mi adoptaria a todos los animalitos de la plataforma, me encantaron todos. Algunas otras veces nuestro adoptado tiene conductas que no comprendemos o pasa por un período de adaptación en el cual necesitamos ayuda y en Rebirth cuentan con el etólogo adecuado para darnos la guía necesaria y consejos para superar este tipo de problemas.</p>
          <div>
          </div>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='testimonial-item'>
      <div className='testimonial-photo'>
        <img
          className="testimonial-profile"
          src={usuarioAvatar2}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption className='infoTestimonial'>
        <div>
          <h3>Carlos Bermudes Espinoza</h3>
          <p>
            Rebirth ofrece todo esto a solo un clic de distancia, y nos da la oportunidad desde la entrada a elegir entre los dos principales tipos de mascotas que existen en nuestros hogares, perros o gatos. Además ofrecen orientación veterinaria en determinadas categorías, por ejemplo, si eres padre primerizo de un perro o gatito puedes encontrar aquí la guía que necesitas para aprender a atender adecuadamente al nuevo integrante de la familia.
          </p>
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
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;