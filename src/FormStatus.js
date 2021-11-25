import React from "react";
import "./Form.scss";

const FormStatus = (props) => {
  let status = props.status;
  return (
    <React.Fragment>
      {status === "Success" ? (
        <h1 className="statusSuccess">{"Success :)"}</h1>
      ) : null}
      {status === "Failed" ? (
        <h1 className="statusFailed">{"Input Failed :( "}</h1>
      ) : null}
    </React.Fragment>
  );
};

export default FormStatus;
