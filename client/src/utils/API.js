import axios from "axios";

axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
      "Content-type": "application/json"
    }
  });

export default {
    getUser: function(password) {
        return axios.get("/api/users/" + password);
    },
    postUser: function(userData) {
        return axios.post("api/users", userData);
    },
    getEvent: function () {
        return axios.get("/api/events");
    }
};