import React, { Component } from 'react';

class InputExpenses extends Component {
    render() {
        return (
            <div className="card card-body">
                <form>
                    <title>Big Purchase Amount</title>
                    <input className="form-control"
                           name="expensesTitle" />
                    <title>Amount To Save</title>
                    <input className="form-control"
                           name="amount" />
                   <button className="btn btn-dark btn-block mt-3">Save</button>
                </form>
            </div>
        )
    }
}

export default InputExpenses;