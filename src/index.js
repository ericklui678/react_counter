import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

const App = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
