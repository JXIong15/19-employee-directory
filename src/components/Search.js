import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form className="row col-sm-12 col-md-6">
        <p>Search for an employee by name or email.</p>
        <section>
        <input 
          type="text" 
          placeholder="Employee"
          onChange={props.handleInputChange}
          value={props.search}
        />
        <input 
          className="submit" 
          type="submit" 
          value="Clear"
          onClick={props.clearSearch}
        />
        </section>
      </form>
    </div>
  );
}

export default Search;