import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/Actions/index.js';
import './MercadoPago.css';

export default function DonationsForPet({id}) {

    const dispatch = useDispatch();

    const {
        description, image, name,
    } = useSelector(state => state.detail)

    useEffect(()=> {
        if(id) dispatch(getDetails(id))
    }, [dispatch, id])

    return (
            !id ? 
            <>
                <div>
                    <h1 className="titleDonations">They need your help!</h1>
                </div>
                <div className="textDonation">
                    <h5>Protect them, because its survival is in our hands. A small donation of $10 will feed a pet for seven days.</h5>
                </div>
                <div className="textDonation">
                    <h5>When you make a gift, you will instantly receive an email with the profile of the pets whose lives are being transformed by our programs</h5>
                </div>
            </> :
            <div className='petDonationsContainer'>
                <div>
                    <h1 className="titleDonations">{name?.toUpperCase()} appreciates your help!</h1>
                </div>
                <img src={image} alt="imgPetProfile" className='imgPetProfile'/>
                <div className="textDonation">
                    <h5>{description}</h5>
                </div>
                <div className="textDonation">
                    <h5>When you make a gift, you will instantly receive an email with the profile of the pets whose lives are being transformed by our programs</h5>
                </div>
            </div>
    )
}
