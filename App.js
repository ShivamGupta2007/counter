import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter,color] = React.useState(0);
  const handleIncrement = (value)=> {
    setCounter(counter + value);
  };
  
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
      <button onClick={()=>handleIncrement(-1)}>Decrement</button>
      <button onClick={()=>handleIncrement(2*1)}>Double</button>
    </div>
  );
} 
export default App;
