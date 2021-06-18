import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";
import Footer from "./Footer";

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
            // .then(res => console.log(this.state.empList))
            .catch(err => console.log(err));
    }

    handleSearch = (event) => {
        event.preventDefault();
        console.log("Search");

    }

    render() {
        return (
            <div className="directory">
                <h1><span>📖Employee Directory</span></h1>
                <Search handleSearch={this.handleSearch} />
                <Table empList={this.state.empList} />
                <Footer />
            </div>
        )
    }
}

export default Directory;