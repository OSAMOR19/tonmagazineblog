import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gradientBackgroundStyle = {
    background: "linear-gradient(70deg,  #FCFCFC 10%, #FCFCFC 50%)",
  };

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#000',
    // fontWeight: 'semi-bold',  // This makes the text bold
  };

  const buttonStyle = {
    backgroundColor: '#59A7FE',
    borderColor: '#59A7FE',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'start',
    flexGrow: 1,
  };

  const toggleButtonStyle = {
    border: '1px solid #121212',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <div className="justify-center">
      <Navbar bg="myRed" data-bs-theme="light" style={gradientBackgroundStyle} expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home" style={{ color: '#59A7FE' }}>
            Tonmic
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={toggleButtonStyle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
            <Nav style={centerNavStyle}>
              {/* <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link> */}
              <Nav.Link href="#services" style={navLinkStyle}>News</Nav.Link>
              <Nav.Link href="#portfolio" style={navLinkStyle}>Market</Nav.Link>
              <Nav.Link href="#contact" style={navLinkStyle}>Consulting</Nav.Link>
              <Nav.Link href="#faq" style={navLinkStyle}>Not</Nav.Link>
            </Nav>
            <Button color="primary" style={buttonStyle} onClick={() => document.getElementById('submit').scrollIntoView({ behavior: 'smooth' })}>Join Waitlist</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;