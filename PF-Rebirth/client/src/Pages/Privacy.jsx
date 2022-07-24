import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../Components/Privacy/Privacy.css";

function Privacy() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Row>
          <Col>
            <div className="privacy-container">
              <div>
                <h2>Privacy Policy</h2>
              </div>
              <div className="privacy-text">
                <h3> 1-Policy title</h3>
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

export default Privacy;
