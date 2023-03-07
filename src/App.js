
import "./App.css";
import Expenses from "./components/Expenses";
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
<Expenses expenses={expenses} />

  </div>
}

export default App;
