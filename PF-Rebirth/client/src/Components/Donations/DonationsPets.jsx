import React from 'react';
import './DonationsPets.css';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import MercadoPago from '../MercadoPago/MercadoPago';
import Footer from '../Footer/Footer';
import { PETS_TESTIMONIALS } from '../../Tools/petsTestimonials.js';

export default function DonationsPets() {
  return (
    <section>
        <Navbar/>
        <div className='containerDonations'>
            <div className='leftContainer'>
                <MercadoPago/>
            </div>
            <div className='rightContainer'/>
        </div>
        <section className='messageDonations'>
            <h1>
                Become that hero today and contribute to the welfare and safety of hundreds of unprotected pets.
            </h1>
        </section>
        <section className='testimonialsDonations'>
            {
                PETS_TESTIMONIALS.map(p => {
                    return(
                        <div key={Math.random()} className="cardPet">
                            <img src={p.image} alt="petImage" className='petImage'/>
                            <h2>{p.fullName}</h2>
                            <div className='commentContainer'>
                                <h5>{p.comments}</h5>
                            </div>
                            {/*  */}
                        </div>
                    )
                })
            }
        </section>
        <Footer/>
    </section>
  )
}
