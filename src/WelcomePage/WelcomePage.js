import React, { Component } from "react";
import "./WelcomePage.css";

import image from "./media/dog.jpg";
import Button from "@material-ui/core/Button";

export class WelcomePage extends Component {
  getUsername = () => {
    return localStorage.name;
  };

  logOut = () => {
    localStorage.name = "";
  };

  render() {
    return (
      <div className={"container"}>
        <h3>Welcome, {this.getUsername() || "guest"}!</h3>
        <img className={"container__image"} src={image} alt="dog" />
        {this.getUsername() ? (
          <a href="/signup">
            <Button
              className={"container__button"}
              onClick={this.logOut}
              color="primary"
            >
              log out
            </Button>
          </a>
        ) : (
          <a href="/signup">
            <Button
              className={"container__button"}
              variant="raised"
              color="primary"
              onClick={() => {}}
            >
              Sign up
            </Button>
          </a>
        )}
      </div>
    );
  }
}
