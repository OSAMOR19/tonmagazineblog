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
import img2 from "../Images/bitgetimg.png";
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
    background: "#59A7FE",
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
        style={{ background: "#FFFFFF" }}
      >
        
        <Container>
          <h2 className="fw-bold text-start mb-2 text-muted">NEWS</h2>
          <Row className="justify-content-center gy-4">
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-1">
                      <div className="mt-auto">
                        <img
                          className="rounded-bottom img-fluid w-100"
                          src={img2}
                          alt="Card"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </div>
                      <h6
                        className="card-title mt-3 text-muted fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Bitget Wallet will support Ton blockchain
                      </h6>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        From July 11th to August 8th, provide liquidity for
                        REGI, NOT, HYDRA, STON, COFE, RECA, DFC, LLAMA, REDO,
                        WALL and earn generous rewards! New Bitget Wallet users
                        with over
                      </p>
                    </div>
                    <Button className="rounded-pill" style={buttonStyle}>
                      Ton Foundation
                    </Button>
                  </CardBody>
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
