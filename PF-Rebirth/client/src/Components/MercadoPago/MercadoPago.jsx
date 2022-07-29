import React, { useState } from "react";
import mercadopago from "mercadopago";
import { postMercadoPago } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

import swal from "sweetalert";


export default function MercadoPago() {

  const dispatch = useDispatch()

  const [donacion , setDonacion] = useState({
    donacion : 0
  })
  

  function handleChange(e){
    setDonacion({
      ...donacion,
      [e.target.name] : Number(e.target.value)
    })
  }
  console.log('donacion :>> ', donacion);

  const handleMercadoPago = (e) => {
    e.preventDefault()
    swal({
      title: "You are about to donate",
      text: "Are you sure?",
      icon: "info",
      buttons: {
        sure: {
          text: 'Yes',
          value: 'sure'
        },
        cancel: 'Cancel'
      }
    }).then((value) => {
  
      switch (value) {
        case "sure":
        dispatch(postMercadoPago(donacion))
        .then((infoMP) => {
          const {data} = infoMP.data
          window.open(data.init_point);
      })
          break;

        default:
          break;
      }
    });
    };


  return(
      <div>
        <form onSubmit={(e) => handleMercadoPago(e)} >

        <label>Donacion : </label>
        <input type="number" placeholder="Importe deseado" name="donacion" onChange= {e => handleChange(e)} />
        <button type="submit" > Donar </button>
        
        </form>
      </div>
    )


}
