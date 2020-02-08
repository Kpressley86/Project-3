import React from "react";
import Cape from '../images/logo.gif';
import './Footer.css'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <Container className="themed-container" fluid={true} style={{backgroundColor: '#2F4F4F'}}>

    <footer className="p-3 text-center">
      <Row>
        <Col xs="2">
          <div>
            <img className="footerimg" src={Cape} alt="logo" />
          </div>
        </Col>
        <Col xs="10">
          <p className="pppp">
            Project-3 Contributions by:
          <a className="kelly" href="https://github.com/Kpressley86?tab=repositories"> Kelly Pressley, </a>
            <a className="basem" href="https://github.com/bjaber?tab=repositories">Basem Jaber, </a>
            <a className="tyler" href="https://github.com/Tyler-D-Thompson?tab=repositories">Tyler Thompson, </a>
            <a className="mariay" href="https://github.com/maria341?tab=repositories">Mariamay Roberts</a>
          </p>
        </Col>
      </Row>
    </footer>

  </Container>
);

export default Footer;
