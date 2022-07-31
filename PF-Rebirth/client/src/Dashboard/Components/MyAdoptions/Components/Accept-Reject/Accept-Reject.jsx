import React from "react";
<<<<<<< HEAD
import "./Accept-Reject.css";
import image from "../../../../../Assets/fotoPet1.png";

const AcceptReject = () => {
  return (
    <div className="mainDashCont">
      <div className="conTitulo">
        <h3>Accept adoption</h3>
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
        <button class="MAdoCancbutton">
          <span>Cancel</span>
        </button>
        <button class="MAdoptbutton">
          <span>Confirm</span>
        </button>
      </div>
    </div>
  );
};

export default AcceptReject;
=======

export default function AcceptReject(){

  return(<>
        <div>
          <div>
              <div> Avatar</div>
              <div>Nombre</div>
              <div>Localidad</div>
              <div>correo</div>
          </div>
          <div>
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
    
    </>)
}
>>>>>>> 4825ea8257cb317fefbdb40bbfed3409c0d697aa
