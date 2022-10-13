import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString('en-US', { month: 'long'});
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className='expenseDate'>
      <div className='month'>{month}</div>
      <div className='year'>{year}</div>
      <div className='day'>{day}</div>
    </div>
  )
}

export default ExpenseDate