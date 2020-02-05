import React, { Component } from 'react';

class ExpensesList extends Component {
    render() {
        return (
            <div className="card mt-3">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpensesList;  
