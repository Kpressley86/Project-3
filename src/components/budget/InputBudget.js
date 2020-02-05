import React, { Component } from 'react';

class InputBudget extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <form>
                <label>Monthly Income</label>
                    <input className="form-control"
                           name="number" />
                    <lable>Estimated Monthly Bills</lable>
                    <input className="form-control"
                           name="number" />
                    <button className="btn btn-dark btn-block mt-3">Submit</button>
                </form>
            </div>
        )
    }
}

export default InputBudget;