import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import FiltersBar from "../Components/FilterBar/FilterBar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import pic from '../Assets/fotoPet1.png'
import './Details.css'
import female from '../Assets/Female_ico_big.png';
import dogIco from '../Assets/dog_ico_big.png';
import weight from '../Assets/weight_ico_big.png';




function Details() {
  return (
    <div>
      <Container>
        <Navbar/>
        <Header/>
        <br/>
        <div class ="dtl-card">
          <div class ="info">
          <h3 class ="title">Lolita</h3>
          <h4 class = "breed">Border Collie</h4>
          <h5 class ="age">2 years</h5>
          <h6 class ="location">Mexico City</h6>
          <br/>
          </div>
          <div class ="attributes">
          <h5>PLAYFUL, FRIENDLY, 
          <br/>OBEDIENT, LOVELY</h5>
          </div>
          <br/>
          <div class ="story-dtl">
            <h5>Lorem ipsum dolor sit amet,
            <br/>consectetur adipiscing elit.
            <br/>Etiam eu turpis molestie,
            <br/>dictum est a, mattis tellus.
            <br/>Sed dignissim, metus nec
            <br/>fringilla accumsan, risus sem</h5>
          </div>
          <div class ="right-card">
            <h3 class ="disp">AVAILABLE</h3>
            <div class ="txt-description">
            <span >Female</span>
            <img src ={female}/>
            </div>
            <br />
            <div class ="txt-description">
            <span >Medium</span>
              <img src = {dogIco}/>

            </div>
            <br />
            <div>
            <span class ="txt-description-last">3.4kg</span>
              <img src={weight} alt ="weight"/>

            </div>

          </div>
          <div class ="btn-dtl"><button class ="a-btn"><span class ="text">Adopt me!</span></button></div>
        <div class ="img-dtl">
          <div class ="a-btnFav">
          </div>
          <img src = {pic} alt ="Pet" class ="img"/>
        </div>
      </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Details