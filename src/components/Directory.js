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
        categories: [
            {name: "first"},
            {name: "last"},
            {name: "email"},
            {name: "phone"},
            {name: "address"}
        ]
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

    sortBy = () => {
        console.log("sort")
        let sortEmp = this.state.empList;
        sortEmp.sort((a,b) => {
            return (a.name.first > b.name.first ? 1 : -1)
        })

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