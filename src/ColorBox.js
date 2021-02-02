import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  
    render() {
    return (
      <div className="color-box" style={{opacity: 1}}>
        {this.props.opacity >= 0.2 ? (<ColorBox opacity={this.props.opacity-0.1}/>) : null}
      </div>
    ) }
  }


  // function ColorBox(props) {
  //   return (
  //     <div className="color-box" style={{opacity: 0.5 /*replace null with the value*/}}>
  //       {props.opacity >= 0.2 ? (<ColorBox opacity={props.opacity-0.1}/>) : null}
  //     </div>
  //   )
  // }
// export default ColorBox
