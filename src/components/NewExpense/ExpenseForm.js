import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //using multiple state approach
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    //using one state approach  #1 , 2
    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //})

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        //setUserInput({ ...userInput, enteredTitle: event.target.value })  //using one state approach #1
        //setUserInput((prevState)=>{return{ ...prevState, enteredTitle: event.target.value }})  //using one state approach#2
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //setUserInput({ ...userInput, enteredAmount: event.target.value }) //using one state approach
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        //setUserInput({ ...userInput, enteredDate: event.target.value }) //using one state approach
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        //console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date </label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2020-01-01"
                        max="2030-01-01"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm
