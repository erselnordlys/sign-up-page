import React, { Component } from "react";
import "./SignUpForm.css";
import { Route } from "react-router-dom";
import MaskedInput from "react-text-mask";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

const TextMaskCustom = props => (
  <MaskedInput
    {...props}
    ref={props.inputRef}
    mask={[
      "+",
      /[7]/,
      " ",
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]}
    placeholderChar={"\u2000"}
    showMask
  />
);

export class SignUpForm extends Component {
  state = {
    name: "",
    lastName: "",
    date: "",
    gender: "female",
    email: "",
    phone: "+7 (  )    -    ",
    isInvalid: {
      name: false,
      lastName: false,
      date: false,
      email: false,
      phone: false
    }
  };

  setData = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      name: "",
      lastName: "",
      date: "",
      gender: "female",
      email: "",
      phone: "+7 (  )    -    ",
      isInvalid: {
        name: false,
        lastName: false,
        date: false,
        email: false,
        phone: false
      }
    });
  };

  sendForm = history => {
    const { name, isInvalid } = this.state;

    this.validate("name");
    this.validate("lastName");
    this.validate("date");
    this.validate("email");
    this.validate("phone");
    if (
      !isInvalid.name &&
      !isInvalid.lastName &&
      !isInvalid.date &&
      !isInvalid.email &&
      !isInvalid.phone
    ) {
      localStorage.setItem("name", name);
      history.push("/");
    }
  };

  validate = key => {
    const { isInvalid } = this.state;
    if (key === "date") {
      const today = new Date();
      const givenDate = new Date(this.state[key]);
      isInvalid[key] = today < givenDate;
    } else if (key === "email") {
      const email = this.state[key];
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isInvalid[key] = !re.test(String(email).toLowerCase());
    } else if (key === "phone") {
      const phone = this.state[key];
      const re = /\+7\s\([1-9]{3}\)\s{1}([0-9]{3}-[0-9]{4})$/;
      isInvalid[key] = !re.test(String(phone));
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
    const {
      name,
      isInvalid,
      lastName,
      date,
      gender,
      email,
      phone
    } = this.state;

    return (
      <div className={"form"}>
        <h3>Sign up form 🙌</h3>
        <TextField
          className={"form__element form__element_input"}
          label={"Name"}
          value={name}
          onChange={e => this.setData("name", e)}
          onBlur={() => this.validate("name")}
          onFocus={() => this.makeValid("name")}
          helperText={isInvalid.name && "Must be at least 2 digits long"}
          error={isInvalid.name}
        />

        <TextField
          className={"form__element form__element_input"}
          label={"Last name"}
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
          label={"Date of birth"}
          type="date"
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

        <TextField
          className={"form__element form__element_input"}
          label={"E-mail"}
          value={email}
          onChange={e => this.setData("email", e)}
          onBlur={() => this.validate("email")}
          onFocus={() => this.makeValid("email")}
          helperText={isInvalid.email && "Expected format: example@mail.com"}
          error={isInvalid.email}
        />

        <FormControl className={"form__element form__element_input"}>
          <InputLabel
            htmlFor="formatted-text-mask-input"
            error={isInvalid.phone}
          >
            Phone
          </InputLabel>
          <Input
            value={phone}
            onChange={e => this.setData("phone", e)}
            onBlur={() => this.validate("phone")}
            onFocus={() => this.makeValid("phone")}
            inputComponent={TextMaskCustom}
            error={isInvalid.phone}
          />
          {isInvalid.phone && (
            <FormHelperText error>
              Expected format: +7 (999) 999-99-99
            </FormHelperText>
          )}
        </FormControl>

        <div className={"form__element form__element-buttons"}>
          <Button
            className={"form__element form__element-button"}
            onClick={this.resetForm}
          >
            Reset
          </Button>

          <Route
            render={({ history }) => (
              <Button
                className={"form__element form__element-button"}
                variant="raised"
                color="primary"
                onClick={() => this.sendForm(history)}
              >
                Sign up
              </Button>
            )}
          />
        </div>
      </div>
    );
  }
}
