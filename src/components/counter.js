import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'count': 0
    };
  }
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className='col-5 text-center border border-dark pb-2 rounded'>
          <h1>{this.state.count}</h1>
          <div className='row d-flex justify-content-center'>
            <button type="button" className="btn btn-success mr-1"
              onClick = {() => this.increment()}>
              Increment
            </button>
            <button type="button" className="btn btn-danger ml-1"
              onClick = {() => this.decrement()}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
  increment() {
    this.setState({count: this.state.count + 1});
  }
  decrement() {
    if (this.state.count) this.setState({count: this.state.count - 1})
  }
}

export default Counter;
