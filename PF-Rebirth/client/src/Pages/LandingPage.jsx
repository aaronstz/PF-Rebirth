import { Link } from "react-router-dom";
import logo from "../Assets/logoLanding.png";
import cat from "../Assets/catTeam.png";
import dog from "../Assets/dogTeam.png";
import "./LandingPage.css";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function LandingPage() {

  // const [user, setUSer] = useState({
  //   name : "Will",
  //   userName : "willd@gma.com",
  //   img : "adsasdsdfs"
  // });

  return (
    <body>
      <Container>
        <br />
        <br />
        <div className="logo-ld">
          <img src={logo} alt="Rebirth" />
        </div>
        <div className="title-ld">
          <h2>A NEW LIFE OPPORTUNITY </h2>
        </div>
        <div className="pet-ld">
          <Link to="/home?type=dog">
            <img src={dog} alt="Dog Team" />
          </Link>
          <Link to="/home?type=cat">
            <img src={cat} alt="Cat Team" />
          </Link>
        </div>
        <div className="sub-ld">
          <br />
          <h3>PLEASE CHOOSE YOUR TEAM</h3>
        </div>
      </Container>
    </body>
  );
}
