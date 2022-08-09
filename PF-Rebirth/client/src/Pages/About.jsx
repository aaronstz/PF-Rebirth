import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../Components/About/About.css";
// import { Link } from "react-router-dom";
import enzo from "../Assets/enzo.png";
import leni from "../Assets/leni.png";
import aron from "../Assets/aron.png";
import tobi from "../Assets/tobi.png";
import maru from "../Assets/maru.png";
import carlos from "../Assets/carlos.png";
import lucas from "../Assets/lucas.png";
function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Row>
          <Col>
            <div className="about-container">
              <div>
                <h2>About Us</h2>
              </div>
              <div className="about-text">
                <h3>Rebirth is a pet adoption network</h3>
                REBIRTH is a company created in 2022 whose mission is to help
                pets and their owners to facilitate communication between users
                to find a home for pets looking for one. That is why our
                objectives are designed to provide pets with the well-being they
                deserve. At REBIRTH we think of pets as another member of the
                family and we are 100% committed to promoting respect and care
                for animals. Rebirth was formed in order to be able to rescue,
                and then give up for adoption those abandoned or mistreated
                dogs, cats in all the provinces of Argentina.
              </div>
              <h2>Team</h2>
              <div className="card-group">
                <div className="card">
                  <img src={enzo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Enzo Sanchez</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/enzo-sanchez-473a68232/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={leni} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Lenny Snaiderman</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/lenny-snaiderman/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={aron} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Aaron Gerez</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>

                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/aaronstz/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGyQwMtJR3xZA/profile-displayphoto-shrink_400_400/0/1650385740824?e=1665619200&v=beta&t=UNKdxXY_8uzOlrbJw-tieeq00af7mSfxgudSmLF5Bow"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">William Diaz Orozco</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/willdz/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-group">
                <div className="card">
                  <img src={lucas} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Lucas Diaz</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/lucas-d%C3%ADaz-520bbb23a/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={tobi} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Tobias Tymkiw</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/tobias-tymkiw/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={maru} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mariel Gramajo</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/marielgramajo/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={carlos} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Carlos Candioti</h5>
                    <p className="card-text">FULL STACK WEB DEVELOPER</p>
                    <p className="card-text">
                      <a
                        href="https://www.linkedin.com/in/carlos-candioti-14a990219/"
                        // target="_blank" -> warning
                        className="text-muted"
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default About;
