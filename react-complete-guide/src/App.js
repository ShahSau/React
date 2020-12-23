import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi, I am a React app</h1>
        <p>this is working</p>
        <Person />
      </div>
    );
  }
}

export default App;
