import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>This is my new Person {props.name} Is he is {props.age}! His age is {Math.floor(Math.random()*30)}</p> 
            <p>{props.children}</p>
        </div>
    )
};

export default person;
