import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    let total = 0;
    for(let i in amounts) {
        total += amounts[i]; 
    }
    total = total.toFixed(2);
    console.log(total);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
}

export default Balance;