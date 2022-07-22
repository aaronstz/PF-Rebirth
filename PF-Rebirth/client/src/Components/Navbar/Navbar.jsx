import "../Navbar/Navbar.css";
import React from "react";
import logo from "../../Assets/Navbar/logo.png";
import es from "../../Assets/Navbar/ES.png";
import vector from "../../Assets/Navbar/Vector.png";
import vector1 from "../../Assets/Navbar/Vector-1.png";
import vector2 from "../../Assets/Navbar/Vector-2.png";
import vector3 from "../../Assets/Navbar/Vector-3.png";

function Navbar() {
  return (
    <div className="containerNavbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="iconsContainer">
        <div className="item">
          <img src={vector3} alt="vector3" className="icons" />
          <span>New Pet</span>
        </div>
        <div className="item">
          <img src={vector2} alt="vector2" className="icons" />
          <span>My favorites</span>
        </div>
        <div className="item">
          <img src={vector1} alt="vector1" className="icons" />
          <span>Mode</span>
        </div>
        <div className="item">
          <span>ES</span>
          <img src={es} alt="vector" className="bandera" />
        </div>
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
}

export default Navbar;
