import React, { Component } from 'react';

class InputExpenses extends Component {
    render() {
        return (
            <div className="card card-body">
                <form>
                    <label>Big Purchase Amount</label>
                    <input className="form-control"
                           name="expensesTitle" />
                    <label>Amount To Save</label>
                    <input className="form-control"
                           name="amount" />
                   <button className="btn btn-primary btn-block mt-3" style={{background: "#2f4f4f"}}>Save</button>
                </form>
            </div>
        )
    }
}

export default InputExpenses;