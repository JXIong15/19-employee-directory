import React from "react";
import EmployeeDB from "./EmployeeDB";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th className="sortFunc" onClick={props.sortAlpha}>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {props.empList.map((emp) => {
          return <EmployeeDB
            key={emp.id.value}
            fullName={ emp.name.first  + emp.name.last }
            firstName = { emp.name.first }
            lastName = { emp.name.last }
            email = { emp.email }
            cell = { emp.cell }
            picture = { emp.picture.thumbnail }
            address = {
            emp.location.street.number + " " +
              emp.location.street.name + ", " +
              emp.location.city + ", " +
              emp.location.state + " " +
              emp.location.postcode
          }
          />
        })}
      </tbody>
    </table>
  );
}

export default Table;