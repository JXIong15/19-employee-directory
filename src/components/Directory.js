import React from "react";
import API from "../utils/API";
import Employees from "./Employees";
import Search from "./Search";

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
                <Search handleSearch={this.handleSearch} />

                {this.state.empList.map((emp) => {
                    <Employees 
                        key = {emp.id.value}
                        firstName = {emp.name.first} 
                        lastName = {emp.name.last} 
                        email = {emp.email}
                        cell = {emp.cell}
                        picture = {emp.picture.thumbnail}
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