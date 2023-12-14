import React from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title"> Welcome to Note Zipper </h1>
              <h4 className="subtitle"> One Safe place for all your notes </h4>
            </div>
            <div className="buttonContainer">
              <a href="./login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="./register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
