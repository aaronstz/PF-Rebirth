import React, { useState } from "react";
import './MercadoPago.css';
import { handleMercadoPago } from '../../Tools/handlers.js';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import DonationsForPet from "./DonationsForPet";

export default function MercadoPago() {

  const dispatch = useDispatch();
  const [donacion , setDonacion] = useState({
    donacion : ''
  })

  let { id } = useParams();

  function handleChange(e){
    // if(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(Number(e.target.value))){ warning->eliminé dos barras

    if(/^[+]?([0-9]+(?:[.][0-9]*)?|.[0-9]+)$/.test(Number(e.target.value))){
      setDonacion({
        ...donacion,
        [e.target.name] : Number(e.target.value)
      })
    }
  }

  return(
      <div>
        <div className="donationsContainer">
          <form onSubmit={(e) => {
            handleMercadoPago(e, donacion, dispatch)
            setDonacion({ donacion : '' })
          }} >
            <DonationsForPet id={id}/>
            <div className="incommingDonation" >
            <h5>Ammount of your donation:</h5>
              <input autoFocus autoComplete="off" type="text" id="donacion" name="donacion" onChange= {(e) => {handleChange(e)}} value={donacion.donacion} className="form-control"/>
            </div>
            <div className="btnContainer">
              <button type="submit" disabled={donacion.donacion < 1 ? true : false} className="btn btn-primary btnDonations-block"> I WANNA DONATE </button>
            </div>
          </form>
        </div>
      </div>
    )
}
