import axios from "axios";

export default {
    getUser: function () {
        return axios.get("/api/users");
    },

    getEvent: function () {
        return axios.get("/api/events");
    }
};