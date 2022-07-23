import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Support_form from '../Components/Support/Support_form'

function Support() {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <Row>
        <Col>

        <Support_form/>
        
        </Col>
      </Row>
      <br />
     <Footer/>
    </Container>
  );
}

export default Support;
