import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {  
    render() {
       return(
        <div className={'cell '+ (this.props.selected ? 'selected' : '')} style={{width:this.props.size,height:this.props.size}} onClick={()=>this.props.onCellClick(this.props.index)}>
          {this.props.index}
        </div>
    )
  }
}

export default Cell; // Don’t forget to use export default!