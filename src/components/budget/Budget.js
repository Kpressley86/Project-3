import React from 'react';
import InputBudget from './InputBudget';
import InputExpenses from './InputExpenses';
import DisplayBudget from '../display/DisplayBudget';

import { Container, Row, Col } from 'reactstrap';

const Budget = () => {
    return (
        <div>
            <Container className="themed-container" fluid={true}>
                
                    <Row>
                      <Col sm="4">
                            <InputBudget />
                        
                            <InputExpenses />
                        </Col>

                        <Col sm="8">
                    <br></br>
                    <br></br>
                   
                     <DisplayBudget />

                     </Col>
                    </Row>
                </Container>
        </div>

    )
}

export default Budget;
