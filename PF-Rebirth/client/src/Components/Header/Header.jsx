import React from "react";
import CarouselFade from "../Carousel/Carousel";
import { NavLink, Link } from "react-router-dom";
import headerImageTeam from "../../Assets/Header-images/botCat.png";
import headerDogTeam from '../../Assets/Header-images/btonDog.png';
import headerImageDonation from "../../Assets/Header-images/btnDonate.png";
import "./Header.css";

function Header({type, pagination, clear}) {

  const user = window.localStorage.getItem("user");
  
  function handleSubmit(e){
    e.preventDefault();
    pagination(1)
    // setPage(1)
  }

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header-carousel">
          <CarouselFade />
        </div>
        <div className="header-buttons">
          <div className="header-team">
              {
                type === 'cat' ?
                <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn-headerTeam">
                <Link to ={'/home?type=dog'} >
                  <img className="marginImage" src={headerDogTeam} alt="botonTeam" />
                </Link>
                </button>
                :
                <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn-headerTeam">

                <Link to ={'/home?type=cat'} >
                  <img src={headerImageTeam} alt="botonTeam" />
                </Link>
                </button>


              }
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

export default Header;
