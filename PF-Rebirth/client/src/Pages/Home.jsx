import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Card/Card";
import Paginations from "../Components/Pagination/Pagination";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  return (
    <Container>
      <Navbar/>
      <Row>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
      <br />
      <Paginations />
    </Container>
  );
}

export default Home;
