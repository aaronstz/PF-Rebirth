import React from "react";
import DashNavBar from "../Dashboard/Components/Dash-NavBar/Dash-NavBar";
import DashUsers from "../Dashboard/Components/Users/Users";
// import FormAdoption from "../Dashboard/Components/MyAdoptions/Components/FormAdoption/FormAdoption";
//import Feedback from "../Dashboard/Components/MyAdoptions/Components/Feedback/Feedback";
// import MyAdoption from "../Dashboard/Components/MyAdoptions/Components/MyAdoption/MyAdoption";
// import DashFavorites from "../Dashboard/Components/MyFavorites/DashFavorites";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <DashNavBar />
      <div className="DashcontainerMain">
        {/* <FormAdoption /> */}
        <DashUsers />
        {/* <MyAdoption /> */}
        {/* <DashFavorites /> */}
        {/* <Feedback /> */}
      </div>
    </>
  );
}

export default Dashboard;
