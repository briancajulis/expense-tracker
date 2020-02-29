import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    let total = 0;
    for(let i in amounts) {
        total += amounts[i]; 
    }
    total = total.toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </>
    );
}

export default Balance;