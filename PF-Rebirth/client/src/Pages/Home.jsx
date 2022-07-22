import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Card/Card";
import Paginations from "../Components/Pagination/Pagination";
import Navbar from "../Components/Navbar/Navbar";
import FiltersBar from "../Components/FilterBar/FilterBar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function Home() {
  return (
    <div>
    <Container>
      <Navbar/>
      <Header/>
      <FiltersBar />
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
    <div>
      <Footer/>

    </div>
    </div>
  );
}

export default Home;
