import http from "./http-common";

export default {
    getUser: function(password) {
        return http.get("/api/users/" + password);
    },
    postUser: function(userData) {
        return http.post("api/users", userData);
    },
<<<<<<< HEAD
    getEvent: function () {
        return http.get("/api/events");
=======
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
>>>>>>> Develop
    }
};