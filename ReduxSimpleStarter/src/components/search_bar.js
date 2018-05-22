import React, {Component} from 'react';

/* What's going on? We want to show youtube films in our app. So we crated several components.
Index.js is still (we will change it) a  functional component witch iports another components for example 'search_bar".
A class base component can get props but functional comp not.   */

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term: '' }; /* term is our name; we are initializing state - with empty string as it value for example "type sth" */
    }
    // render(){
    //     return(
    //     <input onChange = {this.onInputChange} />
    //     )
    // }
    // onInputChange(event){  /* event and onInput...are my names */
    //     return(
    //         console.log(event.target.value)
    //     )
    // }; or much shorter syntax with arrow function!

    render(){
        return(
           // <input onChange = {event => console.log(event.target.value)} /> 
            // now we want to use state so:
            <div>
            <input
            value = {this.state.term} /* we are actually updating user input when state changes */
            onChange = {event => this.setState({term: event.target.value})} /> 
           {/*  The value of input is: {this.state.term} */}
             {/* this looks strange but we want do it to get the value of the input from the page and update the state.
            Here the key element is our input. It says our sate to update and rerender the page. \
            We are using here next an CONTROLED COMPONENT - form element;
            The value of the input is equal to the state */}
            </div>    
        )
    }
};

export default SearchBar