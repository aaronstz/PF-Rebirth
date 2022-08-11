import "../Navbar/Navbar.css";
import React, { useEffect, useState } from "react";
import logo from "../../Assets/Navbar/logo.png";
// import es from "../../Assets/Navbar/ES.png";
import vector from "../../Assets/Navbar/Vector.png";
import vector2 from "../../Assets/Navbar/Vector-2.png";
import vector3 from "../../Assets/Navbar/Vector-3.png";
import vector41 from "../../Assets/Navbar/icoRequest.png"
import vector42 from "../../Assets/Navbar/icoRequest2.png"
import DarkMode from "../../Components/Switch/SwitchMode";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Actions";

function Navbar({ filters, setFilters, notificacion,newNotification }) {
  const activeUser = useSelector((state) => state.activeUser);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const pets = useSelector((store) => store.pets);

  // const types = pets.map((p) => (p.type === "dog" ? "dog" : "cat"));

  if (activeUser) {
    window.localStorage.setItem("user", JSON.stringify(activeUser.userToken));
    window.localStorage.setItem("token", JSON.stringify(activeUser.token));
  }

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);

  let data = user ? JSON.parse(user) : null;
  let theme = localStorage.getItem("theme");
  let imageUrl = data ? data.image : null;
  let imgProfileSrc = imageUrl ? imageUrl : vector;
  let classProfileImage = imageUrl ? "googleImg" : "profile";
  let requestNotification= newNotification? vector42 :vector41;
  function handleReturnToHome(e) {
    navigate("/home");
    localStorage.setItem("type", JSON.stringify(""));
    setFilters &&
      setFilters({
        ...filters,
        type: [],
        page: 0,
      });
  }

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

  return (
    <div className="containerNavbar">
      <button
        onClick={(e) => handleReturnToHome(e)}
        // to={types.length ? "/home?type=" + types[0] : "/home"}
        className="link-navbar"
      >
        <img src={logo} alt="logo" className="logo" id="home" />
      </button>
      <div className="iconsContainer">
      {!data ? null : (
          <div className="item">
            <NavLink to="/request" className="link-navbar"><img src={requestNotification} alt="vector3" className="icons" />Requests: {notificacion}</NavLink>
          </div>
        )}
        <div className="item">
          <img src={vector3} alt="vector3" className="icons" />
          <NavLink
            to={data !== null ? "/create" : "/login"}
            className="link-navbar"
          >
            <span>New Pet</span>
          </NavLink>
        </div>
        {data && data.isAdmin ? null : (
          <div className="item">
            <div>
              <img src={vector2} alt="vector2" className="icons" />
              <NavLink to={data !== null ? "/favorites" : "/login"} className="link-navbar">
                <span>My favorites</span>
              </NavLink>
            </div>
          </div>
        )} 

        <div className="item">
          <DarkMode />
        </div>
        {/* <div className="item">
          <span>ES</span>
          <img src={es} alt="vector" className="bandera" />
        </div> */}
        {data ? (
          <a href="/home" onClick={(e) => logOut(e)} className="link-navbar">
            LOG OUT
          </a>
        ) : (
          <NavLink to={"/login"} className="link-navbar">
            <span>LOG IN</span>
          </NavLink>
        )}
        <NavLink
          to={data !== null ? "/profile" : "/login"}
          className={classProfileImage}
        >
          <div className={classProfileImage}>
            <img src={imgProfileSrc} alt="vector" id="imgProfile" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
