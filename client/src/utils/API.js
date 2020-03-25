import axios from "axios";

export default {
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    postUser: function(userData) {
        return axios.post("api/users", userData);
    },

    getEvent: function () {
        return axios.get("/api/events");
    }
};