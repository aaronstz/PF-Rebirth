import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./Details.css";
import female from "../Assets/Female_ico_big.png";
import male from "../Assets/male-icon.png";
import dogIco from "../Assets/dog_ico_big.png";
import weight from "../Assets/weight_ico_big.png";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { name, image, race, age, size, gender, description, location } = useSelector(
    (state) => state.detail
  );


  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  // function clear() {
  //   dispatch(resetDetails());
  // }

  // function handleDelete() {
  //   dispatch(deletePet(id));
  //   navigate("/home");
  // }

  return (
    <div>
      <Navbar />
      <Container>
        <Header />
        <br />
        <div class="dtl-card">
          <div className="dtl-cardLeft">
            <h3 class="title">{name}</h3>
            <h4 class="breed">{race}</h4>
            <h5 class="age">{age}&nbsp;years</h5>
            <span class="petlocation">{location}</span>
            <br />
            <div class="story-dtl">
              <h5 class="txt-dscp">{description}</h5>
            </div>
          </div>
          <div className="dtl-cardCenter">
            <h3 class="disp">AVAILABLE</h3>
            <div class="txt-description">
              <span>{gender}</span>
              {gender === "male" ? (
                <img src={male} alt="gender" />
              ) : (
                <img src={female} alt="gender" />
              )}
            </div>
            <br />
            <div class="txt-description">
              <span>{size}</span>
              <img src={dogIco} alt="Pet" />
            </div>
            <div class="txt-description-last">
              <span>3.4 kg</span>
              <img src={weight} alt="weight" />
            </div>
            <button class="a-btn">
              <span>Donate</span>
            </button>
            <button class="a-btn">
              <span>Adopt me!</span>
            </button>
          </div>

          <div className="dtl-cardRight">
            <div class="img-dtl">
              <div class="a-btnFav"></div>
              <img src={image} alt="Pet" class="img" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Details;
