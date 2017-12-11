import React from 'react';

export default class extends React.Component{
  render(){
    return(
      <input type = "text" value = {this.props.data} onChange = {this.props.onChange} />
    )
  }
}
