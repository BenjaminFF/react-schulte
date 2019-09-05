import React, { Component } from 'react';
import './App.css';
import Schulte from './components/Schulte/Schulte'

class App extends Component { 

  render(){
    return (
      <div className="App">
        <Schulte size="16"/>
      </div>
    )
  }
}

export default App;
