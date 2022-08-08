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
                What do I need to adopt a pet?
              </div>
              <div className="faq-answer">
                Regarding the physical requirements, identification is usually
                required, so this process can only be carried out by people of
                legal age; In the event that it is a child who encourages the
                adoption of the pet with his family, it requires the consent of
                his parents, and one of them is the one who must carry out the
                adoption process. In addition, it must be considered that to
                adopt a pet you must have monetary resources for its care and
                its daily use objects. As for the requirements that are not
                tangible, the person who is going to adopt the pet must be
                committed to the total care of the pet, both physical and
                mental/emotional.
              </div>
              <div className="faq-questions">
                How long does the adoption process take?
              </div>
              <div className="faq-answer">
                If you are a person who is viable for adoption, and your request
                is positive, it can take a couple of days, while the information
                is reviewed, your background is investigated and an interview is
                done.
              </div>
              <div className="faq-questions">Can I adopt any pet?</div>
              <div className="faq-answer">
                Yes, any of the pets that are up for adoption are pets that you
                can adopt; In the event that the pet in question has special
                physical needs or specific care due to its temperament, the
                shelter will notify you of this, and other issues could also be
                considered in this selection in order to recommend a dog that is
                ideal according to your style. of life.
              </div>
              <div className="faq-questions">
                Are there purebred pets in the shelters?
              </div>
              <div className="faq-answer">
                Yes, unfortunately abandonment due to carelessness or loss does
                not discriminate between races and happens with all pets, breed
                or not; but, we recommend you to have an open mind, because half
                Blood pets are just as good pets as purebred dogs.
              </div>
              <div className="faq-answer">
                Finally, in case you already know the great responsibility and
                understand the total commitment that must be fulfilled with
                these little animals and you already want to start your adoption
                process, you can do it here on the REBIRTH page, on the Adopt
                Me! button, on this section you will find dogs and cats waiting
                for adoption.
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
