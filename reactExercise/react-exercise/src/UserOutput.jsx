import React from "react";
import './UserOutput.css'

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>User name is: {props.name}</p>
      <p>Second name is: {props.nameTwo}</p>
    </div>
  );
};

export default userOutput;
