import React from "react";

function Employee(props) {
  return (
    <div className="text-center">
      <p>{props.empList}</p>
    </div>
  );
}

export default Employee;