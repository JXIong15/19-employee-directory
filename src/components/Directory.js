import React from "react";
import API from "../utils/API";
import Employee from "./Employee";

class Directory extends React.Component {
    state = {
        empList: [],
        sortEmp: [],
        search: "",
        sorted: false
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => this.setState({ empList: res.data.results }))
            .then(res => console.log(this.state.empList[0]))
            .catch(err => console.log(err));
    }

    handleSearch = (event) => {
        event.preventDefault();
        console.log("Search");

    }

    render() {
        return (
            <div className="directory">
                <h1>📖 <span>Employee Directory</span></h1>
                <div className="search">
                    <form className="row col-sm-12 col-md-6">
                        <p>Search for an employee by name or email.</p>
                        <input type="text" placeholder="Employee" />
                        <input type="submit" value="Search" onClick={this.handleSearch} />
                    </form>
                </div>

                {this.state.empList.map((emp) => {
                    <Employee 
                        id = {emp.id.value}
                        firstName = {emp.name.first} 
                        lastName = {emp.name.last} 
                        email = {emp.email}
                        cell = {emp.cell}
                        picture = {emp.picture}
                        address = {
                            emp.location.street.number + " " +
                            emp.location.street.name + ", " +
                            emp.location.city + ", " +
                            emp.location.state + " " +
                            emp.location.postcode
                        }
                    />


                })}
            </div>
        )
    }
}

export default Directory;