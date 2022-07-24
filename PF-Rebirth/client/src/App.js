import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import FAQs from "./Pages/FAQs";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
// import About from "./Pages/About";
import Support from "./Pages/Support";
 import Terms from "./Pages/Terms";
 import Privacy from "./Pages/Privacy";
// import NotFound from "./Components/404/404";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path = '/home/:id' element = {<Details/>}/> 
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/login" element={<Login />} />
        <Route path = '/support' element = {<Support/>}/>
        <Route path = '/terms' element = {<Terms/>}/>
        <Route path = '/privacy' element = {<Privacy/>}/>
        {/*

        
          cambiar /details a -> home/:id una vez terminado


          <Route exact path="/" element={<LandingPage />} />
          <Route path = '/about' element = {<About/>}/>
          

          
          
          <Route path = '*' element = {<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
