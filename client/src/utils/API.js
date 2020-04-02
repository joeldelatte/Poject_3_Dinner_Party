import http from "./http-common";

export default {
    getUser: function(password) {
        return http.get("/api/users/" + password);
    },
    postUser: function(userData) {
        return http.post("api/users", userData);
    },
    getEvent: function (id) {
        return http.get("/api/events/" + id);
    },
    getEvents: function () {
        return http.get("/api/events");
    },
    getUsername: function(username) {
        return http.get("/api/users/" + username);
    },
    createEvent: function(eventData) {
        return http.post("/api/create", eventData);
    }
};