import React from "react";

function Employee(props) {
  console.log("Emp")
  return (
    <tr key={props.key}>
      <td>
        <img src={props.picture} alt={ props.fullName + "'s picture"}></img>pic
      </td>
      <td>{props.firstName} {props.lastName} name</td>
      <td>{props.email}email</td>
      <td>{props.cell}cell</td>
      <td>{props.address}addy</td>
    </tr>
  );
}

export default Employee;