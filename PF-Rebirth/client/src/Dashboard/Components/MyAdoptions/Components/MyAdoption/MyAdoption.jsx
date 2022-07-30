import React from "react";
import "./MyAdoption.css";
import image from "../../../../../Assets/fotoPet1.png";

const MyAdoption = () => {
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

export default MyAdoption;
