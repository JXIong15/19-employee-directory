import React from "react";

function Employee(props) {
  return (
    <tr>
      <td>
        <img src={props.picture} alt="profile picture"></img>
      </td>
      <td>{props.firstName} {props.lastName} name</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
      <td>{props.address}</td>
    </tr>
  );
}

export default Employee;