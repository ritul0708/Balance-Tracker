import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../../UI/Card/Card"
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"
import { useState } from "react"
import ExpenseChart from "./ExpenseChart"

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("")

  const filterHandler = year => {
    setFilterYear(year)
  }

  const allExpenses = props.expenses.filter(expense => {
    return expense
  })
  const filterExpense = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })


  // Rather than using ? : expression in the alternate for if else 
  // we can also use && expression as a alternative to this 
  //  and can break the big expression in two expression 
  // which are easy to handle
  // filterYear === "" && allExpenses
  // filterYear !== "" && filterExpense
  const expenseFilter = filterYear === "" ? allExpenses : filterExpense


  // Making the JSX code more cleaner
  let expenseContent = <p className="noExpense">No Expenses Found for This Year</p>

  if(expenseFilter.length > 0) {
    expenseContent = expenseFilter.map(expense => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  


  return (
    <Card className="expenses">
      <h1 className="title">Expense Tracker</h1>
      <ExpenseFilter 
        startingFilter={filterYear} 
        onFilter={filterHandler} 
      />
      <h2 className="chartHeading">Expense Chart</h2>
      <ExpenseChart expenses={expenseFilter} />
      {expenseContent}     
    </Card>
  )
}

export default Expenses