import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName="Pawel" />
      </div>
    );
  }
}

export default App;
