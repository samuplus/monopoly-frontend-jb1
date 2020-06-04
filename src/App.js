import React, { useState } from 'react';
// import Menu from './pages/Menu';
import Routes from './routes';
import './global.css';

// import Header from './Header'; 

function App() {
  // let counter = useState(0);
  // useState function returns an Array [value, updateFunction -> changes value]
  // Use [] to destructure Array

  // let [counter, setCounter] = useState(0)

  // function increment() {
  //   // counter += 1;   Cannot use this with useState due to immutability
  //   setCounter(counter + 1);

  //   console.log(counter);
  // }

  return (
    <div>
      <Routes/>
    </div>
  );

  // return (
  //   <div>
  //     <Header>Counter: {counter}</Header>
  //     <button onClick={increment}>ADD 1</button>
  //   </div>
  // );
}

export default App;
