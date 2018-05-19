import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term: '' }; /* term is our name; we are initializing state */
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
            {/* The value of input is: {this.state.term} */}
            </div>    
        )
    }
};

export default SearchBar