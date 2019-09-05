import React, { Component } from 'react';
import './Schulte.css'
import Cell from '../Cell/Cell'
import _ from 'lodash'

class Schulte extends Component {

    constructor(props){
        super(props)

        let cells=[];
        for(let i=0;i<this.props.size;i++){
            cells.push({index:i+1,selected:false});
        }
        
        this.state={cells:_.shuffle(cells),curCellIndex:0};
        
        this.handleCellClick=this.handleCellClick.bind(this);
    }

    handleCellClick(cellIndex){

        if(cellIndex===this.state.curCellIndex+1){
            let cells=this.state.cells.slice();
            cells.find(cell=>cell.index===cellIndex).selected=true;
            this.setState({
                cells
            })
            // eslint-disable-next-line react/no-direct-mutation-state
            if(++this.state.curCellIndex===cells.length){
                setTimeout(()=>{
                    alert('Schulte Completed!');
                cells.forEach(cell => {
                    cell.selected=false;
                });
                this.setState({
                    cells:_.shuffle(cells)
                })
              },1000);
            }
        }
    }

    render() {
        let renderCells=this.state.cells.map((cell)=>
        <Cell selected={cell.selected} key={cell.index} index={cell.index} onCellClick={this.handleCellClick}/>
      )
       return(
        <div className="Schulte" style={{gridTemplateRows:'repeat('+ Math.sqrt(this.props.size)+',auto)',gridTemplateColumns:'repeat('+ Math.sqrt(this.props.size)+',auto)'}}>
            {renderCells}
        </div>
      )
   }
}

export default Schulte; // Don’t forget to use export default!