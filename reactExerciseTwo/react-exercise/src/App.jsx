import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent";


class App extends Component {

  state = (
    {name: ""}
  )

  onInputHandler = (event) => {
    this.setState(
      { name: event.target.value }
    )
  }

  
  render() {
    const pStyle = {
      fontSize: '19px'
    };

    return (
      <div className="App">
        <input type="text" onChange={this.onInputHandler} ></input>
        <p style={pStyle}>{this.state.name.length}</p>
        <ValidationComponent />
      </div>
    );
  }
}

export default App;
