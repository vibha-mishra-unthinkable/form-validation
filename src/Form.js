import React from "react";
import "./Form.scss";

const Form = (props) => {
  const { fullName, email, password, errors } = props.stateData;
  const { handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="inputs">
        <label htmlFor="fullName" className="inputLabel">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          onChange={handleChange}
          value={fullName}
          noValidate
          className="inputText"
          autoComplete="off"
        />
        {errors.fullName.length > 0 && (
          <p className="error">{errors.fullName}</p>
        )}
      </div>
      <div className="inputs">
        <label htmlFor="email" className="inputLabel">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          noValidate
          className="inputText"
          autoComplete="off"
        />
        {errors.email.length > 0 && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputs">
        <label htmlFor="password" className="inputLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          noValidate
          className="inputText"
          autoComplete="off"
        />
        {errors.password.length > 0 && (
          <p className="error">{errors.password}</p>
        )}
      </div>

      <button className="create">Create</button>
    </form>
  );
};

export default Form;
