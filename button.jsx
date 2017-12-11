import C1 from "./C1.jsx";
import C2 from "./C2.jsx";
import React from "react";

export default class Button extends React.Component{
  state={i:0} 
  render(){
    return(
      <div>
      <C1 button={this.handleOnClick.bind(this)}/> 
      <C2 i={this.state.i}/>  
      </div>
    );
  }
  handleOnClick(){
    this.setState({i:++this.state.i});
  }
}
