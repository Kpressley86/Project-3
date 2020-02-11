import React, { Component } from 'react';


class InputBudget extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <form>
                    <label>Monthly Income</label>
                    <input className="form-control"
                        name="number" />
                    <label>Estimated Monthly Bills</label>
                    <input className="form-control"
                        name="number" />
                    <button className="btn btn-primary btn-block mt-3" style={{background: '#2f4f4f'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default InputBudget;