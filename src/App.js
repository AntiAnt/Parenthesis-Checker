import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      para: '',
      index: null
      
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
      }  
      if (count < 0) {
        return index;
      } 
    }
      
    if (count === 0) {
      return null;
    }
    if (count > 0) {
      return text.length - 1;
    }
  };
  
  update(event) {
    this.setState({string: event.target.value});
    var x = this.checker(this.state.string);
    this.setState({index: x});
  }
  renderString(){
   
    if (this.state.index === null){
      return <p>{this.state.string}</p>;
    }
    let leftSide = this.state.string.slice(0, this.state.index);
    let rightSide = this.state.string.slice(this.state.index+1);
    return <p>{leftSide}<mark>{this.state.string[this.state.index]}</mark>{rightSide}</p>;
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
        {this.renderString()}
      </div>
    );
  };
}

export default App;
