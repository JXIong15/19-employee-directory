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
        filtered: false
    };

    componentDidMount = () => {
        API.genEmployees()
            .then(res => this.setState({ empList: res.data.results }))
            // .then(res => console.log(this.state.empList))
            .catch(err => console.log(err));
    }

    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { input, value } = event.target;

    //     // Updating the input's state
    //     this.setState({
    //       [input]: value
    //     });
    //     console.log(value)
    //     console.log(input)
    //   };


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
            this.setState({ filtered: true })
        })

        console.log(this.state.search);
        this.setState({ search: "" });
    }

    sortAlpha = (event) => {
        console.log("sort")
    }

    render() {
        return (
            <div className="directory">
                <h1><span>📖Employee Directory</span></h1>
                <Search
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />
                <Table 
                    empList={this.state.empList} 
                    sortAlpha={this.sortAlpha}
                />
                <Footer />
            </div>
        )
    }
}

export default Directory;