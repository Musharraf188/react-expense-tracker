import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm =props=>{
    const [userInput, setUserInput] =useState({
        expenseTitle:"",
        expenseAmount:"",
        expenseDate:""
    })
    function titleChangeHandler(event){
        setUserInput(prevExpense=>{
            return {...prevExpense, expenseTitle:event.target.value}
        })
    }
function amountChangeHandler(event){
        setUserInput(prevExpense=>{
            return {...prevExpense, expenseAmount:event.target.value}
        })
    }
    function dateChangeHandler(event){
        setUserInput(prevExpense=>{
            return {...prevExpense, expenseDate:event.target.value}
        })
    }
const submitHandler=event=>{
    event.preventDefault();
    const expenseData ={
        title:userInput.expenseTitle,
        amount:userInput.expenseAmount,
        date:userInput.expenseDate
    }
    props.onAdd(expenseData)
}
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="text" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control label">
                <label>Date</label>
                <input type="Date" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button >Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;