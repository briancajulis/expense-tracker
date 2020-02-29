import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({text, amount, id}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
}

export default Transaction
