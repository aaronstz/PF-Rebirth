import "./Card.css";
import foto from "../../Assets/fotoPet1.png";




function Cards({image, name, breed, age, gender, size, description}) {
  return (
    <div className="lcard">
      <div className="btnFav"></div>
      <img src={image} alt="foto" />
      <div className="txtCont">
        <div className="txtLeft">
          <div className="title">{name}</div>
          <div className="breed">{breed}</div>
          <div className="age">{age}</div>
          <div className="location">Buenos Aires</div>
        </div>
        <div className="txtRight">
          <div className="views">
            Views
            <span className="icoEye"></span>
          </div>
          <div className="sex">
            {gender}
            <span className="icoSex"></span>
          </div>
          <div className="size">
            {size}
            <span className="icoSize"></span>
          </div>
          <div className="weigth">
            3.4 kg
            <span className="icoWeigth"></span>
          </div>
        </div>
        <div className="attributes">{description}</div>
      </div>
      <div className="lbutton">Adopt me!</div>
    </div>
  );
}

export default Cards;
