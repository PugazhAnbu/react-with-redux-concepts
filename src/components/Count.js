import React, { useState } from 'react'
import './Count.css'
import { increamentCount, decrementCount } from '../redux/count/action'
import { connect } from 'react-redux';

function Count(props) {
  const [countInput, setCountInput] = useState(0)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Count</h1>
      <h1 className="count-display">{props.count}</h1>
      {/* <input type="number" value={countInput} onChange={(e) => setcountInput(Number(e.target.value))} /> */}
      <input type="number" value={countInput} onChange={(e) => setCountInput(Number(e.target.value))} /> <br /> <br />
      <button className="count-button" onClick={() => props.incrementCounter(countInput)}>Increment</button> {'   '}
      <button className="count-button" onClick={() => props.decrementCount(countInput)}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (countInput) => dispatch(increamentCount(countInput)),
    decrementCount: (countInput) => dispatch(decrementCount(countInput))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count)
