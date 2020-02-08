import React from "react";
import './HomeScreen.css'
import { Container, Row, Col } from 'reactstrap';

const Hero = () => (
  <Container className="themed-container" fluid={true}>
    <div className="text-center hero my-5">

      <Row>
        <Col xs="2"></Col>
        <Col xs="8">
          <div className="card">

            <h1 className="mb-4 card-header">About the APP</h1>
            <h3>What is it?</h3>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h3>What does it do?</h3>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <h3>How accurate is it?</h3>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.rfghjkhgfghjklkjhghjklkjhghjklokijuhghjklkjhghjkljhghjklkjhghjkjhghjklkjhgjklkjhjkl;</p>

            </div>
        </Col>

        <Col xs="2"></Col>
      </Row>

    </div>
  </Container>
);

export default Hero;
