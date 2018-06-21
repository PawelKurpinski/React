import React, { Component } from 'react';


class App extends Component {

  state = (
    {name: ""}
  )

  onInputHandler = (event) => {
    this.setState(
      { name:event.target.value }
    )
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onInputHandler} value={this.name}></input>
        <p>{this.state.name.length}</p>

      </div>
    );
  }
}

export default App;
