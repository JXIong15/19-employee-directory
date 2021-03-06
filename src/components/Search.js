import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form className="row col-sm-12 col-md-6">
        <p>Search for an employee by name or email.</p>
        <input 
          type="text" 
          placeholder="Employee"
          onChange={props.handleInputChange}
        />
      </form>
    </div>
  );
}

export default Search;