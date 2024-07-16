import React from "react";
import {
  Col,
  Container,
  Row,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

const Services = () => {
  const [open, setOpen] = React.useState("0");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <React.Fragment>
      <section id="faq" style={{ background: "#FFFFFF" }}>
        <Container>
          <Row>
            <Col className="col-12">
              <div className="justify-content-between d-flex align-items-center mt-3 mb-4"></div>

              <Row className="justify-content-center mt-5">
                <Col lg={8}>
                  <div className="text-center pt-5 text-dark mb-5">
                    <h3 className="fw-bold">Frequently Asked Questions</h3>
                    <p className="mb-4 text-muted ff-secondary">
                      Our mission is to empower self-learners by creating a
                      digital learning environment that enhances their
                      educational experience.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center pt-5 mb-5">
                <Col lg={8}>
                  <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                      <AccordionHeader targetId="1">
                        Is this another Udemy or Online Course Platform?
                      </AccordionHeader>
                      <AccordionBody className="text-muted" accordionId="1">
                        No, we do not create courses or content ourselves.
                        Instead, our AI curates learning resources from various
                        platforms, functioning like your digital library with an
                        AI mentor.
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="2">
                        Can I upload my own resources?
                      </AccordionHeader>
                      <AccordionBody className="text-muted" accordionId="2">
                        Yes, you can upload your own resources, including
                        lecture notes, documentation, or even URLs.
                      </AccordionBody>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;
