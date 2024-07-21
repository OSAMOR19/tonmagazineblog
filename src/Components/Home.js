import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const gradientBackgroundStyle = {
    background: "linear-gradient(180deg,  #59A7FE 20%, #FCFCFC 100%)",
  };
  return (
    <React.Fragment>
      <section
        className="section pb-0 hero-section"
        id="home"
        style={gradientBackgroundStyle}
      >
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} lg={8}>
              <div className="text-center text-light mt-4 mt-lg-5 pt-5">
                <h1 className={`display-10 fw-bold mt-5 mb-3 text-dark lh-base custom-title ${animate ? 'animate-slide-in' : ''}`}
                    style={{ fontFamily: 'ZCOOL KuaiLe' }}>
                  EVERY NEWS ON TON
                </h1>
                <p className="small-text w-0 text-muted mt-sm-0 ms-sm-2">
                  Feeds, news, updates and predictions for the ton ecosystem.
                </p>
                <div className="d-flex justify-content-center mt-5 mb-5">
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Mulish&display=swap');

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .get-started-btn {
          min-width: 150px;
          padding: 2px 10px;
          text-align: center;
        }
        .custom-title {
          font-size: 3rem;
          line-height: 1.2;
          opacity: 0;
        }
        .custom-lead {
          font-size: 1.2rem;
        }
        @media (max-width: 576px) {
          .custom-title {
            font-size: 2rem;
          }
          .custom-lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;