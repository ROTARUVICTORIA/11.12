import C1 from "./CC1.jsx";
import C2 from "./CC2.jsx";
import React from "react";

export default class Button extends React.Component{
  constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
  
  render(){
    return(
         <div>
            <C1 value={this.state.data} onChange={this.updateState}/>
           <C2 data={this.state.data}/>
         </div>
    );
  }
}
