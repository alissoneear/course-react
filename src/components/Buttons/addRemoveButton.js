import React, { Component } from 'react';

export default class AddRemoveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Alisson",
      counter : 0
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase(){
    let state = this.state;
    state.counter += 1;
    this.setState(state);
  }
  decrease(){
    let state = this.state;
    state.counter -= 1;
    this.setState(state);
  }

  render() { 
    return (
      <div>
        <h1>Counter</h1>
        <h3>
          <button onClick={this.decrease}>-</button>
          {this.state.counter}
          <button onClick={this.increase}>+</button>
        </h3>
      </div>
    );
  }
}