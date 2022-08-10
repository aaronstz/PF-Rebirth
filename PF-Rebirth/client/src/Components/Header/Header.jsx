import React from "react";
import CarouselFade from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";
import headerImageTeam from "../../Assets/Header-images/botCat.png";
import headerDogTeam from "../../Assets/Header-images/btonDog.png";
import headerImageDonation from "../../Assets/Header-images/btnDonate.png";
import "./Header.css";

function Header({ filters, setFilters }) {
  const user = window.localStorage.getItem("user");
  const tipo = localStorage.getItem("type");
  let type;

  function handleChangeView(e) {
    e.preventDefault(e);
    if (!tipo) {
      type = "cat";
      localStorage.setItem("type", JSON.stringify(type));
    } else if (e.target.id === "dogTeam") {
      type = "dog";
      localStorage.setItem("type", JSON.stringify(type));
    } else if (e.target.id === "catTeam") {
      type = "cat";
      localStorage.setItem("type", JSON.stringify(type));
    }
    setFilters({
      ...filters,
      page: 0,
      type: [type],
    });
  }

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header-carousel">
          <CarouselFade />
        </div>
        <div className="header-buttons">
          <div className="header-team">
            {filters && filters.type[0] === "cat" ? (
              <button
                type="submit"
                onClick={(e) => handleChangeView(e)}
                className="btn-headerTeam"
              >
                <img
                  className="marginImage"
                  src={headerDogTeam}
                  alt="botonTeam"
                  id="dogTeam"
                />
              </button>
            ) : (
              <button
                type="submit"
                onClick={(e) => handleChangeView(e)}
                className="btn-headerTeam"
              >
                <img
                  className=""
                  src={headerImageTeam}
                  alt="botonTeam"
                  id="catTeam"
                />
              </button>
            )}
          </div>
          <div className="header-donations">
            <NavLink to={user ? "/donations" : "/login"}>
              <img
                className="marginImageRight"
                src={headerImageDonation}
                alt="botonTeam"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
