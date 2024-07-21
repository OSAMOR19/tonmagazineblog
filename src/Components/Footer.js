import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const footerStyle = {
    background: "#FFFFFF",
    color: "#ffffff",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const textCenter = {
    textAlign: "start",
    color: "#121212",
  };

  const linkStyle = {
    color: "#121212",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "15px",
  };

  const linkColumnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const curateLearnStyle = {
    color: "#59A7FE",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <h2 style={curateLearnStyle}>Ton NOMADS</h2>
              <p style={textCenter}>© 2024. Toninc All rights reserved.</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col sm={6}>
                <div style={linkColumnStyle}>
                  {/* <a href="#home" style={linkStyle}>Community</a> */}
                  <a href="#portfolio" style={linkStyle}>Contact us</a>
                  <a href="#contact" style={linkStyle}>tonnomads.io</a>
                  <a href="#faq" style={linkStyle}>+933-805-434-455</a>
                
                </div>
              </Col>
              <Col sm={6}>
                <div style={linkColumnStyle}>
                  <a href="#about" style={linkStyle}>FAQs</a>
                  {/* <a href="#blog" style={linkStyle}>Blog</a> */}
                  <a href="" style={linkStyle} target="_blank" rel="noopener noreferrer">Meet the Founder</a>
                  {/* <a href="#testimonials" style={linkStyle}>Privacy Policy</a> */}
                 
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;