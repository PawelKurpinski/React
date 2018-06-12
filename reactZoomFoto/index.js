import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Hello extends React.Component{
    render() {
        return <h1>Hello, {this.props.name} {this.props.surname}</h1>
    }
};    
    
    
ReactDOM.render(
    <Hello name="Paweł" surname="Kozak" />,
    document.getElementById('app')
);
    
//--------------------------------------------------------------
    
      class Sum extends React.Component {
           render() {
                return <h1>{this.props.numbers.reduce((prev, next)=> {
                  return prev + next;
                })}
                </h1>;
      }
    }
    
        ReactDOM.render(
            <Sum numbers={[1, 2, 4, 6, 8]} />,
            document.getElementById('app')
        );
    
})

//---------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const menuItems = [
  {
    urL     :   '/',
    text    :   'Strona główna'
  },
  {
    urL     :   '/blog',
    text    :   'Blog'
  },
  {
    urL     :   '/pricing',
    text    :   'Cennik'
  },
  {
    urL     :   '/contact',
    text    :   'Kontakt'
  }]

  class Menu extends React.Component {
    render() {
      return <div><ul>
      {this.props.menu.map(element => {
        return <li>
        <a href={element.urL}>{element.text}</a>
        </li>
      })}
      </ul></div>;
    }
  }

  // function Menu(props){
  //     return <div><ul>
  //      {props.menu.map(element => {
  //        return <li>
  //        <a href={element.urL}>{element.text}</a>
  //        </li>
  //      })}
  //      </ul></div>;
  // }

document.addEventListener('DOMContentLoaded', function(){

  ReactDOM.render(    //this is the place where we are passing or getting access to our object menuItems as props!!!
      <Menu menu={menuItems}/>,
      document.getElementById('app')
  );
});

//------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const numberA = parseInt(prompt("wpisz A"));
  const numberB = parseInt(prompt("wpisz B"));
  const action = prompt("wpisz znak +,-,* lub /");

  function calc(numberA, numberB, action) {

  let result;
  switch (action) {
      case "+":
          result = <h1>{numberA + numberB}</h1>;
          break;
      case "-":
          result = <h2>{numberA - numberB}</h2>;
          break;
      case "*":
          result = <h3>{numberA * numberB}</h3>;
          break;
      case "/":
          result = <h4>{numberA / numberB}</h4>;
          break;
      default:
          result = "błędny typ działania";
  }
  return result
}

  ReactDOM.render(
      <div>{ calc(numberA, numberB, action) }</div>,
      document.getElementById('app')
  );
});

//-----------------------------------------------------------

import React, { Component } from 'react';

class Countdown extends Component {
  constructor(){
    super();
    this.state = {counter: 0, counter2: 0}
  }

  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onDoubleClick={this.incrementDouble.bind(this)}>+</button>
        <output>{this.state.counter}</output>
        <button onClick={this.decrement.bind(this)}>--</button>

   
        <output>{this.state.counter2}</output>
     
      </div>
    );
  }
  increment(){
    this.setState({
      counter: this.state.counter + 1
    });
  }
  incrementDouble(){
    this.setState({
      counter2: this.state.counter2 + 1
    });
  }
  
  decrement(){
    this.setState({
      counter: this.state.counter - 1
    });
  };

  // export default Countdown;
