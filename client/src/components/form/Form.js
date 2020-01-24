import React, { Component } from 'react';
import "./style.css";

class Form extends Component {

    state = {
        budget: "",
        expense: ""
    };

    handleInputChange = e => {
        console.log(e.target);
        const { budget, value } = e.target;
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({
            [budget]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        alert(` ${this.state.addBudget} ${this.state.addExpense}`);
        this.setState({
            addBudget: "",
            addExpense: "",
            leftover: ""
        });
    };

    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        name="budget"
                        placeholder="Type your budget"
                        value={this.state.addBudget}
                        onChange={(e) => this.handleInputChange(e)}
                    /><br /> 
                     <input
                        type="text"
                        name="expense"
                        placeholder="Type your expense"
                        value={this.state.addExpense}
                        onChange={(e) => this.handleInputChange(e)}
                    /><br />
                    <input
                        type="text"
                        name="leftoverfund"
                        placeholder="Type your leftoverfund"
                        value={this.state.letfoverfund}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;