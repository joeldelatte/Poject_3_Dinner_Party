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
    saveEvent: function(eventData) {
        return http.post("/api/events", eventData);
    },
    deleteEvent: function(id) {
        return http.delete("/api/events/" + id);
    }
};