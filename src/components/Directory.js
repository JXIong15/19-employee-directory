import React from "react";

class Directory extends React.Component {
    state = {
        empArr: [],
        sortEmp: [],
        search: "",
        sorted: false
    };

    handleSearch = (event) => {
        event.preventDefault();
        console.log("Search");
    }

    render() {
        return (
            <div className="search">
                <h1>Employee Directory</h1>
                <form>
                    <p>Search for an employee by name or email.</p>
                    <input type="text" placeholder="Search for Employee" />
                    <input type="submit" value="Search" onClick={this.handleSearch} />

                </form>

                <div className="emp-list">
                    <ul>
                        <li>emp list</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Directory;