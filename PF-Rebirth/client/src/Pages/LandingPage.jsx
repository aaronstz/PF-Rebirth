import { useNavigate } from "react-router-dom";
import logo from "../Assets/logoLanding.png";
import cat from "../Assets/catTeam.png";
import dog from "../Assets/dogTeam.png";
import "./LandingPage.css";
import "../index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleChooseSection(e) {
    e.preventDefault();
    if (e.target.id === "dogTeam") {
      localStorage.setItem("type", JSON.stringify("dog"));
      navigate("/home");
    } else if (e.target.id === "catTeam") {
      localStorage.setItem("type", JSON.stringify("cat"));
      navigate("/home");
    }
  }

  return (
    <div className="containerLand">
      <div className="logo-ld">
        <img src={logo} alt="Rebirth" />
      </div>
      <div className="title-ld">
        <h2>A NEW LIFE OPPORTUNITY </h2>
      </div>
      <div className="pet-ld">
        <button
          className="wrapperLeftLand"
          onClick={(e) => handleChooseSection(e)}
        >
          <img
            className="centerBtonImg"
            src={dog}
            alt="Dog Team"
            id="dogTeam"
          />
        </button>
        <button
          className="wrapperRightLand"
          onClick={(e) => handleChooseSection(e)}
        >
          <img
            className="centerBtonImg"
            src={cat}
            alt="Cat Team"
            id="catTeam"
          />
        </button>
      </div>
      <div className="sub-ld">
        <h3>PLEASE CHOOSE YOUR TEAM</h3>
      </div>
      <div className="Loginfooter">Copyright &copy; 2022 &mdash; Team 13</div>
    </div>
  );
}
