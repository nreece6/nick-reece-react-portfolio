import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../img/linked-in-headshot.jpg";
import "../styles/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Nick Reece
                </Card.Title>
                <Card.Text>
                  Nick Reece is a web developer with a diverse background of experiences. From running the Cabinet and Appliance department at his local Menards store while finishing his degree, to giving presentations to Architects regarding the latest in Building Science, the path to Web Development has been atypical to say the least.
                </Card.Text>
                <Card.Text>
                  Para2
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;