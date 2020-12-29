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
  render() {
    return (
      <div className="App">
        <h1>hi, I am a React app</h1>
        <p>this is working</p>
        <button>Switch name</button>
        <Person name={this.state.person[0].name}age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name}age={this.state.person[1].age}>hi, this is just a try.</Person>
        <Person name={this.state.person[2].name}age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
