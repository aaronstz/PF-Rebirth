import React from "react"; //warning-> { useEffect }
import MessageBoard from "../MessageBoard/MessageBoard";
import Menu from "../../../../../Assets/Messageboard/menu.svg";
import LateralBar from "./LateralBar";
import "../../../../../Pages/Dashboard.css";
import "./AdoptionRequest.css";
import AcceptReject from "../Accept-Reject/Accept-Reject";
// import { useDispatch, useSelector } from "react-redux"; warning
// import { getChat, getMessage } from "../../../../../Redux/Actions"; warning
import DashNavBar from "../../../Dash-NavBar/Dash-NavBar";
import Footer from "../../../../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function AdoptionRequest() {

  const navigate = useNavigate();
  const user = window.localStorage.getItem("user");
  if(!user) navigate("/login")

  function SideBar() {
    let Sidebar = document.getElementById("sidebar");
    Sidebar.classList.toggle("hidden-sidebar");
    Sidebar.classList.toggle("hidden-sidebar2");
  }
  return (
    <>
     <DashNavBar/>
      <div className="menu-div">
        <img src={Menu} onClick={() => SideBar()} alt="menu" />
      </div>
      <div className="adoption-request">
        <div id="sidebar" className="lateralbar hidden-sidebar2">
          <LateralBar />
        </div>

        <div className="message-accept-reject">
          <div className="messageboard">
            <MessageBoard />
          </div>
          <div className="accept-reject">
            <AcceptReject />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
