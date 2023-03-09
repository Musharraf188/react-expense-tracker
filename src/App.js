
import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses";
const App =()=>{

const DUMMY_DATA=[
  {
    id:1,
    date:new Date(2023,1,31),
    title:'Car Insurance',
    amount:110.87
  },
  {
    id:2,
    date:new Date(2023, 3, 5),
    title:'Home Expenses',
    amount:784.87
  },
  {
    id:3,
    date:new Date(2022, 5, 7),
    title:'Buy Laptop',
    amount:354.86
  },
  {
    id:4,
    date:new Date(2022, 10, 4),
    title:'Education Ex',
    amount:160.87
  },
  {
    id:5,
    date:new Date(2021, 6, 14),
    title:'Smartphone buy',
    amount:53.87
  },
  {
    id:6,
    date:new Date(2021, 4, 21),
    title:'Buying Home',
    amount:653.87
  },


]
const [expenses, setExpenses] = useState(DUMMY_DATA)
function dataReceived(userInput){
setExpenses(prevExpenses=>{
  return [userInput, ...prevExpenses]
})
}
  return <div>
    <NewExpenses onReceived={dataReceived} />
<Expenses expenses={expenses} />

  </div>
}

export default App;
