import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'

class App extends Component {
  state={
    person:[
      {id:'wwr', name:'shah', age:90},
      {id:'ttg',name:'sah', age:60},
      {id:'kuj',name:'hah', age:50}
    ]
  }


  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.person.findIndex(p=>{
      return p.id === id;
    })
    const per = {
      ...this.state.person[personIndex]
    };
    per.name = event.target.value;

    const person= [...this.state.person]
    person[personIndex]= per;
    this.setState({
      person: person})
  }

  deletePersonHandler = (personIndex) =>{
    const person = [...this.state.person]
    person.splice(personIndex,1)
    this.setState({person:person})

  }


  togglePersonHandler=()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})
  }
  render() {
    let style={
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }
    let person=null
    if(this.state.showPerson){
      person=(
      <div>
        {this.state.person.map((p,index)=>{
          return <Person 
          click={()=>this.deletePersonHandler(index)}
          name={p.name} 
          age={p.age} 
          key={p.id}
          changed= {(event)=>this.nameChangedHandler(event, person.id)}
          />
        })}
      
      </div>
      )
      style={
        backgroundColor:"red",
        border: '5px solid black',
      }
    }
    //let classes=['red', 'bold'].join(' ')
    let classes=[]
    if(this.state.person.length<=2){
      classes.push('red');
    }
    if(this.state.person.length<=1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>hi, I am a React app</h1>
        <p className={classes.join(' ')}>this is working</p>
        <button style={style}
        onClick={this.togglePersonHandler} >Switch name</button>
          {person}
      </div>
    )
  }
}

export default App;