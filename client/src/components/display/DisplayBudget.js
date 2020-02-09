import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';

const DisplayBudget = (props) => {
    return (
        <Container>
            <Row>
                <Col sm="12">
                    <div className="card card-body">
                        <h3 className="text-center">YOUR BUDGET INFORMATION</h3>
                        <BalanceDisplay />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DisplayBudget;