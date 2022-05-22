import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
    // State for title
    const [enteredTitle,setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    // State for Amount
    const [enteredAmount,setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    // State for Date
    const [enteredDate,setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <button>Add Expense</button>
            </div>
        </form>;
}

export default ExpenseForm;