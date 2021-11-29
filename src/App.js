import React from "react";
import Form from "./Form";
import FormStatus from "./FormStatus";
import Helper from "./Helper";

//function for validating input fields on the basis of error values.
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  //initalizing state
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
      status: "",
    };
  }

  //function for handling change in input fields and updating error state if any error exists.
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = Helper().test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  //function to reset the state
  resetHandler = () => {
    this.setState({
      fullName: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
      status: "",
    });
  };

  //function that updates the status on form submit after validating input fields.
  handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, email, password } = this.state;
    if (fullName === "" || email === "" || password === "") {
      this.setState({ status: "Failed" });
    } else if (validateForm(this.state.errors)) {
      this.setState({ status: "Success" });
    } else {
      this.setState({ status: "Failed" });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="formWrapper">
          <h2>Create Account</h2>
          <Form
            stateData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <button onClick={this.resetHandler} className="reset">
            Reset
          </button>
          <FormStatus status={this.state.status} />
        </div>
      </div>
    );
  }
}
