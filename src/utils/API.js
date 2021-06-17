import axios from "axios";

const genEmpList = {
  genEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  }
}

 export default genEmpList;
//{
//     genEmployees: function() {
//       return axios.get("https://randomuser.me/api/?results=100");
//     }
//   };