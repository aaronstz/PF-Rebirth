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
                <h3> Privacy Policy</h3>
                This Privacy Policy establishes the terms in which REBIRTH uses
                and protects the information that is provided by its users when
                using its website. This company is committed to the security of
                its users' data. When we ask you to fill in the personal
                information fields with which you can be identified, we do so by
                ensuring that it will only be used in accordance with the terms
                of this document. However, this Privacy Policy may change over
                time or be updated, so we recommend and emphasize that you
                continually review this page to ensure that you agree with such
                changes.
                <h3> Use of collected information</h3>
                Our website uses the information in order to provide the best
                possible service, particularly to keep a record of users, of
                orders, if applicable, and to improve our products and services.
                It is possible that periodic emails are sent through our site
                with special offers, new products and other advertising
                information that we consider relevant to you or that may provide
                you with some benefit, these emails will be sent to the address
                you provide and may be canceled. anytime
                <h3> Cookies</h3>
                Our website uses cookies to be able to identify the pages that
                are visited and their frequency. This information is used only
                for statistical analysis and then the information is permanently
                deleted. You can delete cookies at any time from your computer.
                However, cookies help provide a better service on websites, they
                do not give access to information from your computer or from
                you, unless you want it and provide it directly, visits to a
                website. You can accept or deny the use of cookies, however most
                browsers automatically accept cookies as it serves to have a
                better web service. You can also change your computer settings
                to decline cookies. If they are declined you may not be able to
                use some of our services.
                <h3> Control of your personal information</h3>
                At any time you can restrict the collection or use of personal
                information that is provided to our website. Every time you are
                asked to fill in a form, such as the user registration form, you
                can check or uncheck the option to receive information by email.
                If you have marked the option to receive our newsletter or
                advertising, you can cancel it at any time. This company will
                not sell, assign or distribute personal information that is
                collected without your consent, unless required by a judge with
                a court order.
                <h6>
                  REBIRTH reserves the right to change the terms of this Privacy
                  Policy at any time.
                </h6>
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
