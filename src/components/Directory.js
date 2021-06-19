import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";
import Footer from "./Footer";

class Directory extends React.Component {
    state = {
        empList: [],
        filterEmp: [],
        search: "",
        sortDirection: ""
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => this.setState({ empList: res.data.results }))
            .catch(err => console.log(err));
    }

// VALUE AND SEARCH ARE DIFF BY 1 INPUT
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        this.setState({ search: value });
        // console.log(value)
        // console.log(this.state.search)
    };


    // DOES NOT WORK. FILTER IS BEHIND BY 1 SEARCH TOO, LIKE FUNC ABOVE
    handleSearch = (event) => {
        event.preventDefault();
        const value = event.target.value;
        console.log("Value: " + value)
        // this.setState({ search: event.target.value }, () => {
            let { empList, search } = this.state;
            console.log(search)
            let filterEmp = empList.filter((filtered) => {
                return (
                    filtered.name.first.toLowerCase().includes(search.toLowerCase()) ||
                    filtered.name.last.toLowerCase().includes(search.toLowerCase()) ||
                    filtered.email.toLowerCase().includes(search.toLowerCase())
                );
            });
            this.setState({ filterEmp:filterEmp });
            console.log(this.state.filterEmp);
        // })

        console.log(this.state.search);
        this.setState({ search: "" });
    }

    // allows dor ascending or descending list order
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
                <Search
                    handleInputChange = {this.handleInputChange}
                    handleSearch = {this.handleSearch}
                    search = {this.state.search}
                />
                <Table
                    empList = {this.state.empList}
                    sortBy = {this.sortBy}
                />
                <Footer />
            </div>
        )
    }
}

export default Directory;