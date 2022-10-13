import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false)

  const saveExpenseHandler = enteredData => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const showFormHandler = () => {
    setAddExpense(true)
  }
  const hideFormHandler = () => {
    setAddExpense(false)
  }

  return (
    <div className="newExpense">
      {addExpense &&
        <ExpenseForm 
          onSaveExpense={saveExpenseHandler}
          onCancelExpense={hideFormHandler}
         />
      }
      {!addExpense && 
        <button 
          className='showFormButton' 
          onClick={showFormHandler}>
            Add New Expense
        </button>
      }
    </div>
  )
}

export default NewExpense