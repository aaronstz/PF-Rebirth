import React, { useEffect, useState } from "react";
import logo from "../../../Assets/Navbar/logo.png";
import vector from "../../../Assets/Navbar/Vector.png";
import vector2 from "../../../Assets/Navbar/Vector-2.png";
import vector3 from "../../../Assets/Navbar/Vector-3.png";
import vector4 from "../../../Assets/Navbar/icoRequest.png";
import vector5 from "../../../Assets/Navbar/ico-historial.png";
import DarkMode from "../../../Components/Switch/SwitchMode";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Actions/index";

import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./Dash-NavBar.css";

const DashNavBar = () => {
  const navigate = useNavigate();
  let theme = localStorage.getItem("theme");
  const dispatch = useDispatch();

  const logOut = async (e) => {
    e.preventDefault();
    await swal({
      title: "You are about to logout",
      text: "Are you sure wanna go out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("See you around!", {
          icon: "success",
        }).then(() => {
          dispatch(logoutUser());
          navigate("/home");
          window.history.go();
          localStorage.setItem("theme", theme);
        });
      }
    });
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);

  let data = user ? JSON.parse(user) : null;

  return (
    <>
      <div className="DashcontainerNavbar">
        <NavLink to={"/home"} className="Dashlink-navbar">
          <img src={logo} alt="logo" className="Dashlogo" />
        </NavLink>

        <div className="Dashitem">
          <div className="DashiconsContainer">
            <div className="Dashitem">
              { data && (data.isAdmin === true)? 
                <NavLink
                to={data !== null ? "/history" : "/login"}
                className="Dashlink-navbar"
              >
                <img src={vector5} alt="vector3" className="Dashicons" />
                <span>History</span>
              </NavLink> : null
              }
            </div>
            <div className="Dashitem">
              <NavLink
                to={data !== null ? "/request" : "/login"}
                className="Dashlink-navbar"
              >
                <img src={vector4} alt="vector3" className="Dashicons" />
                <span>MessageBoard</span>
              </NavLink>
            </div>
            <div className="Dashitem">
              {data !== null && data.isAdmin ? (
                <NavLink to="/users" className="Dashlink-navbar">
                  <img src={vector} alt="vector3" className="Dashicons" />
                  <span>Users</span>
                </NavLink>
              ) : (
                <NavLink to="/login"></NavLink>
              )}
            </div>
            <div className="Dashitem">
              <NavLink to={"/create"} className="Dashlink-navbar">
                <img src={vector3} alt="vector3" className="Dashicons" />
                <span>New Pet</span>
              </NavLink>
            </div>

            <div className="Dashitem">
              {data && data.isAdmin ? null : (
                <NavLink
                  to={data !== null ? "/favorites" : "/login"}
                  className="Dashlink-navbar"
                >
                  <img src={vector2} alt="vector2" className="Dashicons" />
                  <span>My favorites</span>
                </NavLink>
              )}
            </div>
            <div className="Dashitem">
              <DarkMode />
            </div>
            <NavLink
              to={data !== null ? "/profile" : "/login"}
              className="Dashlink-navbar"
            >
              <span className="DashuserName">{data && data.name}</span>
              <img src={data && data.image} alt="avatar" className="dash-pic" />
            </NavLink>
            <div className="Dashitem">
              <a
                href="/home"
                onClick={(e) => logOut(e)}
                className="link-navbar"
              >
                LOG OUT
              </a>
            </div>
            <div className="Dashitem"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNavBar;
