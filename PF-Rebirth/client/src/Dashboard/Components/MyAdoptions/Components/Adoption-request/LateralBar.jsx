import React from "react";
import {Col,Row} from 'react-bootstrap'
import avatar from '../../../../../Assets/botonFAV_active.png'
import mascota from '../../../../../Assets/botonFAV_active.png'
import './LateralBar.css'
export default function LateralBar(){
    let AdoptionRequest=[1,2,3,4]


    
    return(<>

        {AdoptionRequest.map(()=>{
        
        return <div className="container-lateral-bar">
            <div>
            <div className="avatar-pet-lateral-bar">
                <img className="avatar-lateral-bar" src={avatar} alt="" /> 
                <img className="pet-lateral-bar" src={mascota} alt="" />
            </div>
            </div>
            <div className="name-adoption-text-lb">
                <div className="name-lateral-bar"> Juanito</div>
                <div className="adoption-lateral-bar"> Adoption Request <br /> #xxxxxxxxxxxxxxxxxxxxx</div>
            </div>
         </div>
         })
         }
        </>)
}