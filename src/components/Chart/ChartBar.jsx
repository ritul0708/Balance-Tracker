import './ChartBar.css'

const ChartBar = props => {
  let barFillHeight = '0%'

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.max) * 100) + '%';
  }

  return (
    <div className="chartBar">
      <div className="bars">
        <div className="barFill" style={{height: barFillHeight}}></div>
      </div>
      <article className="barToolTip">
        <div>Expense Amount: </div>
        <div>{props.value}</div>
      </article>
      <div className="barLabel">{props.label}</div>
    </div>
  )
}

export default ChartBar