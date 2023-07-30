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
                While Nick has excelled in several fields, his largest strength lies in technical problem solving. He has a love for combining his creative nature with the analytical thinking involved in web development. Since beginning his journey into the web development field, he has found that his business acumen combined with the critical thinking of computer science makes him an excellent candidate no matter the industry. Since Nick embraces any challenge put before him, learning both front end and back end web development has been an exciting experience. He looks forward to what the future in a new career will hold. 
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