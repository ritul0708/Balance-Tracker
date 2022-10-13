import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  const changeDataHandler = event => {
    props.onFilter(event.target.value)
  }

  return(
    <div className="expenseFilter"> 
      <div className="filterControl">
        <label>Filter By Year</label>
        <select value={props.startingFilter} onChange={changeDataHandler} >
          <option value="">No Filter</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter