import React from 'react';
import './App.css';
import FetchRandomUser from './Components/FetchRandomUser';

function App() {
  return (
    <div className="App">
      {/*<Header 
      title="Hello from App" 
      num={5}  
      myArr={[10,2,3]}
      myFunc={(a,b)=> a+b }
      myObj={{a: 5, b:18}}/>
      <Body text="I'm hello" />
      <Body2 />
      <Counter initialCount={0} />
      <Counter initialCount={100} />
      <ImageSlider />*/}
      <FetchRandomUser />
    </div>
  );
}

export default App;
