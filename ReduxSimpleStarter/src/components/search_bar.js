import React, {Component} from 'react';

/* What's going on? We want to show youtube films in our app. So we crated several components.
Index.js is still (we will change it) a  functional component witch iports another components for example 'search_bar".
A class base component can get props but functional comp not.   */

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term: 'Starting value' }; /* term is our name; we are initializing state - with empty string as it value for example "type sth" State is ALWAYS an OBJECT! */
    }
    // render(){
    //     return(<input onChange = {this.onInputChange} />)
    // }
    // onInputChange(event){  /* event and onInput...are my names BUT NOT onChange!! */
    //     return(
    //         console.log(event.target.value)
    //     )
    // }; or much shorter syntax with arrow function!

    render(){
        return(
            <div>
            <input
            value = {this.state.term} /* we are actually updating user input when state changes this is a controlled field!
            It's value is set by the STATE; VALUE makes the component a controlled input. So input is changing, "it tells to state Hey you need to change, its rerendering and the NEW STATE value BECOMES a real new STATE "start" value after rerendering SO FINALLY it becomes A REAL NEW VALUE of the input. SO:
            Actually change the input value they only triggered any EVENT.*/
            onChange = {event => this.setState({term: event.target.value})} /> 
            </div>     /* so EVENT is an object combined with event handlers. It contains also info about VALUE of the input. We get access to it with event.target.value */
        )
    }
};

export default SearchBar

    {/*  The value of input is: {this.state.term} */}
    {/* this looks strange but we want do it to get the value of the input from the page and update the state.
    Here the key element is our input. It says our sate to update and rerender the page. \
    We are using here next an CONTROLED COMPONENT - form element;
    The value of the input is equal to the state */}



