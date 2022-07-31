import React from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import "./MyAdoption.css";
import image from "../../../../../Assets/fotoPet1.png";
import Swalert from "../SweetAlert/SweetAlert";
import SwalertCancel from "../SweetAlert/SweetAlertCancel";

const MyAdoption = () => {
let dogName='Lolita'




  return (
    <div className="mainDashCont">
      <div className="conTitulo">
        <h3>My Adoptions</h3>
      </div>
      <div className="AdoptContainer">
        <div className="AdoptcardLeftPhoto">
          <div class="imgFav">
            <img src={image} alt="Pet" class="img" />
          </div>
        </div>
        <div className="AdoptcardLeft">
          <span>Lolita</span>
          <span>Border collie</span>
          <span>3&nbsp;years</span>
          <span>Mexico City</span>
        </div>
        <div className="AdoptcardCenter">
          <span>Female</span>
          <span>Medium</span>
          <span>3.4&nbsp;KG</span>
        </div>
        <div className="AdoptcardRight">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem
          </span>
        </div>
      </div>
      <div className="btnRowAdopt">
        <button class="MAdoCancbutton" onClick={()=>SwalertCancel(dogName)}>
          <span>Cancel</span>
        </button>
        <button class="MAdoptbutton" onClick={()=>Swalert(dogName)}>
          <span>Confirm</span>
        </button>
      </div>
    </div>
  );
};

export default MyAdoption;
