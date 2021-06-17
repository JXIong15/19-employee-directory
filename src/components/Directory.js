import React from "react";
import API from "../utils/API";

class Directory extends React.Component {
    state = {
        empList: [],
        sortEmp: [],
        search: "",
        sorted: false
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => this.setState({ empList: res.data }))
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
                <div className="emp-list">
                    <ul>
                        <li>emp list</li>
                    </ul>

                    {this.state.empList}

                </div>

            </div>
        )
    }
}

export default Directory;