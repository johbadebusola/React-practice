import * as React from 'react';
import './App.css';
import styles from './style.module.css'
import Test from './class'
import List from './List'
import Binding from './eventBinding'
import Even from './EvenNumbers'
import Form from '.Form';
function App() {
  return (
    <div>
			  <Test /> 
			{/*<Binding /> */}
			{/* <Even /> */}
			<p className={styles.success}> 
			HELLO WORLD
			</p>
			<form />
    </div>

    
  );
}

export default App;