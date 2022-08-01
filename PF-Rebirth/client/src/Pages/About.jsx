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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quod numquam illo beatae? Magni quibusdam iusto dolores quasi
                soluta nisi similique commodi! Mollitia harum ducimus est libero
                perferendis facilis explicabo. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Vel nesciunt molestias sed quam
                repellendus. Vero possimus ipsam quidem ad ratione sint ipsa
                dignissimos accusantium quo? Nihil harum consectetur eaque
                tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Vel voluptate quam amet dolores sint temporibus nisi,
                excepturi, animi eos repellat hic architecto reprehenderit id
                accusantium blanditiis? Sunt est aut veritatis. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Vel nesciunt
                molestias sed quam repellendus. Vero possimus ipsam quidem ad
                ratione sint ipsa dignissimos accusantium quo? Nihil harum
                consectetur eaque tenetur?
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
