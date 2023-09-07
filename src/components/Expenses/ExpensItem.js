import '../Expenses/ExpensItem.css';
import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
function ExpensItem(props) {
    const [title, setTitle] = useState(props.title)


    const clickHandler = () => {
        setTitle('Updated!')

    }

    return <>
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>change title</button>

            </div>
        </Card>
    </>
}

export default ExpensItem;  