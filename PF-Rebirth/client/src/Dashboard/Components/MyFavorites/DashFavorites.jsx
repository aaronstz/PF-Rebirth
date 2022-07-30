import React from "react";
import "./DashFavorites.css";
import image from "../../../Assets/fotoPet1.png";

const DashFavorites = () => {
  return (
    <div className="mainDashCont">
      <div className="conTitulo">
        <h3>My favorite pets</h3>
      </div>
      <div className="favContainer">
        <div className="favcardLeftPhoto">
          <div class="imgFav">
            <div class="a-btnFav"></div>
            <img src={image} alt="Pet" class="img" />
          </div>
        </div>
        <div className="favcardLeft">
          <span>Lolita</span>
          <span>Border collie</span>
          <span>3&nbsp;years</span>
          <span>Mexico City</span>
        </div>
        <div className="favcardCenter">
          <span>Female</span>
          <span>Medium</span>
          <span>3.4&nbsp;KG</span>
        </div>
        <div className="favcardRight">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashFavorites;
