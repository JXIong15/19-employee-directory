import React from "react";
import Employee from "./Table";

function Table(props) {
  console.log("Table")
  return (
    <div>
      <div>
        {/* <img src={props.picture} alt={props.lastName}></img> */}
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Phone Number</h3>
        <h3>Address</h3>
      </div>

      {props.empList.map((emp) => {
        <Employee
          key={emp.id.value}
          firstName={emp.name.first}
          lastName={emp.name.last}
          email={emp.email}
          cell={emp.cell}
          picture={emp.picture.thumbnail}
          address={
            emp.location.street.number + " " +
            emp.location.street.name + ", " +
            emp.location.city + ", " +
            emp.location.state + " " +
            emp.location.postcode
          }
        />


      })}
    </div>
  );
}

export default Table;