import React from "react";

function Employee(props) {
  return (
    <div>
      {/* <img src={props.picture} alt={props.lastName}></img> */}
        <h3>{props.firstName} {props.lastName}</h3>
        <h3>{props.email}</h3>
        <h3>{props.cell}</h3>
        <h3>{props.address}</h3>
    </div>
  );
}

export default Employee;