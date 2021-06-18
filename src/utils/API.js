import axios from "axios";

let API = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=100&seed=banana");
  }
};

export default API;