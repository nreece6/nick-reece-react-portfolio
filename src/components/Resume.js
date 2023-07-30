import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Resume.css";
import PDF from "../img/Nick-Reece-Resume.pdf";

// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Material UI
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Bachelor of Science </h4>
              <h5>Minnesota State University: Mankato, 2012-2016</h5>
              <p>
                Studied Marketing with a Minor in Business Administration at Minnesota State University: Mankato.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Sales Representative</h4>
              <h5>Edwards Sales, 2018-present</h5>
              <p>
                Architectural Sales Representative, representing manufacturers of building enclosure materials.
              </p>
            </div>
            <div className="resume-item">
              <h4>Customer Service Representative</h4>
              <h5>Elkay WoodProducts, 2017-2018</h5>
              <p>
                Provided technical and design support to kitchen designers for a semi-custom cabinet manufacturer for accounts across the East Coast.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Proficiencies</h3>
            <ul>
              <li>
                HTML/CSS
                </li>
              <li>
                JavaScript
                </li>
              <li>
                MongoDB
              </li>
              <li>
                Express
              </li>
              <li>
                React
              </li>
              <li>
                Node.js
              </li>
              <li>
                SQL
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;