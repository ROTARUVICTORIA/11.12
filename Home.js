import React, { Component } from 'react';
import {render} from "react-dom";
import Button from "./button.jsx";


class Home extends Component {
   render(){
    return(
    <div className="container"> 
    <Button/>
    </div>
    );
  }
}
export default Home;