import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer-copyright">
          <h3 >🌟 Copyright © Queendom by Lakeside {new Date().getFullYear()} 🌟️</h3>
      </div>
    </Container>
  );
}

export default Footer;
