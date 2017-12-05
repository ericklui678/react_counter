import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='col-5 text-center border border-dark pb-2 rounded'>
        <h1>Counter here</h1>
        <div className='row d-flex justify-content-center'>
          <button type="button" className="btn btn-success mr-1">
            Increment
          </button>
          <button type="button" className="btn btn-danger ml-1">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
