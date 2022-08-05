import * as React from 'react';
import './App.css';
import Test from './class'
import List from './List'
import Binding from './eventBinding'
import Even from './EvenNumbers'
function App() {
  return (
    <div className="App">
     <Test name="Jerry"/>
      <Test name="John"/>
<Binding />
		<List />
		<Even />
    </div>

    
  );
}

export default App;