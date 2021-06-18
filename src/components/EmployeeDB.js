import React from "react";

function EmployeeDB(props) {
  return (
    <tr>
      <td>
        <img src={props.picture} alt={ props.fullName + "'s picture"}></img>
      </td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
      <td>{props.address}</td>
    </tr>
  );
}

export default EmployeeDB;