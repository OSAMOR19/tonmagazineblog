import React, { useState, Fragment } from "react";
import { Col, Container, Row, Form, Alert } from "reactstrap";

import staffs from "../Images/staffspic.svg";

const Contact = () => {
  const [animationNavTab, setAnimationNavTab] = useState("1");
  const animationNavToggle = (tab) => {
    if (animationNavTab !== tab) {
      setAnimationNavTab(tab);
    }
  };

  return (
    <Fragment>
      <section className="section" id="contact">
        <Container className="mt-5 mb-5">
          <Row className="gy-4 justify-content-center">
            <Col lg={7}>
              <div>
                <h2
                  className="text-center mt-5 mb-5 fw-bold"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.5rem",
                  }}
                >
                  Join other self-learners to stay informed and be the first to
                  experience CurateLearn.
                </h2>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const firstName = formData.get("name");
                    const email = formData.get("email");
                    const response = await fetch(
                      "https://backend.curatelearn.com/user/waitlist",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          first_name: firstName,
                          email: email,
                        }),
                      }
                    );
                    if (response.ok) {
                      alert("You have been added to the waitlist!");
                    } else {
                      alert("Ensure you entered your name and email");
                    }
                  }}
                >
                  <div className="custom-input-container">
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fs-13">
                        Name
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control bg-light border-light custom-input"
                        placeholder="Enter name*"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fs-13">
                        Email
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control bg-light border-light custom-input"
                        placeholder="Enter email*"
                      />
                    </div>
                    <div className="mb-4 data-safety-info">
                      <i className="ri-error-warning-line"></i>
                      <p className="text-muted">
                        We don't share your data with third-parties. So, your
                        data is safe with us.
                      </p>
                    </div>
                    <div>
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-primary custom-input w-100"
                        value="Join waitlist"
                        style={{ background: "#FF7223", border: "none" }}
                      />
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .custom-input-container {
          max-width: 400px;
          margin: 0 auto;
        }

        .custom-input {
          max-width: 100%;
        }

        .data-safety-info {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }

        .warning-icon {
          margin-right: 10px;
          font-size: 1.2rem;
          color: #FF7223;
        }

        .data-safety-info p {
          margin-bottom: 0;
        }
      `}</style>

      <div className="full-width-image">
        <img src={staffs} className="img-fluid w-100" alt="..." />
      </div>
    </Fragment>
  );
};

export default Contact;