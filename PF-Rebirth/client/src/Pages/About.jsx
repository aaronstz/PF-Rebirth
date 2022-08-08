import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../Components/About/About.css";

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
                dogs, cats in all the provinces of Argentina
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
