import React, { Component } from "react";

class Test extends Component{
		constructor() {
			super()
			this.state ={

				arr:[1,2,3]
			}
				 
			

	}
  render(){
		let arrays = this.state.arr.map(items => <h1> {items * 7} </h1>)
    return(
   <div> {arrays}  </div>
  )}
}

export default Test 