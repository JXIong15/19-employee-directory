import React from "react";

function Employees(props) {
  return (
    <div>
      <img src={props.picture} alt={props.lastName}></img>
        <h3>Name: {props.firstName} {props.lastName}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Phone Number: {props.cell}</h3>
        <h3>Address: {props.address}</h3>
    </div>
  );
}

export default Employees;