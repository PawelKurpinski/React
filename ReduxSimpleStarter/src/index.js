import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDrn9xRv8sLcxUifWnmvWcEetQNTcDRrSA';



class App extends React.Component {
  render() {
    return (
      <div>
        React simple starter WOW!!!!!
        <h1>Yes!!</h1>
        <p>I do love it! It's working!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));