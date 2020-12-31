import React, { Component } from 'react';
import './Person.css'

const person = (props)=>{
    return (
    <div className='Person'>
        <p onClick={props.click}> i am a person name {props.name}! and i am {props.age} old</p>
        <p>{props.children}</p>
        <p><input type="text" onChange={props.changed} value={props.name}/></p>
    </div>
    )
};

export default person;