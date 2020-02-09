import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';

class InputBudget extends Component {
    state = {
        item: "",
        income: "",
        bills: "",
        leftoverIncome: "",
        cost: "",
        save: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        if (this.state.item && this.state.income && this.state.bills) {
            API.saveSaves({
                item: this.state.item,
                income: this.state.income,
                bills: this.state.bills
            })
                .then(res => this.loadSave())
                .catch(err => console.log(err));
        }

        let item = (`${this.state.item}`);
        let inc = parseInt(`${this.state.income}`);
        let bil = parseInt(`${this.state.bills}`);
        let leftoverIncome = (inc - bil);

    };

    handleFormSave = e => {
        e.preventDefault();

        if (this.state.cost && this.state.save) {
            API.saveSaves({
                cost: this.state.cost,
                save: this.state.save
            })
                .then(res => this.loadSave())
                .catch(err => console.log(err));
        }

        let cost = parseInt(`${this.state.cost}`);
        let save = parseInt(`${this.state.save}`);

    };

    render(props) {
        return (
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="card card-body mb-3">
                            <form>
                                <label>Item</label>
                                <input
                                    className="form-control"
                                    name="item"
                                    placeholder=" Item you're saving for!"
                                    value={this.state.item}
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <label>Monthly Income</label>
                                <input
                                    className="form-control"
                                    name="income"
                                    placeholder=" Input Estimated Monthly Income - 0.00"
                                    value={this.state.income}
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <label>Monthly Expense</label>
                                <input
                                    className="form-control"
                                    name="bills"
                                    placeholder="Input Estimated Monthly Expense - 0.00"
                                    value={this.state.bills}
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <button
                                    className="btn btn-dark btn-block mt-3"
                                    onClick={(e) => this.handleFormSubmit(e)}
                                >Submit</button>
                            </form>
                        </div>
                    </Col>
                    {/* ---------------------------------------------------------------------------------------------- */}
                    <Col sm="6">
                        <div className="card card-body">
                            <form>
                                <label>Cost</label>
                                <input
                                    className="form-control"
                                    name="cost"
                                    placeholder=" Cost of item you're saving for!"
                                    value={this.state.cost}
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <label>Amount To Save</label>
                                <input
                                    className="form-control"
                                    name="save"
                                    placeholder=" How much would you like to save?"
                                    value={this.state.save}
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <button
                                    className="btn btn-dark btn-block mt-3"
                                    onClick={(e) => this.handleFormSave(e)}
                                >Save</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InputBudget;