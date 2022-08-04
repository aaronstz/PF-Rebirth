import { Link } from "react-router-dom";
import logo from "../Assets/logoLanding.png";
import cat from "../Assets/catTeam.png";
import dog from "../Assets/dogTeam.png";
import "./LandingPage.css";
import "../index.css";
//import Container from "react-bootstrap/esm/Container";

export default function LandingPage() {

  return (
    <div className="containerLand">
      <div className="logo-ld">
        <img src={logo} alt="Rebirth" />
      </div>
      <div className="title-ld">
        <h2>A NEW LIFE OPPORTUNITY </h2>
      </div>
      <div className="pet-ld">
        <div className="wrapperLeftLand">
          <Link to="/home?type=dog">
            {localStorage.setItem("type", JSON.stringify("dog"))}
            <img src={dog} alt="Dog Team" />
          </Link>
        </div>
        <div className="wrapperRightLand">
          <Link to="/home?type=cat">
          {localStorage.setItem("type", JSON.stringify("cat"))}
            <img src={cat} alt="Cat Team" />
          </Link>
        </div>
      </div>
      <div className="sub-ld">
        <h3>PLEASE CHOOSE YOUR TEAM</h3>
      </div>
      <div className="Loginfooter">Copyright &copy; 2022 &mdash; Team 13</div>
    </div>
  );
}
