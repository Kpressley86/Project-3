import React, { Component } from 'react';

class ExpensesList extends Component {
    render() {
        return (
            <div className="card mt-3">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th className="title text-center" style={{background: "#cc3333"}}>TITLE</th>
                            <th className="amount text-center" style={{background: "#cc3333"}}>AMOUNT</th>
                        </tr>
                    </thead>
                   
                   
                </table>
            </div>
        )
    }
}

export default ExpensesList;  
