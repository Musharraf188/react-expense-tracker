import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = props=>{
 
    function receivedData(expenseData){
const userInput ={
    ...expenseData
}
props.onReceived(userInput)
    }
  
    return <div className="new-expense">

    </div>
}

export default NewExpenses;