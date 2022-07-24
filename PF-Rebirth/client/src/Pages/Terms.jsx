import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import '../Components/Terms/Terms.css'

function Terms() {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <Row>
        <Col>
        <div className="terms-container">
        <div><h2>Terms {"&"} conditions</h2></div>
        <div className="terms-text">
          <h3>1. term one</h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt molestias sed quam repellendus. Vero possimus ipsam quidem ad ratione sint ipsa dignissimos accusantium quo? Nihil harum consectetur eaque tenetur?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, perspiciatis. Adipisci illum blanditiis provident vel eos illo itaque nemo quas perspiciatis sit aspernatur corrupti necessitatibus dolorem debitis, facilis saepe omnis!
          <br />
          <h3>2. term two</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptate quam amet dolores sint temporibus nisi, excepturi, animi eos repellat hic architecto reprehenderit id accusantium blanditiis? Sunt est aut veritatis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt molestias sed quam repellendus. Vero possimus ipsam quidem ad ratione sint ipsa dignissimos accusantium quo? Nihil harum consectetur eaque tenetur?
        </div>
        </div>
        
        </Col>
      </Row>
      <br />
     <Footer/>
    </Container>
  );
}

export default Terms;
