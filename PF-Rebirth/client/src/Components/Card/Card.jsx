import "./Card.css";
import foto from "../../Assets/fotoPet1.png";
function Cards() {
  return (
    <div className="lcard">
      <div className="btnFav"></div>
      <img src={foto} alt="foto" />
      <div className="txtCont">
        <div className="txtLeft">
          <div className="title">Lolita</div>
          <div className="breed">Border Collie</div>
          <div className="age">2 years</div>
          <div className="location">Buenos Aires</div>
        </div>
        <div className="txtRight">
          <div className="views">
            Views
            <span className="icoEye"></span>
          </div>
          <div className="sex">
            Female
            <span className="icoSex"></span>
          </div>
          <div className="size">
            Small
            <span className="icoSize"></span>
          </div>
          <div className="weigth">
            3.4 kg
            <span className="icoWeigth"></span>
          </div>
        </div>
        <div className="attributes">PLAYFUL, FRIENDLY, OBEDIENT, LOVELY</div>
      </div>
      <div className="lbutton">Adopt me!</div>
    </div>
  );
}

export default Cards;
