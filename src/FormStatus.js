import React from "react";
import "./Form.scss";

const FormStatus = (props) => {
  let status = props.status;

  //function to display final status of form.
  const finalStatus = () => {
    if (status === "Success")
      return <h1 className="statusSuccess">{"Success :)"}</h1>;
    else if (status === "Failed")
      return <h1 className="statusFailed">{"Input Failed :( "}</h1>;
    else return;
  };

  return <React.Fragment>{finalStatus()}</React.Fragment>;
};

export default FormStatus;
