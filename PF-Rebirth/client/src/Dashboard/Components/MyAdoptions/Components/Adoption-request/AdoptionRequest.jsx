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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VistoNotification } from "../../../../../Redux/Actions";

export default function AdoptionRequest() {
  let mail;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoStorage = window.localStorage.getItem("user");
  const user = JSON.parse(infoStorage);
  if (infoStorage) mail = user.mail;
  if (!infoStorage) navigate("/login");
  else dispatch(VistoNotification(mail));

  function SideBar() {
    let Sidebar = document.getElementById("sidebar");
    Sidebar.classList.toggle("hidden-sidebar");
    Sidebar.classList.toggle("hidden-sidebar2");
  }
  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        <div className="testRowCont">
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
        </div>
      </div>
    </>
  );
}
