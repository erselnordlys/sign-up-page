import React, { Component } from "react";
import "./App.css";
import { SignUpForm } from "./Components/SignUpForm";
import { WelcomePage } from "./WelcomePage";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/welcome" component={WelcomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
