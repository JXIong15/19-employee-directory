import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";
import Footer from "./Footer";

class Directory extends React.Component {
    state = {
        empList: [],
        filterEmp: [],
        sortDirection: ""
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => {
                this.setState({ empList: res.data.results });
                this.setState({ filterEmp: res.data.results });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const searchTerm = event.target.value;

        // filters for a list of employees that match the input value
        let filterEmp = this.state.empList.filter((filtered) => {
            let values = Object.values(filtered).join("").toLowerCase();
            return values.indexOf(searchTerm.toLowerCase()) !== -1
        });
        this.setState({ filterEmp: filterEmp });
    };

    // allows for ascending or descending list order
    order = (x, y) => {
        if (!(this.state.sortDirection === "asc")) {
            this.setState({ sortDirection: "asc" });
            return (x > y ? 1 : -1)
        } else {
            this.setState({ sortDirection: "desc" });
            return (x < y ? 1 : -1)
        }
    }

    sortBy = (key) => {
        let sortEmp = this.state.empList;

        // to sort by certain categories
        sortEmp.sort((a, b) => {
            switch (key) {
                case "first": return (this.order(a.name.first, b.name.first))
                case "last": return (this.order(a.name.last, b.name.last));
                case "email": return (this.order(a.email, b.email));
                case "phone": return (this.order(a.cell, b.cell));
                case "address": return (this.order(a.location.street.number, b.location.street.number));
                default: return this.state.empList;
            }
        })
        this.setState({ empList: sortEmp });
    }

    render() {
        return (
            <div className="directory">
                <h1><span>📖Employee Directory</span></h1>
                <Search handleInputChange={this.handleInputChange} />
                <Table
                    empList={this.state.filterEmp}
                    sortBy={this.sortBy}
                />
                <Footer />
            </div>
        )
    }
}

export default Directory;