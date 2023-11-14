import React, {useState, useCallback} from "react"
// import {useEffect} from 'react'
// import {useRef} from 'react'
import { connect } from 'react-redux';
import { IncrementAction, DecrementAction } from './actions';
import './App.css';

// Hooks Concept of useState ::

// function App() {
//   const [count, setCount] = useState(0)
//   const increaseCount = ()=>{
//     setCount(count + 1)
//   }
//   return (
//     <div className="App">
//       <h1>You Have Clicked Button {count} Times</h1>
//       <button onClick={increaseCount}>Click Here</button>
//     </div>
//   );
// }

// Hooks Concept of UseEffect ::

// function App (){
//   const [count, setCount] = useState(0)
//   const increaseCount = ()=>{
//     setCount(count + 1)
//   }
//   useEffect(()=>console.log({count}), [count])
//   return(
//     <div className="App">
//       <h1>You Have Clicked Button {count} Times</h1>
//       <button onClick={increaseCount}>Click Here</button>
//     </div>
//   )
// }

// Hooks Concept of UseRef ::

// function App (){
//   const data = useRef(null)
//   const submitHandler = (event)=>{
//     event.preventDefault();
//     console.log(data.current.value)
//   }
//   return(
//     <div className="App">
//       <form onSubmit={submitHandler}>
//         <input ref={data} type="text" placeholder="Please Enter Your Name"/> <br/>
//         <input type="submit"/>
//       </form>
//     </div>
//   )
// }

// Hooks Concept of useMemo ::

// function App() {
//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(5) //using for factorial for number
//   const factorial = React.useMemo(()=>fact(number),[number]) 

//   const increaseCount = ()=>{
//     setCount(count + 1)
//   }
//   const increaseNumber =()=>{
//     setNumber(number + 1)
//   }
//   return (
//     <div className="App">
//       <h1>Factorial: {factorial}</h1>
//       <h1>You Have Clicked Button {count} Times</h1>
//       <button onClick={increaseCount}>Click Here</button>
//       <h1>You Have Clicked Button {number} Times</h1>
//       <button onClick={increaseNumber}>Click Here</button>
//     </div>
//   );
// }

// const fact = (n) =>{
//   let answer = 1
//   for (let i = n; i>=1; i--){
//     answer = answer * i 
//   }
//   console.log("Factorial Function Calling")
//   return answer
// }

// Hooks Concpts of useCallback ::

// const functionsCounter = new Set()

// function App (){
//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(0)

//   const increaseCount = useCallback(()=>{
//     setCount(count + 1)
//   }, [count])

// const increaseNumber = useCallback(()=>{
//   setNumber(number + 1)
// }, [number])

// functionsCounter.add(increaseCount)
// functionsCounter.add(increaseNumber)

// console.log(functionsCounter)

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <h1>Number: {number}</h1>
//       <button onClick={increaseCount}>Increase Count</button>
//       <button onClick={increaseNumber}>Increase Number</button>
//     </div>

//   )
// }

// Redux :::

// const mapStateToProps = state =>({
//   local_varaiable : state
// })

// function App ({local_varaiable, IncrementAction, DecrementAction}){
//   return(
//     <div>
//       <h1>{local_varaiable}</h1>
//       <button onClick={IncrementAction}>Increment</button>
//       <button onClick={DecrementAction}>Decrement</button>
//     </div>
//   )
// }

// export default connect(mapStateToProps, {IncrementAction, DecrementAction}) (App);

const App = (props) =>{
  const [count, setCount] = useState(0)
  return(
    <div>
      <h1>Hello World!</h1>
      <p>Komaraju Bablu</p>
      <div id='welcome'>
        Welcome To Learn Unit Testing {props.name}
      </div>
      <div id="intialCounter">{count}</div>
    </div>
  )
} 

export default App