import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from "../../UI/Card/Card"
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <Card className='expenseItem'>
      <ExpenseDate date={props.date} />
      <div className='itemDescription'>
        <h2 className='itemTitle'>{props.title}</h2>
        <p className='itemPrice'>{props.amount}</p>
      </div>
    </Card>
  )
}

export default ExpenseItem