import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h3 className="text-center" style={{color: '#2f4f4f'}}>YOUR BUDGET INFORMATION</h3>
            <BalanceDisplay />
            <ExpensesList />
        </div>
    )
}

export default DisplayBudget;