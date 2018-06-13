import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 /*  state = {
    age: 40 
  } */
  state = {
    persons: [
      {name: 'Max' , age: 27},
      {name: 'Adam', age: 34},
      {name: 'Wojtek', age: 22}
    ]
  }

  /* this below is my name but its good to write it with "handler" to emphasize it relation with an event */

  switchNameHandler = () => {
    /* alert('I was clicked!'); */
    this.setState({persons: [
        {name: 'Maximilian' , age: 29},
        {name: 'Edek', age: 34},
        {name: 'Kazik!!!!', age: 22}
      ] })
  }

  render() {
    return (
     
     <div className="App">
        <h1>Hi I'm a React App!</h1>
        <Person name="Paweł" age='38' />
        <Person name="Peter" age={this.state.age} />
        <Person name="John">Ciekawostka!</Person>
        <Person name={this.state.persons[2].name} click={this.switchNameHandler}/>
        {/* Warning! this.withNameHandler() will be executed immediately but we do not wont it! */}
        <button onClick={this.switchNameHandler}>Click me!!</button>
      </div>
    );
  }
}

export default App;
