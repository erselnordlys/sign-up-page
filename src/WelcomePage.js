import React, { Component } from "react";
import "./WelcomePage.css";

import image from "./media/dog.jpg";

export class WelcomePage extends Component {
  render() {
    return (
      <div className={"container"}>
        <h3>Welcome!</h3>
        <img className={"container__image"} src={image} />
      </div>
    );
  }
}
