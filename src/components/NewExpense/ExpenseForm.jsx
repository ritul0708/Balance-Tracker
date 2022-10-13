import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Using only 1 state rather than 3 because all belongs to same component
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleHandler = event => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // Best practise is to use prevState
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }
  const amountHandler = event => {
    setAmount(event.target.value);
  }
  const dateHandler = event => {
    setDate(event.target.value);
  }
  const submitHandler = event =>{
    event.preventDefault()
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    props.onSaveExpense(expenseData)
    // Two way binding setting again null
    setTitle("")
    setAmount("")
    setDate("")
  } 


  return (
    <div className="expenseForm">
      <h1>Add New Expense</h1>
      <form onSubmit={submitHandler} >
        <div className="formControl">
          <div className="labelControl">
            <label>Title</label>
            <input type="text" 
              placeholder='Title' 
              // two way binding using value
              value={title}
              onChange={titleHandler} 
              required
            />
          </div>
          <div className="labelControl">
            <label>Amount</label>
            <input type="number" 
              placeholder='Amount' 
              min="1" 
              step="1" 
              value={amount}
              onChange={amountHandler} 
              required
            />
          </div>
          <div className="labelControl">
            <label>Date</label>
            <input type="date" 
              min="2019-01-01"
              value={date}
              onChange={dateHandler} 
              required
            />
          </div>
        </div>
        <div className="formSubmit">
          <button className='cancel' type='button' onClick={props.onCancelExpense}>
            Cancel
          </button>
          <button className='submit' type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm