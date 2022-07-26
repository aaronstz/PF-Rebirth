import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { getDetails,} from "../Redux/Actions/index";
// import {  resetDetails, deletePet } from "../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./Details.css";
import female from "../Assets/Female_ico_big.png";
import dogIco from "../Assets/dog_ico_big.png";
import weight from "../Assets/weight_ico_big.png";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, image, breed, age, size, gender, description } =
  useSelector((state) => state.detail);

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
      <Navbar/>
      <Container>
        <Header/>
        <br/>
        <div class ="dtl-card">
          <div class ="info">
          <h3 class ="title">{name}</h3>
          <h4 class = "breed">{breed}</h4>
          <h5 class ="age">{age}</h5>
          {/* <h6 class ="location">Mexico City</h6> */}
          <br/>
          </div>
          <div class="attributes">{/* <h5>{description}</h5> */}</div>
          <br />
          <div class="story-dtl">
            <h5 class="txt-dscp">{description}</h5>
          </div>
          <div class="right-card">
            <h3 class="disp">AVAILABLE</h3>
            <div class="txt-description">
              <span>{gender}</span>
              <img src={female} alt="Female" />
            </div>
            <br />
            <div class="txt-description">
              <span>{size}</span>
              <img src={dogIco} alt="Pet" />
            </div>
            <br />
            <div>
              {/* <span class ="txt-description-last">3.4kg</span> */}
              <img src={weight} alt="weight" />
            </div>
          </div>
          <div class="btn-dtl">
            <button class="a-btn">
              <span class="text">Adopt me!</span>
            </button>
          </div>
          <div class="img-dtl">
            <div class="a-btnFav"></div>
            <img src={image} alt="Pet" class="img" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Details;
