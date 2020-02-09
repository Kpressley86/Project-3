// src/views/ExternalApi.js

import React from "react";
import Books from '../pages/Books/Books';
import { Container, Row, Col } from 'reactstrap';

const ExternalApi = () => {

  return (
    <Container className="themed-container" fluid={true}>>
      <Row>
        <Col md="12">
          <Books />
        </Col>
      </Row>
    </Container>
  );
};

export default ExternalApi;