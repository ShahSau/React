import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'

class App extends Component {
  state={
    person:[
      {name:'shah', age:90},
      {name:'sah', age:60},
      {name:'hah', age:50}
    ]
  }
  switchNameHandler= (newName,newAge)=>{
    this.setState({
      person:[
        {name:newName, age:90},
        {name:'sah', age:60},
        {name:'hah', age:newAge}
      ]
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      person:[
        {name:'newName', age:90},
        {name:event.target.value, age:60},
        {name:'hah', age:89}
      ],
      showPerson:false
    })
  }
  togglePersonHandler=()=>{
    this.setState((state) => {
      if(state.showPerson === false){
        return {showPerson: true}
      }else{
        return {showPerson:false}
      }
    })
  }
  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }
    let person=null
    if(this.state.showPerson){
      person=(
      <div>
        <Person 
        name={this.state.person[0].name}
        age={this.state.person[0].age}/>
        <Person 
        name={this.state.person[1].name}
        age={this.state.person[1].age} click={this.switchNameHandler.bind(this,'maxi!!!!!',77)} changed={this.nameChangedHandler}>hi, this is just a try.</Person>
        <Person 
        name={this.state.person[2].name}
        age={this.state.person[2].age}/>
      </div>
      )
    }else{
      person=(
      <div>
        <Person 
        name={this.state.person[2].name}
        age={this.state.person[2].age}/>
      </div>
      )
    }
    return (
      <div className="App">
        <h1>hi, I am a React app</h1>
        <p>this is working</p>
        <button style={style}
        onClick={this.togglePersonHandler} >Switch name</button>
          {person}
      </div>
    )
  }
}

export default App;