import React from 'react';
import './DonationsPets.css';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import MercadoPago from '../MercadoPago/MercadoPago';
import Footer from '../Footer/Footer';

export default function DonationsPets() {
  return (
    <section>
        <Navbar/>
        <div className='containerDonations'>
            <div className='leftContainer'>
                <MercadoPago/>
            </div>
            <div className='rightContainer'>
            </div>
        </div>
        <Footer/>
    </section>
  )
}
