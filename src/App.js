import React, { Component } from "react";
import "./App.css";
import { SignUpForm } from "./Components/SignUpForm";
import { WelcomePage } from "./WelcomePage/WelcomePage";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/signup" component={SignUpForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
