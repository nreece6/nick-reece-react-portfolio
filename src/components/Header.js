import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faR, faN } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Header.css";

// Header component
function Header() {
  return (
    // Header component
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <FontAwesomeIcon
                icon={faN}
                className="fa-solid fa-n"
                size="xl"
                style={{ color: "#white" }}
              />
              <Link
                to="/nick-reece-react-portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Nick Reece
              </Link>
              <FontAwesomeIcon
                icon={faR}
                flip="horizontal"
                className="fa-solid fa-r"
                size="xl"
                style={{ color: "#white" }}
              />
            </h1>
          </Col>
        </Row>
      </Container>
      <Nav />
    </>
  );
}
// Export Header
export default Header;