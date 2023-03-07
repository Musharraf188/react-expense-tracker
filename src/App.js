
import "./App.css";
import ExpenseItem from "./components/ExpensesItem";
const App =()=>{

const expenses =[
  {
    date:new Date(2023,1,31),
    title:'Car Insurance',
    amount:110.87
  },
  {
    date:new Date(2023, 3, 5),
    title:'Home Expenses',
    amount:784.87
  },
  {
    date:new Date(2022, 5, 7),
    title:'Buy Laptop',
    amount:354.86
  },
  {
    date:new Date(2022, 10, 4),
    title:'Education Ex',
    amount:160.87
  },
  {
    date:new Date(2021, 6, 14),
    title:'Smartphone buy',
    amount:53.87
  },
  {
    date:new Date(2021, 4, 21),
    title:'Buying Home',
    amount:653.87
  },


]
  return <div>
<ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
<ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
<ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}/>
<ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}/>
<ExpenseItem date={expenses[4].date} title={expenses[4].title} amount={expenses[4].amount}/>
<ExpenseItem date={expenses[5].date} title={expenses[5].title} amount={expenses[5].amount}/>
  </div>
}

export default App;
