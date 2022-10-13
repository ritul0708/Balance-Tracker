import { useState } from "react";
import Expenses from "./components/Expense/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const dummy_data = [
  {
    id: 1,
    title: "Cloth Shopping",
    amount: 1000,
    date: new Date(2022, 5, 14),
  },
  {
    id: 2,
    title: "Grocery",
    amount: 430,
    date: new Date(2022, 8, 1),
  },
  {
    id: 3,
    title: "Phone Bill",
    amount: 700,
    date: new Date(2021, 1, 11),
  },
  {
    id: 4,
    title: "Medicine",
    amount: 130,
    date: new Date(2020, 9, 10),
  }
]
const App = () => {
  const [expense, setExpense] = useState(dummy_data)

  
  const addExpenseHandler = expense => {
    setExpense(prevExpense => {
      return [expense, ...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;


// Creating React Element without JSX
// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, { items: expenses })
// );
