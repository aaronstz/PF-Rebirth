import React from "react";
import CarouselFade from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";
import headerImageTeam from "../../Assets/Header-images/botCat.png";
import headerImageDonation from "../../Assets/Header-images/btnDonate.png";
import "./Header.css";
function Header() {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header-carousel">
          <CarouselFade />
        </div>
        <div className="header-buttons">
          <div className="header-team">
            <NavLink to={"/home"}>
              <img src={headerImageTeam} alt="botonTeam" />
            </NavLink>
          </div>
          <div className="header-donations">
            <NavLink to={"/home"}>
              <img src={headerImageDonation} alt="botonTeam" />
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
