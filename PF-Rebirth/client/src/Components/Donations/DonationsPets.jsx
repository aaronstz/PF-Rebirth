import React from 'react';
import './DonationsPets.css';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import MercadoPago from '../MercadoPago/MercadoPago';
import Footer from '../Footer/Footer';
import { PETS_TESTIMONIALS } from '../../Tools/petsTestimonials.js';
import { useNavigate, useParams } from 'react-router-dom';

export default function DonationsPets() {

    const navigate = useNavigate();
    const user = window.localStorage.getItem("user");
    
    if(!user) navigate("/login")
    let { id } = useParams();

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
            {
                !id ? 
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
                </section> :
                null
            }
            <section className='projectDonations'>
                <div className='leftProjectContainer'>

                </div>
                <div className='rightProjectContainer'>
                    <div className='paragraphContainer'>
                        <h2 className='projectTitle'>A HOME FOR EVERYONE</h2>
                        <p>We can all contribute in different ways. encourage yourself to donate, any contribution 
                            helps us to continue with our mission of helping unprotected and abandoned pets. </p>
                        <p>With our project we will be able to create a shelter for those homeless pets to give them a 
                            temporary home while they manage to find a loving family to belong to.</p>
                        <h5 className='moreInfoProject'>MORE INFO...</h5>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}
