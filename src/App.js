import React from "react";
import Form from "./Form";
import FormStatus from "./FormStatus";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
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
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.fullName === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Invalid Input");
      console.log(this.state.status);
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
