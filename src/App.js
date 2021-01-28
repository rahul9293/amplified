import React  from 'react'

const App = () => {
  let [count, setCount]= React.useState(11)
  if (count<  0)
  {
      count =0
      alert("Count is already 0, stop pressing the button")
  }
  return(
    <>
  <h2>Hello World !</h2>
  <h3>Lets countdown !</h3>
  <h4>Count remaining = {count}</h4>
  <br/>
  <button onClick = {() => setCount(--count)}>Press Me</button>
  </>
  )
}

export default App