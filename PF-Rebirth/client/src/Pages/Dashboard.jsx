import React from "react";
import DashNavBar from "../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import DashFavorites from "../Dashboard/Components/MyFavorites/DashFavorites";
import "./Dashboard.css";

function Navbar() {
  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        <DashFavorites />
      </div>
    </>
  );
}

export default Navbar;
