import React, { useState } from "react";
import './MercadoPago.css';
import { handleMercadoPago } from '../../Tools/handlers.js';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function MercadoPago() {

  const dispatch = useDispatch();

  const [donacion , setDonacion] = useState({
    donacion : ''
  })

  let { id } = useParams();

  function handleChange(e){
    if(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(Number(e.target.value))){
      setDonacion({
        ...donacion,
        [e.target.name] : Number(e.target.value)
      })
    }
  }

  return(
      <div>
        <div className="donationsContainer">
          <div>

          </div>
          <form onSubmit={(e) => {
            handleMercadoPago(e, donacion, dispatch)
            setDonacion({ donacion : '' })
          }} >
            <div>
              <h1 className="titleDonations">They need your help!</h1>
            </div>
            <div className="textDonation">
              <h5>Protect them, because its survival is in our hands. A small donation of $10 will feed a pet for seven days.</h5>
            </div>
            <div className="textDonation">
              <h5>When you make a gift, you will instantly receive an email with the profile of the pets whose lives are being transformed by our programs</h5>
            </div>
            <div className="incommingDonation" >
            <h5>Ammount of your donation:</h5>
              <input type="text" id="donacion" name="donacion" onChange= {(e) => {handleChange(e)}} value={donacion.donacion}/>
            </div>
            <div className="btnContainer">
              <button type="submit" disabled={donacion.donacion < 1 ? true : false} className="btn btn-primary btnDonations-block"> I WANNA DONATE </button>
            </div>
          </form>
        </div>
      </div>
    )
}
