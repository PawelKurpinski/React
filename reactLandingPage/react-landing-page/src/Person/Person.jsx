import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>This is my new Person {props.name} Is he is {props.age}! His age is {Math.floor(Math.random()*30)}</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;

/* here we have a nice example of adding event handler which is actually in an app file. We name it click but it could be tomato ;) and we use props! In App component we need to add click property combined with event handler */

