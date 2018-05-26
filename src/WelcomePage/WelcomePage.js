import React, { Component } from "react";
import "./WelcomePage.css";
import store from "../store/store";

import image from "./media/dog.jpg";

export class WelcomePage extends Component {
  state = store.getState();

  render() {
    return (
      <div className={"container"}>
        <h3>Welcome, {this.state.name || "guest"}!</h3>
        <img className={"container__image"} src={image} alt="dog" />
      </div>
    );
  }
}
