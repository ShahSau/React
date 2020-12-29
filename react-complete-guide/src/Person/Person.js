import React, { Component } from 'react';

const person = (props)=>{
    return (
    <div>
        <p>i am a person name {props.name}! and i am {props.age} old</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;