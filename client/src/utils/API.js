import axios from "axios";

export default {
    getUser: function(password) {
        return axios.get("/api/users/" + password);
    },
    postUser: function(userData) {
        return axios.post("api/users", userData);
    },
    getEvent: function (id) {
        return axios.get("/api/events/" + id);
    },
    getEvents: function () {
        return axios.get("/api/events");
    },
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    },
    deleteEvent: function(id) {
        return axios.delete("/api/events/" + id);
    }
};