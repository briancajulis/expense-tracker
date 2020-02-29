import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    
    const addAmounts = (amounts) => {
        let total = 0;
        for(let i in amounts) {
            total += amounts[i]
        }
        return total.toFixed(2);
    }

    const amounts = transactions.map(transaction => transaction.amount);
    let income = amounts.filter(amount => amount > 0);
    income = addAmounts(income);
    let expense = amounts.filter(amount => amount < 0);
    expense = Math.abs(addAmounts(expense));

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${numberWithCommas(expense)}</p>
            </div>
        </div>
    );
}

export default IncomeExpense;