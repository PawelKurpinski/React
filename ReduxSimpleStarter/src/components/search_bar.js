import React, {Component} from 'react';

class SearchBar extends Component{
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
            <input onChange = {event => console.log(event.target.value)} /> 
        )
    }


};

export default SearchBar