import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  state = {
    userName: "Paweł",
    userNameTwo: "Leila"
  };

  userNameHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    const inputStyle = {
      backgroudColor: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      borderRadius: "5px",
      cursor: "pointer"
    };

    const outputStyle = {
      backgroudColor: "green",
      color: "red",
      border: "3px solid green",
      width: "20px"
    };

    return (
      <div style={inputStyle} className="App">
        <UserInput name={this.state.userName} change={this.userNameHandler} />
        <UserOutput
          style={outputStyle}
          name={this.state.userName}
          nameTwo={this.state.userNameTwo}
        />
      </div>
    );
  }
}

export default App;
