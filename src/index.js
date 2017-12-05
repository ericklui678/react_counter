import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'counterArr': [<Counter key={0}/>]
    }
  }
  addCounter () {
    this.state.counterArr.push(<Counter key={this.state.counterArr.length} />)
    return this.state;
  }

  render() {
    return (
      <div>
        <div className='row ml-3 mt-3'>
          <button type="button" className="btn btn-primary"
            onClick = {() => this.setState(this.addCounter()) }>
            Add counter
          </button>
        </div>
        {this.state.counterArr}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
