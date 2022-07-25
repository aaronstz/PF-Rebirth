import "./Card.css";

function Cards({ image, name, breed, age, gender, size, description }) {
  return (
    <div className="lcard">
      <div className="btnFav"></div>
      <img src={image} alt="foto" />
      <div className="txtCont">
        <div className="txtLeft">
          <div className="title">{name}</div>
          <div className="breed">{breed}</div>
          <div className="age">{age} years</div>
          <div className="location">Buenos Aires</div>
        </div>
        <div className="txtRight">
          <div className="views">
            <span className="icoEye"></span>
            Views
          </div>
          <div className="sex">
            <span className="icoSex"></span>
            {gender}
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
      <div className="lbutton">Adopt me!</div>
    </div>
  );
}

export default Cards;
