import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

const DisplayBudget = (props) => {
    return (
        <div className="card card-body">
            <h3 className="text-center">YOUR BUDGET INFORMATION</h3>
            <BalanceDisplay/>
            <ExpensesList />
        </div>
    )
}

export default DisplayBudget;