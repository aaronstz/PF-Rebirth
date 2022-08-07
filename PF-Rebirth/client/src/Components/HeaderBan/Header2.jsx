import React from "react";
// import { useDispatch } from "react-redux";
import CarouselFade from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";
import botBanner from "../../Assets/Header-images/botBanner.png";
import headerImageDonation from "../../Assets/Header-images/btnDonate.png";
import "./Header2.css";
// import { resetDetails, resetPets } from "../../Redux/Actions/index";

function Header2({ type, setPage, current }) {
  const user = window.localStorage.getItem("user");

  // const dispatch = useDispatch();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(resetDetails());
  //   dispatch(resetPets());
  // }

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header-carousel">
          <CarouselFade />
        </div>
        <div className="header-buttons">
          <div className="header-team">
            <button class="btn-headerTeam">
              <img className="marginImage2" src={botBanner} alt="botonTeam" />
            </button>
          </div>
          <div className="header-donations">
            <NavLink to={user ? "/donations" : "/login"}>
              <img src={headerImageDonation} alt="botonTeam" />
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header2;
