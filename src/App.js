import React, { Component } from 'react';
import './App.css';
import {SignUpForm} from './Components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUpForm />
      </div>
    );
  }
}

export default App;
