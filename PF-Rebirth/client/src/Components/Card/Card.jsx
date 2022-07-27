import "./Card.css";
import { Link } from "react-router-dom";
import female from "../../Assets/female-ico-w.png";
import male from "../../Assets/male-icon-w.png";

function Cards({
  image,
  name,
  breed,
  age,
  gender,
  size,
  description,
  id,
  location,
}) {
  return (
    <div className="lcard">
      <div className="btnFav"></div>
      <img src={image} alt="foto" />
      <div className="txtCont">
        <div className="txtLeft">
          <div className="title">{name}</div>
          <div className="breed">{breed}</div>
          <div className="age">{age} years</div>
          <div className="location">{location}</div>
        </div>
        <div className="txtRight">
          <div className="views">
            <span className="icoEye"></span>
            Views
          </div>
          <div className="sex">
            <span className="icoSex">
              {gender === "male" ? (
                <img src={male} alt="gender" />
              ) : (
                <img src={female} alt="gender" />
              )}
            </span>
            <span>{gender}</span>
          </div>
          <div className="size">
            <span className="icoSize"></span>
            {size}
          </div>
          <div className="weigth">
            <span className="icoWeigth"></span>
            3.4 kg
          </div>
        </div>
        <div className="attributes">{description}</div>
      </div>
      <div className="lbutton">
        <Link to={"/home/" + id}>More info</Link>
      </div>
    </div>
  );
}

export default Cards;
