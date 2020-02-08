import React, { Component } from 'react';

class InputBudget extends Component {
    state = {
        income: "",
        bills: "",
        cost: "",
        save: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.income);
        console.log(this.state.bills);
    };

    handleFormSubmit = e => {
        e.preventDefault();

        this.setState({
            income: "",
            bills: ""
        });

        let inc = parseInt(`${this.state.income}`);
        let bil = parseInt(`${this.state.bills}`);
        let leftoverIncome = (inc - bil);
        // var formatter = new Intl.NumberFormat("dollar", {
        //     style: "currency",
        //     currency: "USD"
        // });

    
        
         //var moneyLeft = (formatter.format(leftoverIncome));

         console.log(leftoverIncome)
    };
    render(props) {
        return (
            <div className="card card-body mb-3">
                <form>
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
        )
    }
}

export default InputBudget;