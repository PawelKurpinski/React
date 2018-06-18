import React, { Component } from "react";
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
       const outputStyle = {
      backgroudColor: "green",
      color: "red",
      border: "3px solid green",
      width: "20px"
    };

    return (
      <div className="App">
        <UserInput currentName={this.state.userName} change={this.userNameHandler} />
        
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