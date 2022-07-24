import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SupportForm from "../Components/Support/Support_form";

function Support() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Row>
          <Col>
            <SupportForm />
          </Col>
        </Row>
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default Support;
