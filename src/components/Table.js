import React from "react";
import EmployeeDB from "./EmployeeDB";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th className="sortFunc">
            <span onClick={() => props.sortBy("first")}>First</span>
          </th>
          <th className="sortFunc">
            <span onClick={() => props.sortBy("last")}>Last</span>
          </th>
          <th className="sortFunc">
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th>
            <span onClick={() => props.sortBy("phone")}>Phone Number</span>
          </th>
          <th>
            <span onClick={() => props.sortBy("address")}>Address</span>
          </th>
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