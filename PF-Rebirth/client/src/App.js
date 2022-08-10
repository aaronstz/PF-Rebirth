import "./App.css";
import "dotenv/config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import DashFavorites from "./Dashboard/Components/MyFavorites/DashFavorites.jsx";
import DonationsPets from "./Components/Donations/DonationsPets";
import AdoptionRequest from "./Dashboard/Components/MyAdoptions/Components/Adoption-request/AdoptionRequest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashUsers from "./Dashboard/Components/Users/Users.jsx"
import UsersBanned from "./Components/UserBanned/UserBanned.jsx"
import Admins from "./Components/Admins/Admins";
import FormAdoption from "./Dashboard/Components/MyAdoptions/Components/FormAdoption/FormAdoption";
import Feedback from "./Dashboard/Components/MyAdoptions/Components/Feedback/Feedback";
import Testimonials from "./Components/Testimonials/Testimonials";
import HistoryAdmin from "./Components/HistoryAdmin/HistoryAdmin";

function App() {

  const queryClient = new QueryClient({
    defaultOptions :{
        staleTime : Infinity,
        cacheTime : 600000000
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="/adoption/:id" element={<FormAdoption/>}/>
          <Route path="/create" element={<AddNew />} />
          <Route path="/donations" element={<DonationsPets />} />
          <Route path="/donations/:id" element={<DonationsPets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<DashFavorites />} />
          <Route path="/request" element={<AdoptionRequest />} />
          <Route path="/users" element={<DashUsers />} />
          <Route path="/users/banned" element={<UsersBanned />} />
          <Route path="/admin" element={<Admins />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/history" element={<HistoryAdmin />} />
          
          {/*

            <Route path = '*' element = {<NotFound/>}/> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
