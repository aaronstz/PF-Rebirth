import React, { useEffect, useState } from "react";
import logo from "../../../Assets/Navbar/logo.png";
import avatar from "../../../Assets/Navbar/UserAvatar-signed.png";
import vector2 from "../../../Assets/Navbar/Vector-2.png";
import vector3 from "../../../Assets/Navbar/Vector-3.png";
import vector4 from "../../../Assets/Navbar/icoRequest.png";
import vector5 from "../../../Assets/Navbar/ico-historial.png";
import DarkMode from "../../../Components/Switch/SwitchMode";
import { NavLink } from "react-router-dom";
import "./Dash-NavBar.css";


const DashNavBar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);

  let data = user ? JSON.parse(user) : null;
  console.log(data)
  return (
    <>
      <div className="DashcontainerNavbar">
        <NavLink to={"/home"} className="Dashlink-navbar">
          <img src={logo} alt="logo" className="Dashlogo" />
        </NavLink>

        <div className="DashiconsContainer">
        <div className="Dashitem">
            <NavLink to={data !== null ? "/historial" : "/login"} className="Dashlink-navbar">
              <img src={vector5} alt="vector3" className="Dashicons" />
              <span>Historial</span>
            </NavLink>
          </div>
          <div className="Dashitem">
            <NavLink to={data !== null ? "/request" : "/login"} className="Dashlink-navbar">
              <img src={vector4} alt="vector3" className="Dashicons" />
              <span>MessageBoard</span>
            </NavLink>
          </div>
          <div className="Dashitem">
            <NavLink to={data !== null ? "/create" : "/login"} className="Dashlink-navbar">

              <img src={vector3} alt="vector3" className="Dashicons" />
              <span>USERS</span>
            </NavLink> 
        <div className="DashiconsContainer">
          <div className="Dashitem">
              <NavLink to={"/login"} className="Dashlink-navbar">
                <img src={vector3} alt="vector3" className="Dashicons" />
                <span>New Pet</span>
              </NavLink>
          </div>
          <div className="Dashitem">
            <NavLink to={data !== null ? "/favorites" : "/login"} className="Dashlink-navbar">
              <img src={vector2} alt="vector2" className="Dashicons" />
              <span>My favorites</span>
            </NavLink> 
          </div>
          <div className="Dashitem">
            <DarkMode />
          </div>
          <NavLink to={data !== null ? "/profile" : "/login"} className="Dashlink-navbar">
            <span className="DashuserName">{data && data.name}</span>
            <img src={data&& data.image} alt="avatar" />
          </NavLink>
        </div>
      </div>
      </div></div>
    </>
  );
};

export default DashNavBar;
