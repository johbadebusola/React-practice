
import React, { Component } from "react";

class Binding extends Component {
  constructor(){
    super()
    this.state ={
      message:"good"
    }
  }
change = () => {
  this.setState({
    message:"the best drill rapper"
  })
}
  
 changeBtn = () => {
  alert("Hello")
}
  
  render() {
    return (
      <div className="App">
        <button onClick={this.changeBtn}> Click </button>
        <h2> Central cee is  {this.state.message}</h2>
        <button onClick={this.change}> changeText </button>
      </div>
    )
  }
}

export default Binding