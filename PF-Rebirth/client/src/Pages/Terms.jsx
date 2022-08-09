import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../Components/Terms/Terms.css";

function Terms() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Row>
          <Col>
            <div className="terms-container">
              <div>
                <h2>Terms {"&"} conditions</h2>
              </div>
              <div className="terms-text">
                <h3>1. Security and protection of your personal data</h3>
                The security of personal data is a priority for REBIRTH. This
                website strives to offer the highest level of security for which
                advanced technology is used. We adhere to the requirements of
                the National Law on Protection of Personal Data, No. 25,326 and
                its complementary regulations.
                <br />
                <h3>2. Your privacy </h3>
                REBIRTH respects your privacy. All information you provide to us
                will be treated with the utmost care and security, and will only
                be used within the limits set forth in this document.
                <h3>3. How information is gathered </h3>
                REBIRTH only collects your personal data when you provide it
                directly and with your express and informed consent.
                <h3>4. Who has access to the information? </h3>
                REBIRTH is always committed to presenting new solutions that
                improve the value of its products and services. The information
                collected here is not shared with anyone, while non-identifying
                and statistical information may be used for internal analysis to
                improve our services.
                <h3>5. Security and protection of your personal data </h3>
                The security of personal data is a priority for REBIRTH. This
                website strives to offer the highest level of security for which
                advanced technology is used. We adhere to the requirements of
                the National Law on Protection of Personal Data, No. 25,326 and
                its complementary regulations.
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

export default Terms;
