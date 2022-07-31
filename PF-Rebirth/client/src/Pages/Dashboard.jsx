import React from "react";
import DashNavBar from "../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import AcceptReject from "../Dashboard/Components/MyAdoptions/Components/Accept-Reject/Accept-Reject";
//import MyAdoption from "../Dashboard/Components/MyAdoptions/Components/MyAdoption/MyAdoption";
//import DashFavorites from "../Dashboard/Components/MyFavorites/DashFavorites";
import "./Dashboard.css";

function Navbar() {
  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        {/* <MyAdoption /> */}
        {/* <DashFavorites /> */}
        <AcceptReject />
      </div>
    </>
  );
}

export default Navbar;
