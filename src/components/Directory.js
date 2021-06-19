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

        firstAsc: false,
        lastAsc: false,
        emailAsc: false,
        phoneAsc: false,
        addressAsc: false
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => this.setState({ empList: res.data.results }))
            .catch(err => console.log(err));
    }



    // DOES NOT WORK
    handleSearch = (event) => {
        event.preventDefault();
        console.log("Search");
        this.setState({ search: event.target.value }, () => {
            let { empList, search } = this.state;
            let filterEmp = empList.filter((filtered) => {
                return (
                    filtered.name.first.toLowerCase().includes(search.toLowerCase()) ||
                    filtered.name.last.toLowerCase().includes(search.toLowerCase()) ||
                    filtered.email.toLowerCase().includes(search.toLowerCase())
                );
            });
            this.setState({ filterEmp });
            console.log(filterEmp);
        })

        console.log(this.state.search);
        this.setState({ search: "" });
    }


    order = (x,y, category) => {
        if (!category) {
            this.setState({ category: true});
            return (x > y ? 1 : -1)
        } else {
            this.setState({ category: false});
            return (x < y ? 1 : -1)
        }
    }


    sortBy = (key) => {
        let sortEmp = this.state.empList;

        // to sort by certain categories
        sortEmp.sort((a,b) => {
            if (!this.state.isAsc) {
            switch (key) {
                case "first": return (this.order(a.name.first, b.name.first, this.state.firstAsc))
                // (a.name.first > b.name.first ? 1 : -1);
                case "last": return (a.name.last < b.name.last ? 1 : -1);
                case "email": return (a.email > b.email ? 1 : -1);
                case "phone": return (a.cell > b.cell ? 1 : -1);
                case "address": return (a.location.street.number > b.location.street.number ? 1 : -1);
                default: return this.state.empList;
            }
        } else {

        }
        })

        if (!this.state.isAsc) {
            this.setState({ isAsc: true})
            console.log("asc")
        } else {
            this.setState({ isAsc: false})
            console.log("dec")
        };

        this.setState({ empList: sortEmp })

    }

    render() {
        return (
            <div className="directory">
                <h1><span>📖Employee Directory</span></h1>
                <Search
                    handleSearch={this.handleSearch}
                    search={this.state.search}
                />
                <Table
                    empList={this.state.empList}
                    // sortAlpha={this.sortAlpha}
                    sortBy={this.sortBy}
                />
                <Footer />
            </div>
        )
    }
}

export default Directory;