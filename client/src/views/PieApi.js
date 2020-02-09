// src/views/ExternalApi.js

import React from "react";
import Books from '../pages/Books/Books';
import { Container, Row, Col } from 'reactstrap';

const ExternalApi = () => {

  return (
    <Container>
      <Row>
        <Col md="6">
          <Books />
        </Col>
      </Row>
    </Container>
  );
};

export default ExternalApi;