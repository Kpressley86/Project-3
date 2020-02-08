import React from 'react';
import InputBudget from './InputBudget';
import InputExpenses from './InputExpenses';
import DisplayBudget from '../display/DisplayBudget';

import { Container, Row, Col } from 'reactstrap';

const Budget = (props) => {
    return (
        <div>
            <Container className="themed-container" fluid={true}>
                
                    <Row>

                        <Col sm="6">
                            <InputBudget />
                        </Col>
                        <Col sm="6">
                            <InputExpenses/>
                        </Col>

                    </Row>
                    <br></br>
                    <br></br>
                    <Row>


                        <DisplayBudget/>


                    </Row>
                
            </Container>
        </div>

    )
}

export default Budget;
