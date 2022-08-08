import React from "react";
import DashNavBar from "../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import FormAdoption from "../Dashboard/Components/MyAdoptions/Components/FormAdoption/FormAdoption";
//import Feedback from "../Dashboard/Components/MyAdoptions/Components/Feedback/Feedback";
// import MyAdoption from "../Dashboard/Components/MyAdoptions/Components/MyAdoption/MyAdoption";
// import DashFavorites from "../Dashboard/Components/MyFavorites/DashFavorites";
import "./Dashboard.css";

function Navbar() {
  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        <FormAdoption />
        {/* <MyAdoption /> */}
        {/* <DashFavorites /> */}
        {/* <Feedback /> */}
      </div>
    </>
  );
}

export default Navbar;
