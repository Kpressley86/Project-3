import React, { Component } from 'react';

class InputExpenses extends Component {
    render() {
        return (
            <div className="card card-body">
                <form>
                    <label>Big Purchase Amount</label>
                    <input className="form-control"
                           name="expensesTitle" />
                    <lable>Amount To Save</lable>
                    <input className="form-control"
                           name="amount" />
                   <button className="btn btn-dark btn-block mt-3">Save</button>
                </form>
            </div>
        )
    }
}

export default InputExpenses;