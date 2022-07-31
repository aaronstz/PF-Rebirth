import React from "react";
import "./Accept-Reject.css";
import image from "../../../../../Assets/fotoPet1.png";

const AcceptReject = () => {
  return (
    <div className="mainDashCont">
        <div className="AdoptContainer">
        <div >
          <div class="imgFav">
            <img src={image} alt="Pet" class="img" />
          </div>
        </div>
        <div >
          <span>Lolita</span>
          <br />
          <span>Border collie</span>
          <br />
          <span>3&nbsp;years</span>
          <br />
          <span>Mexico City</span>
        </div>
        <div>
          
          <span>Female</span>
          <br />
          <span>Medium</span>
          <br />
          <span>3.4&nbsp;KG</span>
        </div>
        <div >
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
