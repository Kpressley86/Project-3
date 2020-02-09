import React from 'react';
import InputBudget from './InputBudget';
import DisplayBudget from './DisplayBudget';
import { Container, Row, Col } from 'reactstrap';

const Budget = () => {
    return (
        <div>
            <Container className="themed-container" fluid={true}>

                <Row>
                    <Col sm="12">
                        <InputBudget />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <DisplayBudget />
                </Row>
            </Container>
        </div>

    )
}

export default Budget;
