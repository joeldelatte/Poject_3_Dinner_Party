import http from "./http-common";

export default {
    getUser: function(password) {
        return http.get("/api/users/" + password);
    },
    postUser: function(userData) {
        return http.post("api/users", userData);
    },
    getEvent: function () {
        return http.get("/api/events");
    }
};