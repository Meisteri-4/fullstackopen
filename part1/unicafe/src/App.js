import { useState } from 'react'

const Button = (props) => {
  return <button onClick={() => props.func(props.var + 1) }>{props.name}</button>
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={props.good} />
          <StatisticLine text={"neutral"} value={props.neutral} />
          <StatisticLine text={"bad"} value={props.bad} />
          <StatisticLine text={"all"} value={total} />
          <StatisticLine text={"average"} value={((props.good - props.bad) / (total)).toPrecision(2)} />
          <StatisticLine text={"positive"} value={(props.good / total * 100).toPrecision(2).toString() + " %"} />
          </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={setGood} var={good} name={"good"} />
      <Button func={setNeutral} var={neutral} name={"neutral"} />
      <Button func={setBad} var={bad} name={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App