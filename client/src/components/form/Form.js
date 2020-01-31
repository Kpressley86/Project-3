import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {

    state = {
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

        alert(`Leftover Income : $ ${this.state.income} - ${this.state.bills}`);
        this.setState({
            income: "",
            bills: ""
        });
    };

    handleFormSave = e => {
        e.preventDefault();

        alert(`It will take you ${this.state.cost} / ${this.state.save} Months to save enough money!`);
        this.setState({
            leftoverIncome: "",
            save: ""
        });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        type="text"
                        name="income"
                        placeholder="Monthly Income"
                        value={this.state.income}
                        onChange={(e) => this.handleInputChange(e)}
                    /><br />
                    <br />
                    <input
                        type="text"
                        name="bills"
                        placeholder="Estimated Monthly Bills"
                        value={this.state.bills}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <button
                        onClick={(e) => this.handleFormSubmit(e)}
                    >Submit</button>
                    <br />
                    <br />
                    <h1>leftover Income $</h1>
                    <br />
                    <br />
                    <input
                        type="text"
                        name="cost"
                        placeholder="Cost of the item you are saving for?"
                        value={this.state.cost}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="save"
                        placeholder="How much would you like to save?"
                        value={this.state.save}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <br />
                    <br />
                    <button
                        onClick={(e) => this.handleFormSave(e)}
                    >Save!</button>
                </form>
            </div>
        )
    }
}

export default Form;