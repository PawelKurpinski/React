// import React, { Component } from "react";
// import "./App.css";
// import Person from './Person/Person';

// class App extends Component {
//   /*  state = {
//     age: 40 
//   } */
//   state = {
//     persons: [
//       { name: "Max", age: 27 },
//       { name: "Adam", age: 34 },
//       { name: "Wojtek", age: 22 }
//     ],
//     showPersons: false
//   };

//   /* this below is my name but its good to write it with "handler" to emphasize it relation with an event */

//   switchNameHandler = () => {
//     /* alert('I was clicked!'); */
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Edek", age: 34 },
//         { name: "Kazik!!!!", age: 22 }
//       ]
//     });
//   };

//   nameChangeHandler = event => {
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Jasio", age: 34 },
//         { name: event.target.value, age: 22 }
//       ]
//     });
//   };
//     /* with arrow fuction keyword "this" always refers to class! */
//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;  /* showPersons: !showPersons will not work so we are adding a new const doesShow*/
//     this.setState({
//       showPersons: !doesShow /*  It sets boolean to true when its false and false when it's true BUT! this will not affact with change of the other state elements - only showPerson */
//     })
//   }

//   render() {
//     const buttonStyle = {
//       backgroudColor: "white",
//       border: "1px solid blue",
//       font: "inherit",
//       padding: "8px",
//       borderRadius: "5px",
//       cursor: "pointer"
//     };

//     return (
//       <div className="App">
//         <h1>Hi I'm a React App!</h1>

//         <button style={buttonStyle} /* onClick={this.switchNameHandler} we srarted with it but we want to change it */
//           onClick={this.togglePersonsHandler}>
//           Click to show or hyde!
//         </button>
//         {
//           this.state.showPersons ?  /* this is a short "if statement" whitch means: "if showPersons === true ReactcreateElement() which works behind the scenes   or  do nothing=render nothing (null). The "traditional" if will not work here. Attention! this is pure JS in fact (ok looking like jsx) thats why we use {} here. In state we set showPersons on false so it a boolien */
//         <div> 
//             <Person name="Paweł" age="38" />
//             <Person
//               name={this.state.persons[0].name}
//               age={this.state.persons[0].age}/>
//             <Person name="John">Ciekawostka!</Person>
//             <Person
//               name={this.state.persons[2].name}
//               click={this.switchNameHandler.bind(this, "Max!")}
//               changed={this.nameChangeHandler}/>
//         </div> : null
//         }
//         {/* Warning! this.withNameHandler() will be executed immediately but we do not wont it! */}
//       </div>
//     );
//   }
// }
// export default App;

/* ----------------------------------------------------------------------------------------------------------------------------------- */

// import React, { Component } from "react";
// import "./App.css";
// import Person from './Person/Person';

// class App extends Component {
//   /*  state = {
//     age: 40 
//   } */
//   state = {
//     persons: [
//       { name: "Max", age: 27 },
//       { name: "Adam", age: 34 },
//       { name: "Wojtek", age: 22 }
//     ],
//     showPersons: false
//   };

//   /* this below is my name but its good to write it with "handler" to emphasize it relation with an event */

//   switchNameHandler = () => {
//     /* alert('I was clicked!'); */
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Edek", age: 34 },
//         { name: "Kazik!!!!", age: 22 }
//       ]
//     });
//   };

//   nameChangeHandler = event => {
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Jasio", age: 34 },
//         { name: event.target.value, age: 22 }
//       ]
//     });
//   };
    
//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;  
//     this.setState({ showPersons: !doesShow }); /* here we ajust the state (here boolean value) so if it's true toggle it to false and vice versa */
//   }

//   render() {
//     const buttonStyle = {
//       backgroudColor: "white",
//       border: "1px solid blue",
//       font: "inherit",
//       padding: "8px",
//       borderRadius: "5px",
//       cursor: "pointer"
//     };  
//     /* rendering doesn't mean retutning! so here we can write 'wanila JS' */

//     let persons = null;

//     if(this.state.showPersons /* === true */){
//       persons = (
//         <div>
//             <Person name="Paweł" age="38" />
//             <Person
//               name={this.state.persons[0].name}
//               age={this.state.persons[0].age}/>
//             <Person name="John">Ciekawostka!</Person>
//             <Person
//               name={this.state.persons[2].name}
//               click={this.switchNameHandler.bind(this, "Max!")}
//               changed={this.nameChangeHandler}/>
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi I'm a React App!</h1>
//         <button style={buttonStyle} 
//           onClick={this.togglePersonsHandler}>
//           Click to show or hyde!</button> 
//         {persons}
//       </div>       
//     );
//   }
// }
// export default App;

/* ----------------------------------------------------------------------------------------------------------------------------------- */

// import React, { Component } from "react";
// import "./App.css";
// import Person from './Person/Person';

// class App extends Component {
//   /*  state = {
//     age: 40 
//   } */
//   state = {
//     persons: [
//       { name: "Max", age: 27 },
//       { name: "Adam", age: 34 },
//       { name: "Wojtek", age: 22 }
//     ],
//     showPersons: false
//   };

  /* this switch below is my name but its good to write it with "handler" to emphasize it relation with an event */

//   switchNameHandler = () => {
//     /* alert('I was clicked!'); */
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Edek", age: 34 },
//         { name: "Kazik!!!!", age: 22 }
//       ]
//     });
//   };

//   nameChangeHandler = event => {
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 29 },
//         { name: "Jasio", age: 34 },
//         { name: event.target.value, age: 22 }
//       ]
//     });
//   };
    
//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;  
//     this.setState({ showPersons: !doesShow }); /* here we ajust the state (here boolean value) so if it's true toggle it to false and vice versa */
//   }

//   render() {
//     const buttonStyle = {
//       backgroudColor: "white",
//       border: "1px solid blue",
//       font: "inherit",
//       padding: "8px",
//       borderRadius: "5px",
//       cursor: "pointer"
//     };  
//     /* rendering doesn't mean retutning! so here we can write 'wanila JS' */

//     let persons = null;

//     if(this.state.showPersons /* === true */){
//       persons = (
//         <div> 
//             {this.state.persons.map((person,index) => { /* person here is not persons!! it could be tomato */
//               return <Person
//               name={person.name}
//               age={person.age}/>
//               })
//             }
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi I'm a React App!</h1>
//         <button style={buttonStyle} 
//           onClick={this.togglePersonsHandler}>
//           Click to show or hyde!</button> 
//         {persons}
//       </div>       
//     );
//   }
// }
// export default App;

/* ----------------------------------------------------------------------------------------------------------------------------------- */

import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  /*  state = {
    age: 40 
  } */
  state = {
    persons: [
      { name: "Max", age: 27 },
      { name: "Adam", age: 34 },
      { name: "Wojtek", age: 22 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const newPersons = this.state.persons.slice();  
    newPersons.splice(personIndex, 1);  
    this.setState({persons: newPersons});
    } 
  
    /* Attention! here SLICE makes a COPY of our STATE with is a good practise!! 
  Another option is: const newPersons = [...this.state.persons] It uses SPRED operator */
  /* SPLICE removes one element from the array because we want finaly remove only one clicked element; 
  personIndex shows which clicked element should be removoed from the DOM */

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { id: 'a', name: "Maximilian", age: 29 },
        { id: 'b', name: "Jasio", age: 34 },
        { id: 'c', name: event.target.value, age: 22 }
      ]
    });
  };
    
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  
    this.setState({ showPersons: !doesShow }); 
    /* here we ajust the state (here boolean value) so if it's true toggle it to false and vice versa */
  }

  render() {
    const buttonStyle = {
      backgroudColor: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      borderRadius: "5px",
      cursor: "pointer"
    };   
    /* rendering doesn't mean returning! so here we can write 'wanila JS' */

    let persons = null;

    if(this.state.showPersons /* === true */){
      persons = (
        <div> 
            {this.state.persons.map((person,index) => { 
              return <Person
              click={this.deletePersonHandler.bind(this, index)}  /* We have click event listener in the component - Person */
              name={person.name}
              age={person.age} 
              key={person.id}/>
              })
            }
        </div>
      );
    }
        /* person here is not persons!! it could be tomato. 
            To return below dynamically a list of person elements based on the array of objects "persons" - instead of copying and pasting them three times as <Person ....../> we use map method */

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <button style={buttonStyle} 
          onClick={this.togglePersonsHandler}>
          Click to show or hyde!</button> 
          {persons}
      </div>       
    );
  }
}
export default App;
