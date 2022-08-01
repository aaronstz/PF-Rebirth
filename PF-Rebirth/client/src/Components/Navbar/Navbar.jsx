import "../Navbar/Navbar.css";
import React from "react";
import logo from "../../Assets/Navbar/logo.png";
import es from "../../Assets/Navbar/ES.png";
import vector from "../../Assets/Navbar/Vector.png";
import vector2 from "../../Assets/Navbar/Vector-2.png";
import vector3 from "../../Assets/Navbar/Vector-3.png";
import DarkMode from "../../Components/Switch/SwitchMode";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Navbar() {

  let user = null;
  let userImage = null;
  const navigate = useNavigate()

  if(localStorage.length !== 0){
    const userJson = localStorage.getItem("user");
    user = JSON.parse(userJson);
  }

  let theme = localStorage.getItem("theme")
  
  const logOut = (e) => {
    e.preventDefault();
    swal({
      title: "You are about to logout",
      text: "Are you sure wanna go out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("See you around!", {
          icon: "success",
        })
      } 
      navigate("/home")
    });
    localStorage.clear();
    localStorage.setItem("theme", theme)

  }

  if(user !== null ) userImage = user.googleId ? user.imageUrl : user.userToken.imageUrl;

  let imgProfileSrc = user!==null ? userImage : vector ;
  let classProfileImage = user!==null ? "googleImg" : "profile";

  return (
    <div className="containerNavbar">
      <NavLink to={"/home"} className="link-navbar">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="iconsContainer">
        <div className="item">
          <img src={vector3} alt="vector3" className="icons" />
          <NavLink to={user!== null ? "/create" : "/login"} className="link-navbar">
            <span>New Pet</span>
          </NavLink>
        </div>
        <div className="item">
          <img src={vector2} alt="vector2" className="icons" />
          <NavLink to={user!== null ? "/favorites" : "/login"} className="link-navbar">
            <span>My favorites</span>
          </NavLink>
        </div>
        <div className="item">
          <DarkMode />
        </div>
        <div className="item">
          <span>ES</span>
          <img src={es} alt="vector" className="bandera" />
        </div>
        {
          user!==null ? 
          <a href="/home" onClick={(e) => logOut(e)} className="link-navbar">LOG OUT</a> : 
          <NavLink to={"/login"} className="link-navbar">
            <span>LOG IN</span>
          </NavLink>
        }
          <NavLink to={user!== null ? "/profile" : "/login"} className={classProfileImage}>
            <div className={classProfileImage}>
              <img src={imgProfileSrc} alt="vector" id="imgProfile"/>
            </div>
          </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
