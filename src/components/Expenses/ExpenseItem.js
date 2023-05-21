import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'

function ExpenseItem(props) {
    const [amount, addAmount] = useState(props.amount)
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        addAmount(amount + 5)
        console.log(amount + 6)
    }
    const clickHandler1 = () => {
        setTitle('new title')
        console.log(title)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change amount</button>
            <button onClick={clickHandler1}>Change title</button>
        </Card>
    )
}

export default ExpenseItem
