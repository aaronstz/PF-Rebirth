import "./App.css";
<<<<<<< HEAD
import 'dotenv/config';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
=======
import "dotenv/config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> 83c8eb15cd1df7b6694bec6b8ab02d5f69cbc978
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import FAQs from "./Pages/FAQs";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import About from "./Pages/About";
import Support from "./Pages/Support";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Dashboard from "./Pages/Dashboard";
import AddNew from "./Dashboard/Components/AddNew/AddNew";
import Profile from "./Dashboard/Components/Profile/Profile";
// import NotFound from "./Components/404/404";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Pages/Register";
<<<<<<< HEAD
=======

>>>>>>> 83c8eb15cd1df7b6694bec6b8ab02d5f69cbc978
import DashFavorites from './Dashboard/Components/MyFavorites/DashFavorites.jsx';

import DonationsPets from "./Components/Donations/DonationsPets";
import SW2 from "./Dashboard/Components/MyAdoptions/Components/SweetAlert/SweetAlert";
import AdoptionRequest from "./Dashboard/Components/MyAdoptions/Components/Adoption-request/AdoptionRequest";

function App() {
<<<<<<< HEAD

=======
>>>>>>> 83c8eb15cd1df7b6694bec6b8ab02d5f69cbc978
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Details />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />

        <Route path ='/create' element={<AddNew />} />
        <Route path ='/donations' element={<DonationsPets />} />
        <Route path ='/donations/:id' element={<DonationsPets />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/favorites" element={<DashFavorites/>} />
        <Route path='/request' element={<AdoptionRequest/>} />
        <Route path="/sw" element={<SW2/>} />
        

        {/*

          <Route path = '*' element = {<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
