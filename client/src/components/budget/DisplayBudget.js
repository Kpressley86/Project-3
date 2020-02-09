import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";

class DisplayBudget extends Component {
    componentDidMount() {
        this.loadSave();
    };

    // Loads all Save  and sets them to this.state.Save
    loadSave = () => {
        API.getSaves()
            .then(res =>
                this.setState({ Save: res.data, 
                    item: "",
                    income: "",
                    bills: "",
                    leftoverIncome: "",
                    cost: "",
                    save: "",
                    time: "",
                    date: Date.now
                })
            ) 
            .catch(err => console.log(err));
    };
    render(props) {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <div className="card card-body">
                            <h3 className="text-center">BUDGET INFORMATION</h3>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">Leftover Income</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">GET.leftoverIncome</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">GET.item</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title"> GET.cost</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header">Time it will take to save</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">GET.time</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DisplayBudget;