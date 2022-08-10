import React from "react";
import "sweetalert2/dist/sweetalert2.css";
import "./MyAdoption.css";
import image from "../../../../../Assets/fotoPet1.png";

const MyAdoption = () => {
  // let dogName = "Lolita";

  return (
    <div className="DashcontainerMain">
      <div className="mainDashCont">
        <div className="conTituloAdop">
          <h3>My Adoptions</h3>
        </div>
        <div className="AdoptaContainer">
          <div className="AdoptaRow">
            <div className="AdoptacardLeftPhoto">
              <div class="imgAdopt">
                <img src={image} alt="Pet" className="img" />
              </div>
            </div>
            <div className="AdoptacardLeft">
              <span>Lolita</span>
              <span>Border collie</span>
              <span>3&nbsp;years</span>
              <span>Mexico City</span>
            </div>
            <div className="AdoptacardCenter">
              <span>Female</span>
              <span>Medium</span>
              <span>3.4&nbsp;KG</span>
            </div>
            <div className="AdoptacardRight">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem
              </span>
            </div>
          </div>
          <div className="AdoptaRow">
            <div className="AdoptacardLeftPhoto">
              <div class="imgAdopt">
                <img src={image} alt="Pet" className="img" />
              </div>
            </div>
            <div className="AdoptacardLeft">
              <span>Lolita</span>
              <span>Border collie</span>
              <span>3&nbsp;years</span>
              <span>Mexico City</span>
            </div>
            <div className="AdoptacardCenter">
              <span>Female</span>
              <span>Medium</span>
              <span>3.4&nbsp;KG</span>
            </div>
            <div className="AdoptacardRight">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdoption;
