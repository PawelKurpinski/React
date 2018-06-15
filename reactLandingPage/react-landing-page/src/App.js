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

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Maximilian' , age: 29},
      {name: 'Jasio', age: 34},
      {name: event.target.value, age: 22}
    ] })
  }

  render() {
    const buttonStyle = {
      backgroudColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer'   
    };

    return (
     
     <div className="App">
        <h1>Hi I'm a React App!</h1>
        
        <button style={buttonStyle} onClick={this.switchNameHandler}>Click me!!</button>
        
        <Person name="Paweł" age='38' />

        <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        
        <Person name="John">Ciekawostka!</Person>
        
        <Person name={this.state.persons[2].name} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}/>
          
        {/* Warning! this.withNameHandler() will be executed immediately but we do not wont it! */}
      </div>
    );
  }
}
export default App;