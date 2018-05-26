import React, { Component } from "react";
import "./SignUpForm.css";

import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

/**
 * TODO: validate every field before send
 */

export class SignUpForm extends Component {
  state = {
    name: "",
    lastName: "",
    date: "2018-05-24",
    gender: "female",
    isInvalid: {
      name: false,
      lastName: false,
      date: false
    }
  };

  setData = (key, e) => {
    // this.validate(key);
    this.setState({
      [key]: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      name: "",
      lastName: "",
      date: "2018-05-24",
      gender: "female",
      isInvalid: {
        name: false,
        lastName: false,
        date: false
      }
    });
  };

  sendForm = () => {
    const { isInvalid } = this.state;

    this.validate("name");
    this.validate("lastName");
    this.validate("date");

    if (!isInvalid.name && !isInvalid.lastName && !isInvalid.date) {
      console.log("send");
    }
  };

  validate = key => {
    const { isInvalid } = this.state;
    if (key === "date") {
      const today = new Date();
      const givenDate = new Date(this.state[key]);
      isInvalid[key] = today < givenDate;
    } else {
      isInvalid[key] = this.state[key].length < 2;
    }

    this.setState({
      isInvalid
    });
  };

  makeValid = key => {
    const { isInvalid } = this.state;
    isInvalid[key] = false;

    this.setState({
      isInvalid
    });
  };

  render() {
    const { name, isInvalid, lastName, date, gender } = this.state;

    return (
      <div className={"form"}>
        <h3>Sign up form 🙌</h3>
        <TextField
          className={"form__element form__element_input"}
          label={"name"}
          value={name}
          onChange={e => this.setData("name", e)}
          onBlur={() => this.validate("name")}
          onFocus={() => this.makeValid("name")}
          helperText={isInvalid.name && "Must be at least 2 digits long"}
          error={isInvalid.name}
        />
        <TextField
          className={"form__element form__element_input"}
          label={"last-name"}
          value={lastName}
          onChange={e => this.setData("lastName", e)}
          onBlur={() => this.validate("lastName")}
          onFocus={() => this.makeValid("lastName")}
          helperText={isInvalid.lastName && "Must be at least 2 digits long"}
          error={isInvalid.lastName}
        />
        <TextField
          className={"form__element form__element_input"}
          id="date"
          label="Date of birth"
          type="date"
          defaultValue={date}
          value={date}
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => this.setData("date", e)}
          onBlur={() => this.validate("date")}
          onFocus={() => this.makeValid("date")}
          helperText={isInvalid.date && "Must be today or earlier"}
          error={isInvalid.date}
        />
        <FormLabel component="legend" className={"form__element"}>
          Gender
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={"form__element form__element_radio-group"}
          value={gender}
          onChange={e => this.setData("gender", e)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <div className={"form__element form__element-buttons"}>
          <Button
            className={"form__element form__element-button"}
            onClick={this.resetForm}
          >
            Reset
          </Button>
          <Button
            className={"form__element form__element-button"}
            variant="raised"
            color="primary"
            onClick={this.sendForm}
          >
            Sign up
          </Button>
        </div>
      </div>
    );
  }
}
