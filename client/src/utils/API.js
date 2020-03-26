import axios from "axios";

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