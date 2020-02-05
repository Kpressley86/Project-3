import React from "react";
import Cape from '../images/logo.gif';
import './Footer.css'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <Container className="themed-container" fluid={true}>

    <footer className="bg-light p-3 text-center">
      <Row>
        <Col xs="2">
          <div>
            <img src={Cape} alt="logo" />
          </div>
        </Col>
        <Col xs="10">
          <p>
            Project-3 Contributions by:
          <a href="https://github.com/Kpressley86?tab=repositories"> Kelly Pressley, </a>
            <a href="https://github.com/bjaber?tab=repositories">Basem Jaber, </a>
            <a href="https://github.com/Tyler-D-Thompson?tab=repositories">Tyler Thompson, </a>
            <a href="https://github.com/maria341?tab=repositories">Mariamay Roberts</a>
          </p>
        </Col>
      </Row>
    </footer>

  </Container>
);

export default Footer;
