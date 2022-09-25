import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;

function Counter(){
  const [count, setCount] = useState(33);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  

  /* 
  const increaseCount = () => {
     const newCount = count + 1;
     setCount(newCount);
   } 
   */
 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Incrise</button>
      <button onClick={decreaseCount}>Decrise</button>
    </div>
  )
}
