import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      para: '',
      
    }
  }
  checker(text) {
    let count = 0;
    for (let index in text) {
      const char = text[index];
      if (count >= 0) {
        if (char === '(') {
          count++;
        }
        if (char === ')') {
          count--;
        }
        
        if (count < 0) {
          return (<mark>{text[index]}</mark>)
        }
      }
    }
      
    if (count === 0) {
      return true;
    }

  };
  
  update(event) {
    this.setState({string: event.target.value});
    this.checker(this.state.string);
  }
  
  render() {
    return (
      <div>
        <input
          placeholder='text here' 
          type='text'
          value={this.state.string}
          onChange={(event)=>this.update(event)}
        />
        <p>{this.state.string}</p>
      </div>
    );
  };
}

export default App;
