import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function FAQ() {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <Row>
        <Col>
        <h2>FAQs</h2>
        1-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio inventore sed ipsa! Et perspiciatis optio debitis iste nihil voluptate soluta dolore accusantium repellendus, numquam illo reprehenderit modi eligendi sint!
        2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio inventore sed ipsa! Et perspiciatis optio debitis iste nihil voluptate soluta dolore accusantium repellendus, numquam illo reprehenderit modi eligendi sint!
        3-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio inventore sed ipsa! Et perspiciatis optio debitis iste nihil voluptate soluta dolore accusantium repellendus, numquam illo reprehenderit modi eligendi sint!
        4-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio inventore sed ipsa! Et perspiciatis optio debitis iste nihil voluptate soluta dolore accusantium repellendus, numquam illo reprehenderit modi eligendi sint!
        5-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio inventore sed ipsa! Et perspiciatis optio debitis iste nihil voluptate soluta dolore accusantium repellendus, numquam illo reprehenderit modi eligendi sint!

        </Col>
      </Row>
      <br />
     <Footer/>
    </Container>
  );
}

export default FAQ;
