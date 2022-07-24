import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../Components/Faqs/faq.css";

function FAQ() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Row>
          <Col>
            <div className="faq-container">
              <h2>FAQs</h2>
              <div className="faq-questions">
                2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! rehenderit modi eligendi sint!
              </div>
              <div className="faq-answer">
                3-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! Et perspiciatis optio debitis iste
                nihil voluptate soluta dolore accusantium repellendus, numquam
                illo reprehenderit modi eligendi sint!
              </div>
              <div className="faq-questions">
                2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! rehenderit modi eligendi sint!
              </div>
              <div className="faq-answer">
                3-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! Et perspiciatis optio debitis iste
                nihil voluptate soluta dolore accusantium repellendus, numquam
                illo reprehenderit modi eligendi sint!
              </div>
              <div className="faq-questions">
                2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! rehenderit modi eligendi sint!
              </div>
              <div className="faq-answer">
                3-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                odio inventore sed ipsa! Et perspiciatis optio debitis iste
                nihil voluptate soluta dolore accusantium repellendus, numquam
                illo reprehenderit modi eligendi sint!
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

export default FAQ;
