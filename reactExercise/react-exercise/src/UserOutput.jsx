import React from "react";

const userOutput = props => {
  return (
    <div>
      <p>User name is: {props.name}</p>
      <p>Second name is: {props.nameTwo}</p>
    </div>
  );
};

export default userOutput;
