import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Fade,
} from "react-bootstrap";
import NavBar from "./Nav";

import img1 from "../Images/chat.svg";
import img2 from "../Images/aivoiceimg.png";
import img3 from "../Images/integrateimage.svg";
import img4 from "../Images/notes.png";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    background: "#FF7223",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  const handleButtonHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter ? "#FF5500" : "#FF7223";
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="mt-4"
        style={{ background: "#FFEADE" }}
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col xs={12}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate mt-5"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <Row className="g-0">
                    <Col md={7}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            AI Mentor
                          </Button>
                          <h4
                            className="card-title mt-3 fw-bold mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Practice Mock Interview
                          </h4>
                          <h6
                            className="card-text mb-3 text-muted"
                            style={{ fontFamily: "Mulish, sans-serif" }}
                          >
                            Refine your skills, build confidence, and prepare for real-world scenarios with our comprehensive practice mock interviews..
                          </h6>
                          <h4
                            className="card-title mt-5 fw-semibold mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Interact with Resources
                          </h4>
                          <h6
                            className="card-text mb-1 text-muted"
                            style={{ fontFamily: "Mulish, sans-serif" }}
                          >
                            Effortlessly chat with resources by utilizing the @ feature to tag them, ensuring swift access during your interactions with the AI mentor.
                          </h6>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={4}>
                      <img
                        className="rounded-end img-fluid h-100 object-cover"
                        src={img1}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button>
                      <h4
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Customise your AI Mentor
                      </h4>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        Customize your AI mentor to tailor your learning
                        experience specifically to your unique needs and
                        preferences. Personalizing your mentorship enhances
                        engagement and ensures relevance throughout your
                        learning journey.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img2}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button>
                      <h4
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Personalized Curriculum
                      </h4>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        Concerned about which resource to engage with first? Rest assured, 
                        we will provide a structured curriculum for each space you create, 
                        guiding you on the optimal sequence to access the curated resources. 
                        
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img5}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button>
                      <h3
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Take notes while learning
                      </h3>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        This setup lets you jot down important points, ideas,
                        and questions within your space, eliminating the need to
                        switch tools. Keeping everything in one place helps you
                        maintain focus and streamline your learning.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img4}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button>
                      <h3
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Pin Resources for Quick Access
                      </h3>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        Pinning resources enhances your ability to quickly access crucial videos and PDFs, 
                        boosting study efficiency and focus. This feature ensures important materials are always at your fingertips, 
                        streamlining your learning process.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img6}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col xs={12}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate mt-5 mb-4"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <Row className="g-0 align-items-center">
                    <Col md={9}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            Integrate App
                          </Button>
                          <h3
                            className="card-title mt-3 fw-bold mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Integrate Your Personal Library into Your Space
                          </h3>
                          <p
                            className="card-text mb-3 text-muted"
                            style={{ fontFamily: "Mulish, sans-serif" }}
                          >
                            Connect your existing library of learning resources
                            to your Space. By centralizing all your study
                            materials, you can easily access and reference them
                            without interrupting your workflow. This integration
                            streamlines your learning process, making it more
                            efficient and organized.
                          </p>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={3}>
                      <img
                        className="rounded-end img-fluid"
                        src={img3}
                        style={{ width: "250%", height: "250px", objectFit: "cover" }}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
